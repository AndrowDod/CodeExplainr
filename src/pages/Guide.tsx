import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code2, Upload, Settings, Download, Share2, Sparkles } from "lucide-react";

const Guide = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              دليل الاستخدام
            </h1>
            <p className="text-xl text-muted-foreground">
              كل ما تحتاج معرفته لاستخدام CodeExplainr بفعالية
            </p>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">البداية السريعة</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                CodeExplainr هي أداة مجانية بالكامل تستخدم الذكاء الاصطناعي لشرح الأكواد البرمجية
                بطريقة سهلة ومفهومة. يمكنك البدء فوراً بدون تسجيل أو دفع.
              </p>
              <Link to="/demo">
                <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                  جرب الآن
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary-foreground" />
                  </div>
                  الخطوة 1: إدخال الكود
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>هناك طريقتان لإدخال الكود:</p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>
                    <strong>اللصق المباشر:</strong> انسخ الكود من محررك والصقه في المحرر
                  </li>
                  <li>
                    <strong>رفع ملف:</strong> اضغط على زر "رفع ملف" واختر ملف الكود من جهازك
                  </li>
                </ul>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm">
                    💡 <strong>نصيحة:</strong> يمكنك لصق ما يصل إلى 500 سطر من الكود في المرة الواحدة
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <Settings className="w-5 h-5 text-primary-foreground" />
                  </div>
                  الخطوة 2: اختيار الإعدادات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>اختر الإعدادات المناسبة لك:</p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>
                    <strong>لغة البرمجة:</strong> اختر اللغة (C#, Python, JavaScript, إلخ)
                  </li>
                  <li>
                    <strong>لغة الشرح:</strong> عربي أو إنجليزي
                  </li>
                  <li>
                    <strong>مستوى التفاصيل:</strong> بسيط، متوسط، أو مفصل
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  الخطوة 3: توليد الشرح
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>اضغط على زر "شرح الكود" وانتظر لحظات:</p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>سيتم تحليل الكود بواسطة الذكاء الاصطناعي</li>
                  <li>ستحصل على شرح سطر بسطر</li>
                  <li>ملخص قصير جاهز للمشاركة</li>
                  <li>أسئلة تدريبية لاختبار فهمك</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Download className="w-5 h-5 text-primary-foreground" />
                  </div>
                  الخطوة 4: التصدير والمشاركة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>بعد الحصول على الشرح، يمكنك:</p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>
                    <strong>تحميل PDF:</strong> احفظ الشرح كملف PDF للقراءة لاحقاً
                  </li>
                  <li>
                    <strong>نسخ الملخص:</strong> انسخ الملخص الجاهز للنشر على مواقع التواصل
                  </li>
                  <li>
                    <strong>مشاركة الرابط:</strong> شارك رابط الشرح مع الآخرين
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Share2 className="w-6 h-6 text-primary" />
                  لغات البرمجة المدعومة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["C#", "Python", "JavaScript", "Java", "TypeScript", "PHP", "Ruby", "Go", "Rust", "SQL", "HTML/CSS", "React"].map((lang) => (
                    <div key={lang} className="px-4 py-2 bg-muted rounded-lg text-center">
                      {lang}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle>نصائح للحصول على أفضل النتائج</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>تأكد من أن الكود سليم ويعمل بدون أخطاء</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>أضف تعليقات توضيحية في الكود إذا كان معقداً</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>اختر مستوى التفاصيل المناسب لمستواك</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>استخدم أمثلة واقعية للحصول على شروحات أفضل</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>الأسئلة الشائعة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">هل الخدمة مجانية حقاً؟</h4>
                  <p className="text-muted-foreground">
                    نعم! CodeExplainr مجاني 100% بدون حدود أو رسوم خفية.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">هل تحتفظون بأكوادي؟</h4>
                  <p className="text-muted-foreground">
                    لا. نحن لا نحتفظ بأي أكواد بعد المعالجة. خصوصيتك مهمة لنا.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">كم من الوقت يستغرق الشرح؟</h4>
                  <p className="text-muted-foreground">
                    عادةً بين 5-30 ثانية حسب طول وتعقيد الكود.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              مازلت تحتاج مساعدة؟
            </p>
            <Link to="/contact">
              <Button variant="outline">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Guide;
