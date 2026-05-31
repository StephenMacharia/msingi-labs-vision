import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/msingi-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="inline-flex items-center mb-4" aria-label="Msingi Labs home">
            <img src={logo} alt="Msingi Labs" width={240} height={70} className="h-12 w-auto" />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Empowering Africa's next generation through robotics, coding, AI and emerging technologies.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:glow-cyan hover:text-primary transition-all"
                aria-label="social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-primary transition-colors">Programs</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Robotics Training</li>
            <li>Coding Classes</li>
            <li>AI & Machine Learning</li>
            <li>IoT Solutions</li>
            <li>STEM Workshops</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Stay in the Loop</h4>
          <p className="text-sm text-muted-foreground mb-3">Get updates on new programs and events.</p>
          <form className="flex gap-2 mb-5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-3 py-2 rounded-lg bg-input border border-border text-sm focus:outline-none focus:border-primary"
            />
            <button className="px-4 py-2 rounded-lg bg-gradient-hero text-primary-foreground text-sm font-semibold hover:scale-105 transition-transform">
              Join
            </button>
          </form>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /><span>+254 726 333 992</span></p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /><span>hello@msingilabs.co.ke</span></p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /><span>Nairobi, Kenya</span></p>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Msingi Labs. Building Africa's tech future.
      </div>
    </footer>
  );
}
