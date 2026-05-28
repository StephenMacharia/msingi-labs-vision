import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-tech.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { RegisterDialog } from "@/components/site/RegisterDialog";
import {
  Bot, Code2, Handshake, HeartHandshake, GraduationCap, Lightbulb,
  ArrowRight, Sparkles, Rocket, Users, Trophy, Target,
  CheckCircle2, Calendar, CalendarClock
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Msingi Labs — Building Africa's Future Through Technology" },
      { name: "description", content: "Practical training in robotics, coding and STEM for students, schools and organizations across Africa." },
      { property: "og:title", content: "Msingi Labs — Building Africa's Future" },
      { property: "og:description", content: "Robotics, coding and STEM education for Africa's next generation." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Bot, title: "Robotics Training", desc: "Hands-on robotics with Arduino, sensors and competition prep.", price: "KES 12,000 / 10 sessions" },
  { icon: Code2, title: "Coding Classes", desc: "Web, Python and app development — beginner to advanced.", price: "Beginner → Advanced" },
  { icon: Handshake, title: "Robotics Clubs in Schools", desc: "We partner with schools to set up and run sustainable robotics clubs.", price: "Partnership-based" },
  { icon: HeartHandshake, title: "Outreach Programs", desc: "Community STEM outreach reaching learners beyond the classroom.", price: "Community impact" },
  { icon: GraduationCap, title: "STEM Workshops", desc: "School workshops, bootcamps and innovation challenges.", price: "Schools & camps" },
  { icon: Lightbulb, title: "Tech Consultancy", desc: "Digital transformation, custom tech and innovation strategy.", price: "For businesses" },
];

const programs = [
  { title: "Kids Coding Program", duration: "8 weeks", level: "Ages 8–14", outcome: "First working web app & game" },
  { title: "Robotics for Schools", duration: "Term-based", level: "All schools", outcome: "Compete-ready robotics team" },
  { title: "University Tech Bootcamp", duration: "12 weeks", level: "Intermediate", outcome: "Portfolio of 3 deployed projects" },
  { title: "Holiday Tech Camp", duration: "2 weeks", level: "All ages", outcome: "Mini robotics & coding project" },
];

const whyUs = [
  { icon: Target, title: "Hands-on Learning", desc: "Build real things from week one. No passive lectures." },
  { icon: CalendarClock, title: "Flexible & Custom", desc: "We teach schools, groups and individuals — and tailor the timeline to when you want to learn." },
  { icon: Users, title: "Experienced Trainers", desc: "Practising engineers and educators who've shipped real work." },
  { icon: Sparkles, title: "Innovation-Focused", desc: "Every learner leaves with an idea worth building." },
  { icon: Trophy, title: "Real-World Projects", desc: "Portfolio-ready work, not throwaway exercises." },
  { icon: CheckCircle2, title: "Affordable & Accessible", desc: "Pricing built for African students, schools and families." },
];

const events = [
  { date: "Mar 15", title: "Inter-Schools Robotics Championship", where: "Nairobi" },
  { date: "Apr 02", title: "Youth Innovation Hackathon", where: "Mombasa" },
  { date: "May 10", title: "STEM Competition Finals", where: "KICC, Nairobi" },
  { date: "Jun 08", title: "Coding & Robotics Hackathon", where: "Kisumu" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
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
              <RegisterDialog
                title="Book a session"
                description="Pick a topic and we'll find a time that works for you."
                defaultInterest="Book a session"
                trigger={
                  <button className="px-6 py-3.5 rounded-full glass font-semibold hover:border-primary transition-colors">
                    Book a Session
                  </button>
                }
              />
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

        {/* STATS — temporarily hidden until we have verified numbers
        <div className="container mx-auto px-6 pb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: 2500, s: "+", label: "Students Trained" },
              { n: 80, s: "+", label: "Schools Reached" },
              { n: 320, s: "+", label: "Projects Built" },
              { n: 140, s: "+", label: "Workshops Conducted" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl p-6 text-center hover-lift">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                  <Counter end={s.n} suffix={s.s} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        */}
      </section>

      {/* ABOUT */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              center={false}
              eyebrow="About Us"
              title="A youth-driven innovation hub for Africa"
              subtitle="We exist to bridge the digital skills gap — making practical, world-class technology education accessible to every learner on the continent."
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6">
                <h4 className="font-display font-bold text-lg mb-2 text-gradient">Our Mission</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To bridge the digital skills gap by providing accessible, practical and innovative technology education.
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <h4 className="font-display font-bold text-lg mb-2 text-gradient">Our Vision</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To become Africa's leading innovation hub for future-ready digital talent.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, n: "Youth-first", l: "Every program built around young innovators" },
              { icon: Trophy, n: "Award-ready", l: "Competition-ready students & teams" },
              { icon: Rocket, n: "Future-ready", l: "Tomorrow's tech, taught today" },
              { icon: Sparkles, n: "Pan-African", l: "Built for the continent, by the continent" },
            ].map((c, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover-lift">
                <c.icon className="w-8 h-8 text-primary mb-3" />
                <div className="font-display font-semibold mb-1">{c.n}</div>
                <div className="text-sm text-muted-foreground">{c.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built for the next generation"
          subtitle="From first lines of code to deployed projects — we meet every learner where they are."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass rounded-2xl p-7 hover-lift group">
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-5 glow-cyan group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-primary font-semibold">{s.price}</span>
                <Link to="/services" className="text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="container mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="Programs"
          title="Structured pathways to mastery"
          subtitle="Pick the program that fits your goals — every track is project-based and outcome-driven."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <div key={p.title} className="glass rounded-2xl p-7 hover-lift">
              <div className="text-xs text-primary font-bold tracking-wider mb-3">PROGRAM 0{i + 1}</div>
              <h3 className="font-display font-bold text-xl mb-4">{p.title}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Duration</span><span className="font-semibold">{p.duration}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Level</span><span className="font-semibold">{p.level}</span></div>
                <div className="pt-3 border-t border-border">
                  <span className="text-muted-foreground text-xs">Outcome</span>
                  <p className="font-semibold mt-1">{p.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="Why Msingi Labs"
          title="An unfair advantage for African learners"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((w) => (
            <div key={w.title} className="glass rounded-2xl p-7 hover-lift">
              <w.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display font-bold text-lg mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS — coming soon as we grow
      <section className="container mx-auto px-6 py-24">
        <SectionHeading eyebrow="Portfolio" title="Projects built by our learners" />
      </section>
      */}

      {/* TESTIMONIALS — will return once we collect verified community feedback
      <section className="container mx-auto px-6 py-24">
        <SectionHeading eyebrow="Voices" title="What our community says" />
      </section>
      */}

      {/* EVENTS */}
      <section className="container mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="Events & Workshops"
          title="Where innovation comes alive"
          subtitle="STEM competitions and hackathons we host and take part in as we grow."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((e) => (
            <div key={e.title} className="glass rounded-2xl p-6 hover-lift">
              <div className="flex items-center gap-2 text-primary text-xs font-bold mb-4">
                <Calendar className="w-4 h-4" /> {e.date} · 2026
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.where}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container mx-auto px-6 py-24">
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
              <RegisterDialog
                title="Contact Msingi Labs"
                description="Send us a message and we'll respond within 24 hours."
                trigger={
                  <button className="px-7 py-3.5 rounded-full glass text-primary-foreground font-semibold border-white/30 hover:bg-white/10 transition-colors">
                    Contact Us
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
