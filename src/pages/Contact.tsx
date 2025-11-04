import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 256"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden
    {...props}
  >
    <path d="M240 96.5c-28.8 0-53.6-23.5-54.2-52.3h-34.4v135.8c0 25.1-20.3 45.4-45.4 45.4S60.6 205 60.6 179.9s20.3-45.4 45.4-45.4c5.3 0 10.4 0.9 15.1 2.7V98.8c-5-0.7-10.1-1.1-15.1-1.1-39.5 0-71.6 32.1-71.6 71.6S66.5 241 106 241s71.6-32.1 71.6-71.6v-79.7c12.5 11.6 29.1 18.8 47.4 18.8V96.5z"/>
  </svg>
);

const Contact = () => {

  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              تواصل معنا
            </h1>
            <p className="text-xl text-muted-foreground">
              تم انشاء هذا الموقع بواسطة: Androw Safowat
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex flex-col items-center gap-6">
                <p className="text-lg text-center">
                  تابع المطوّر على المنصات التالية
                </p>
                <div className="flex items-center gap-4">
                  <Button asChild variant="outline">
                    <a href="https://www.linkedin.com/in/androwsafowat/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://github.com/AndrowDod" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://www.tiktok.com/@androw_safowat?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <TikTokIcon className="w-5 h-5" />
                      TikTok
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
