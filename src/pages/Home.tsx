import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Sparkles, FileText, Share2, Zap, Shield, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-36 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-slide-in-up">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">مجاني بالكامل - بدون حدود</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-10 pb-3 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
                اشرح أي كود برمجي
                <br />
                فى ثوانى
            </h1>


            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
              منصة ذكاء اصطناعي مجانية تشرح الأكواد البرمجية سطراً بسطر، 
              وتنشئ ملخصات جاهزة للمشاركة، وتساعدك على فهم أي كود بسهولة
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/demo">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 text-lg px-8">
                  <Code2 className="w-5 h-5 ml-2" />
                  ابدأ الشرح مجاناً
                </Button>
              </Link>
              <Link to="/guide">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <FileText className="w-5 h-5 ml-2" />
                  كيف تستخدمه؟
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">لماذا CodeExplainr؟</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              أدوات قوية لفهم ومشاركة الأكواد البرمجية
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">شرح سطر بسطر</h3>
                <p className="text-muted-foreground">
                  احصل على شرح تفصيلي لكل سطر في الكود بالعربية أو الإنجليزية
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <Share2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">جاهز للمشاركة</h3>
                <p className="text-muted-foreground">
                  ملخصات احترافية جاهزة للنشر على LinkedIn و TikTok
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">تصدير PDF</h3>
                <p className="text-muted-foreground">
                  احفظ الشروحات كملف PDF جاهز للطباعة أو المشاركة
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">سريع وفوري</h3>
                <p className="text-muted-foreground">
                  احصل على الشرح في ثوانٍ معدودة بفضل الذكاء الاصطناعي
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">آمن ومجاني</h3>
                <p className="text-muted-foreground">
                  أكوادك آمنة ولا نحتفظ بها. الخدمة مجانية 100%
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">متعدد اللغات</h3>
                <p className="text-muted-foreground">
                  يدعم جميع لغات البرمجة الشائعة: C#, Python, JavaScript وأكثر
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">كيف يعمل؟</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ثلاث خطوات بسيطة للحصول على شرح احترافي
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">الصق الكود</h3>
              <p className="text-muted-foreground">
                انسخ والصق الكود الذي تريد شرحه أو ارفع ملف
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">اختر الإعدادات</h3>
              <p className="text-muted-foreground">
                حدد لغة البرمجة ولغة الشرح (عربي/إنجليزي)
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">احصل على الشرح</h3>
              <p className="text-muted-foreground">
                اقرأ، حمّل، أو شارك الشرح التفصيلي فوراً
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              جاهز لفهم أكوادك بشكل أفضل؟
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              ابدأ الآن مجاناً بدون تسجيل أو بطاقات ائتمانية
            </p>
            <Link to="/demo">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 text-lg px-8">
                <Sparkles className="w-5 h-5 ml-2" />
                ابدأ الشرح الآن
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
