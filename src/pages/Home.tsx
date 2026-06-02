import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import heroImg from "@/assets/hero-tech.jpg";
import { RegisterDialog } from "@/components/site/RegisterDialog";
import { Bot, Code2, GraduationCap, Handshake, ArrowRight, Sparkles } from "lucide-react";

const highlights = [
  { icon: Bot, title: "Robotics & Coding", desc: "Hands-on training for students, schools and groups.", to: "/services", cta: "See services" },
  { icon: GraduationCap, title: "Structured Programs", desc: "Project-based pathways from kids to university bootcamps.", to: "/programs", cta: "Browse programs" },
  { icon: Handshake, title: "Schools Partnerships", desc: "We set up and run sustainable robotics clubs in schools.", to: "/about", cta: "About us" },
  { icon: Code2, title: "Talk to us", desc: "Custom timelines for schools, businesses and individuals.", to: "/contact", cta: "Get in touch" },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Msingi Labs — Building Africa's Future Through Technology</title>
        <meta name="description" content="Practical training in robotics, coding and STEM for students, schools and organizations across Africa." />
        <meta property="og:title" content="Msingi Labs — Building Africa's Future" />
        <meta property="og:description" content="Robotics, coding and STEM education for Africa's next generation." />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-primary mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Africa's Innovation Lab for Youth
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Building Africa's Future Through{" "}
              <span className="text-gradient">Technology & Innovation</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Msingi Labs empowers students, schools and organizations with practical digital
              skills in robotics, coding and STEM — on a timeline that fits you.
            </p>
            <div className="flex flex-wrap gap-3">
              <RegisterDialog
                title="Get started with Msingi Labs"
                description="Tell us what you'd like to learn or partner on."
                trigger={
                  <button className="px-6 py-3.5 rounded-full bg-gradient-hero text-primary-foreground font-semibold glow-cyan hover:scale-105 transition-transform inline-flex items-center gap-2">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </button>
                }
              />
              <Link to="/programs" className="px-6 py-3.5 rounded-full glass font-semibold hover:border-primary transition-colors">
                Explore Programs
              </Link>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-6 bg-gradient-hero opacity-30 blur-3xl rounded-full" />
            <img
              src={heroImg}
              alt="Young African innovator building robotics with holographic AI interfaces"
              width={1600}
              height={1200}
              className="relative rounded-3xl shadow-2xl glow-purple border border-border"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <Link key={h.title} to={h.to} className="glass rounded-2xl p-7 hover-lift group block">
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 glow-cyan group-hover:scale-110 transition-transform">
                <h.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{h.desc}</p>
              <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                {h.cta} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-20 text-center glow-purple">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white, transparent 50%), radial-gradient(circle at 80% 50%, white, transparent 50%)" }} />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Ready to Build the Future with Technology?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Join the next generation of African innovators. Whether you're a student, school or business — we have a path for you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <RegisterDialog
                title="Join a program"
                description="Tell us which program you're interested in and we'll guide you through enrollment."
                defaultInterest="Join a program"
                trigger={
                  <button className="px-7 py-3.5 rounded-full bg-background text-foreground font-semibold hover:scale-105 transition-transform">
                    Join a Program
                  </button>
                }
              />
              <RegisterDialog
                title="Partner with us"
                description="Schools, NGOs and businesses — let's build something together."
                defaultInterest="Partnership"
                trigger={
                  <button className="px-7 py-3.5 rounded-full glass text-primary-foreground font-semibold border-white/30 hover:bg-white/10 transition-colors">
                    Partner With Us
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
