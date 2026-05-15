import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-primary py-16">
    <div className="section-container">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <span className="font-display font-black text-accent-foreground text-sm">IKT</span>
            </div>
            <span className="font-display font-bold text-primary-foreground text-lg">IK Tangience LLP</span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Precision structural steel design, drafting, and detailing services for the global construction industry.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-primary-foreground text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Projects", "Contact","Team"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-primary-foreground/60 text-sm hover:text-accent transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-primary-foreground text-sm mb-4">Services</h4>
          <ul className="space-y-2">
            {["Steel Design", "Steel Detailing", "3D Modeling", "Shop Drawings", "Connection Design"].map((s) => (
              <li key={s} className="text-primary-foreground/60 text-sm">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-primary-foreground text-sm mb-4">Connect</h4>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="text-primary-foreground/40 text-sm">
          © 2012 IK Tangience Engineering. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
