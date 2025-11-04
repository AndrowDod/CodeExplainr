import { Link } from "react-router-dom";
import { Code2, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CodeExplainr
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              منصة مجانية بالكامل لشرح الأكواد البرمجية باستخدام الذكاء الاصطناعي. 
              نساعدك على فهم الكود بشكل أفضل وأسرع.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">روابط سريعة</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                الرئيسية
              </Link>
              <Link to="/demo" className="text-muted-foreground hover:text-primary transition-colors">
                التجربة
              </Link>
              <Link to="/guide" className="text-muted-foreground hover:text-primary transition-colors">
                دليل الاستخدام
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">قانوني</h3>
            <div className="flex flex-col gap-2">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                سياسة الخصوصية
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 CodeExplainr. جميع الحقوق محفوظة.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/androwsafowat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/AndrowDod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@androw_safowat?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-5 h-5 fill-muted-foreground hover:fill-primary transition-colors"
              >
                <path d="M33.6,14.5c-1.9-1.2-3.4-3.1-3.9-5.4h0c-0.2-0.7-0.3-1.5-0.3-2.2h-4.9v24.4c0,2.7-2.2,5-5,5c-2.7,0-5-2.2-5-5
	                c0-2.7,2.2-5,5-5c0.5,0,1,0.1,1.5,0.2v-5.1c-0.5-0.1-1-0.1-1.5-0.1c-5.5,0-10,4.5-10,10s4.5,10,10,10c5.5,0,10-4.5,10-10V18.7
	                c2.2,1.6,4.9,2.5,7.8,2.5v-4.9C36.1,16.3,34.7,15.6,33.6,14.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
