import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Sparkles, Download, Copy, Loader2, FileUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import DOMPurify from "dompurify";

const Demo = () => {
  const [code, setCode] = useState("");
  const [explanationLang, setExplanationLang] = useState("ar");
  const [detailLevel, setDetailLevel] = useState("medium");
  const [isLoading, setIsLoading] = useState(false);
  const [explanation, setExplanation] = useState("");
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        setCode(content);
        toast({
          title: "تم رفع الملف بنجاح",
          description: `تم تحميل ${file.name}`,
        });
      };
      reader.readAsText(file);
    }
  };

  const handleExplain = async () => {
    if (!code.trim()) {
      toast({
        title: "خطأ",
        description: "يرجى إدخال الكود أولاً",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setExplanation("");

    try {
      const { data, error } = await supabase.functions.invoke("explain-code", {
        body: {
          code: code,
          explanationLanguage: explanationLang,
          detailLevel: detailLevel,
        },
      });

      if (error) throw error;

      if (data?.error) {
        throw new Error(data.error);
      }

      setExplanation(data.explanation);
      toast({
        title: "تم الشرح بنجاح",
        description: "يمكنك الآن قراءة الشرح وتحميله",
      });
    } catch (error) {
      console.error("Error explaining code:", error);
      toast({
        title: "حدث خطأ",
        description: error instanceof Error ? error.message : "فشل في شرح الكود",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(explanation);
    toast({
      title: "تم النسخ",
      description: "تم نسخ الشرح إلى الحافظة",
    });
  };

  const handleDownloadPDF = () => {
    // Simple text export (in real app, use a PDF library like jsPDF)
    const element = document.createElement("a");
    const file = new Blob([explanation], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "code-explanation.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "تم التحميل",
      description: "تم تحميل الشرح",
    });
  };

  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10 pb-3 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              جرب الآن مجاناً
            </h2>
            <p className="text-xl text-muted-foreground">
              الصق الكود واحصل على شرح تفصيلي في ثوانٍ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  الكود البرمجي
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Code Input */}
                <div>
                  <Label htmlFor="code">الصق الكود هنا أو ارفع ملف</Label>
                  <Textarea
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="// الصق الكود البرمجي هنا..."
                    rows={15}
                    className="font-mono text-sm mt-2"
                    dir="ltr"
                  />
                  <div className="mt-2">
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      accept=".js,.ts,.py,.java,.cs,.cpp,.c,.php,.rb,.go,.rs,.sql,.html,.css,.txt"
                      onChange={handleFileUpload}
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById("file-upload")?.click()}
                    >
                      <FileUp className="w-4 h-4 ml-2" />
                      رفع ملف
                    </Button>
                  </div>
                </div>

                {/* Settings */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="explang">لغة الشرح</Label>
                    <Select value={explanationLang} onValueChange={setExplanationLang}>
                      <SelectTrigger id="explang" className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ar">عربي</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="detail">مستوى التفاصيل</Label>
                    <Select value={detailLevel} onValueChange={setDetailLevel}>
                      <SelectTrigger id="detail" className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="simple">بسيط</SelectItem>
                        <SelectItem value="medium">متوسط</SelectItem>
                        <SelectItem value="detailed">مفصل</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  onClick={handleExplain}
                  disabled={isLoading || !code.trim()}
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                      جاري الشرح...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 ml-2" />
                      شرح الكود
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Output Section */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-secondary" />
                    الشرح
                  </span>
                  {explanation && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={handleCopy}>
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleDownloadPDF}>
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!explanation && !isLoading && (
                  <div className="flex flex-col items-center justify-center h-[400px] text-center text-muted-foreground">
                    <Code2 className="w-16 h-16 mb-4 opacity-20" />
                    <p>الصق الكود واضغط "شرح الكود" للبدء</p>
                  </div>
                )}

                {isLoading && (
                  <div className="flex flex-col items-center justify-center h-[400px]">
                    <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
                    <p className="text-muted-foreground">جاري تحليل الكود...</p>
                  </div>
                )}

                {explanation && (
                  <Tabs defaultValue="full" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="full">الشرح الكامل</TabsTrigger>
                      <TabsTrigger value="formatted">منسق</TabsTrigger>
                    </TabsList>
                    <TabsContent value="full" className="mt-4">
                      <div className="prose prose-sm max-w-none whitespace-pre-wrap bg-muted p-4 rounded-lg max-h-[500px] overflow-y-auto">
                        {explanation}
                      </div>
                    </TabsContent>
                    <TabsContent value="formatted" className="mt-4">
                      <div 
                        className="prose prose-sm max-w-none space-y-4 bg-muted p-6 rounded-lg max-h-[500px] overflow-y-auto"
                        dangerouslySetInnerHTML={{ 
                          __html: DOMPurify.sanitize(
                            explanation
                              .replace(/## (.*)/g, '<h3 class="text-xl font-bold mt-6 mb-3 text-primary border-b-2 border-primary/20 pb-2">$1</h3>')
                              .replace(/\[([^\]]+)\]/g, '<div class="bg-background/50 p-4 rounded-lg my-3 border-r-4 border-primary">$1</div>')
                              .replace(/- ([^\n]+)/g, '<div class="flex items-start gap-3 my-2 pr-2"><span class="text-primary text-lg mt-0.5">•</span><span class="flex-1">$1</span></div>')
                              .replace(/\n\n/g, '<div class="h-2"></div>')
                              .replace(/\n/g, '<br />'),
                            {
                              ALLOWED_TAGS: ['h3', 'div', 'span', 'br'],
                              ALLOWED_ATTR: ['class']
                            }
                          )
                        }}
                      />
                    </TabsContent>
                  </Tabs>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Example Section */}
          <Card className="mt-8 border-primary/20">
            <CardHeader>
              <CardTitle>مثال سريع</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                جرب هذا المثال لترى كيف يعمل:
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setCode(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`);
                }}
              >
                استخدم مثال Fibonacci
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Demo;
