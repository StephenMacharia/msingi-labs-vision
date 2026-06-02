import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Bot, Code2, Handshake, HeartHandshake, GraduationCap, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  { icon: Bot, title: "Robotics Training", desc: "Hands-on robotics with Arduino, sensors and competition prep.", bullets: ["Arduino & microcontrollers", "Sensor integration", "Robotics competitions"], price: "KES 12,000 / 10 sessions" },
  { icon: Code2, title: "Coding Classes", desc: "Web, Python and app development from first principles.", bullets: ["Web development", "Python programming", "Mobile app development"], price: "Beginner → Advanced" },
  { icon: Handshake, title: "Robotics Clubs in Schools", desc: "We partner with schools to establish and sustain robotics clubs.", bullets: ["Club setup & curriculum", "Trainer support", "Long-term partnerships"], price: "Partnership-based" },
  { icon: HeartHandshake, title: "Outreach Programs", desc: "Community STEM outreach to reach learners beyond the classroom.", bullets: ["School & community visits", "Pop-up workshops", "Mentorship sessions"], price: "Community impact" },
  { icon: GraduationCap, title: "STEM Workshops", desc: "School workshops, holiday bootcamps and innovation challenges — scheduled around your timeline.", bullets: ["School workshops", "Holiday bootcamps", "Custom schedules for clients"], price: "Schools & clients" },
  { icon: Lightbulb, title: "Tech Consultancy", desc: "Strategy and custom builds for the digital transformation journey.", bullets: ["Digital transformation", "Custom tech solutions", "Innovation strategy"], price: "For businesses" },
];

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Services — Msingi Labs</title>
        <meta name="description" content="Robotics training, coding classes, school robotics clubs, outreach programs, STEM workshops and tech consultancy for Africa." />
        <meta property="og:title" content="Services — Msingi Labs" />
        <meta property="og:description" content="Hands-on tech training and consultancy for students, schools and businesses." />
        <link rel="canonical" href="/services" />
      </Helmet>

      <SectionHeading
        eyebrow="Our Services"
        title="Everything you need to go from curious to capable"
        subtitle="Practical, project-based tech training and consultancy — designed for African learners and organizations."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="glass rounded-2xl p-7 hover-lift">
            <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-5 glow-cyan">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
            <ul className="space-y-2 mb-6">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="text-xs text-primary font-semibold">{s.price}</span>
              <Link to="/contact" className="text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Enquire <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
