import { Link } from "@tanstack/react-router";
import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/msingi-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <Link to="/" className="inline-flex items-center mb-4" aria-label="Msingi Labs home">
            <img src={logo} alt="Msingi Labs" width={240} height={70} className="h-12 w-auto" />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Empowering Africa's next generation through robotics, coding and emerging technologies.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-primary transition-colors">Programs</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Robotics Training</li>
            <li>Coding Classes</li>
            <li>Robotics Clubs in Schools</li>
            <li>Educator Training</li>
            <li>Outreach Programs</li>
            <li>STEM Workshops</li>
            <li>Tech Consultancy</li>
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-3 space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /><span>+254 726 333 992</span></p>
          <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /><span>Nairobi, Kenya</span></p>
        </div>
      </div>
  );
}
