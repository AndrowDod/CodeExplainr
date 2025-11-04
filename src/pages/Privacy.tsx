import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            سياسة الخصوصية
          </h1>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>مقدمة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                نحن في CodeExplainr نلتزم بحماية خصوصيتك. هذه السياسة توضح كيفية 
                تعاملنا مع المعلومات عند استخدامك لخدمتنا.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>جمع البيانات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                <strong>الأكواد البرمجية:</strong> نقوم بمعالجة الأكواد التي ترسلها 
                لنا مؤقتاً فقط لتوليد الشرح. لا نحتفظ بأكوادك بعد المعالجة.
              </p>
              <p>
                <strong>البيانات التحليلية:</strong> نستخدم أدوات تحليلية (مثل Google Analytics) 
                لفهم كيفية استخدام الموقع وتحسين الخدمة. هذه البيانات مجهولة الهوية.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>استخدام البيانات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <ul className="list-disc list-inside space-y-2">
                <li>معالجة طلبات شرح الأكواد</li>
                <li>تحسين جودة الخدمة</li>
                <li>تحليل أنماط الاستخدام</li>
                <li>منع إساءة الاستخدام</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>حماية البيانات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                نستخدم تقنيات الأمان الحديثة لحماية بياناتك أثناء النقل والمعالجة.
                جميع الاتصالات مشفرة باستخدام HTTPS.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>مشاركة البيانات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                لا نبيع أو نشارك أكوادك أو معلوماتك الشخصية مع أطراف ثالثة، 
                باستثناء ما هو ضروري لتشغيل الخدمة (مثل خدمات الاستضافة السحابية).
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>حقوقك</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>لديك الحق في:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>معرفة البيانات التي نجمعها عنك</li>
                <li>طلب حذف بياناتك</li>
                <li>الاعتراض على معالجة بياناتك</li>
                <li>تحديث معلوماتك</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>ملفات تعريف الارتباط (Cookies)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                نستخدم ملفات تعريف الارتباط الضرورية لتشغيل الموقع وتحليل الاستخدام.
                يمكنك تعطيلها من إعدادات المتصفح، لكن قد يؤثر ذلك على بعض الوظائف.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>التواصل</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا عبر 
                صفحة الاتصال.
              </p>
              <p className="text-sm">
                آخر تحديث: يناير 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
