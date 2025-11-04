import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CodeExplainr
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link to="/demo" className="text-foreground hover:text-primary transition-colors">
              التجربة
            </Link>
            <Link to="/guide" className="text-foreground hover:text-primary transition-colors">
              دليل الاستخدام
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              تواصل معنا
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/demo">
              <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg">
                جرب الآن مجاناً
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-in-up">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                الرئيسية
              </Link>
              <Link
                to="/demo"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                التجربة
              </Link>
              <Link
                to="/guide"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                دليل الاستخدام
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                تواصل معنا
              </Link>
              <Link to="/demo" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
                  جرب الآن مجاناً
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
