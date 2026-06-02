import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-16">
      <Helmet>
        <title>About — Msingi Labs</title>
        <meta name="description" content="Msingi Labs is a youth-driven African technology and innovation company empowering the next generation through practical STEM education." />
        <meta property="og:title" content="About Msingi Labs" />
        <meta property="og:description" content="A youth-driven African innovation hub building future-ready digital talent." />
        <link rel="canonical" href="/about" />
      </Helmet>

      <SectionHeading
        eyebrow="About Us"
        title="We're building the African tech generation"
        subtitle="Msingi Labs is a youth-driven technology and innovation company empowering students, schools and businesses through practical digital skills."
      />

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {[
          { icon: Target, title: "Mission", text: "To bridge the digital skills gap by providing accessible, practical and innovative technology education across Africa." },
          { icon: Eye, title: "Vision", text: "To become Africa's leading innovation hub for future-ready digital talent." },
          { icon: Heart, title: "Why we exist", text: "Africa's youth deserve world-class tech education that's hands-on, affordable and rooted in real opportunity." },
        ].map((c) => (
          <div key={c.title} className="glass rounded-2xl p-8 hover-lift">
            <c.icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display font-bold text-xl mb-3">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>

      <div className="glass rounded-3xl p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Empowering Africa, one learner at a time</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          From robotics competitions to AI bootcamps, we're proving that African youth can compete — and lead — on the global stage.
        </p>
        <Link to="/programs" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-hero text-primary-foreground font-semibold glow-cyan hover:scale-105 transition-transform">
          See our programs <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
