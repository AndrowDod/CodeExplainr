import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Rate limiting
interface RateLimit {
  count: number;
  resetTime: number;
}

const rateLimits = new Map<string, RateLimit>();

function checkRateLimit(ip: string, maxRequests = 10, windowMs = 60000): boolean {
  const now = Date.now();
  const limit = rateLimits.get(ip);
  
  if (!limit || now > limit.resetTime) {
    rateLimits.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (limit.count >= maxRequests) {
    return false;
  }
  
  limit.count++;
  return true;
}

// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, limit] of rateLimits.entries()) {
    if (now > limit.resetTime) {
      rateLimits.delete(ip);
    }
  }
}, 300000);

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Rate limiting check
  const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0].trim() 
    || req.headers.get('x-real-ip') 
    || 'unknown';

  const { explanationLanguage } = await req.clone().json().catch(() => ({ explanationLanguage: 'ar' }));

  if (!checkRateLimit(clientIP)) {
    console.warn(`Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ 
        error: explanationLanguage === 'ar' 
          ? 'تم تجاوز الحد المسموح. يرجى الانتظار دقيقة واحدة.'
          : 'Rate limit exceeded. Please wait 1 minute.'
      }),
      { 
        status: 429, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'Retry-After': '60'
        }
      }
    );
  }

  try {
    const { code, explanationLanguage, detailLevel } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Build the system prompt based on parameters
    const detailLevelMap: Record<string, string> = {
      simple: "اشرح الكود في 3 نقاط فقط. جُمل قصيرة جداً (5–8 كلمات لكل نقطة). بدون مقدمات أو تفاصيل زائدة.",
      medium: "اشرح الكود في 4 نقاط كحد أقصى. اختصر للأهم فقط. بدون تفاصيل تنفيذية.",
      detailed: "اشرح الكود في 5 نقاط كحد أقصى. نقاط تقنية مختصرة جداً بلا إسهاب."
    };

    const systemPrompt = explanationLanguage === "ar" 
      ? `أنت خبير برمجة تشرح الأكواد بإيجاز شديد ومنهجية. ${detailLevelMap[detailLevel] || detailLevelMap.medium}.

التزم بالقواعد التالية بدقة:
- لا مقدمة ولا خاتمة ولا اعتذارات.
- لا أمثلة مطولة ولا تكرار ولا إعادة صياغة الكود.
- إجمالي الرد لا يتجاوز ${(detailLevel === "simple" ? "70" : detailLevel === "medium" ? "100" : "130")} كلمة.
- استخدم نقاط تبدأ بشرطة - في قسم الشرح فقط.

قدّم الرد بهذا التنسيق حصراً:

## 📌 شرح مختصر
- [${detailLevel === "simple" ? "3" : detailLevel === "medium" ? "حتى 4" : "حتى 5"} نقاط. كل نقطة 5–8 كلمات، بلا تفاصيل.]

## 💡 الفكرة الرئيسية
- [سطر واحد فقط يوضح الفكرة]

## ❓ سؤال سريع 
- [سؤال واحد بسيط لاختبار الفهم]`
      : `You are a senior engineer who explains code extremely concisely.
Rules:
- No intro/outro, no apologies, no repeated code.
- Total response <= ${detailLevel === "simple" ? "70" : detailLevel === "medium" ? "100" : "130"} words.
- Use hyphen bullets in the first section only. Keep sentences 5–10 words.

Return exactly in this format:

## 📌 Brief Explanation
- [${detailLevel === "simple" ? "3" : detailLevel === "medium" ? "up to 4" : "up to 5"} bullets. Short, essential points.]

## 💡 Main Idea
- [One single sentence]

## ❓ Quick Question
- [One simple check question]`;

    const userPrompt = explanationLanguage === "ar"
      ? `يرجى شرح الكود التالي (حدد لغة البرمجة تلقائياً):\n\n\`\`\`\n${code}\n\`\`\``
      : `Please explain the following code (auto-detect the programming language):\n\n\`\`\`\n${code}\n\`\`\``;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: "تم تجاوز الحد المسموح من الطلبات. يرجى المحاولة لاحقاً." 
          }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ 
            error: "يرجى إضافة رصيد إلى حسابك في Lovable AI." 
          }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const explanation = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ explanation }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in explain-code function:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "حدث خطأ غير متوقع" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
