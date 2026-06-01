import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Msingi Labs" },
      { name: "description", content: "Structured learning programs in coding, robotics and STEM for kids, schools and businesses." },
      { property: "og:title", content: "Programs — Msingi Labs" },
      { property: "og:description", content: "Project-based programs from kids coding to tech bootcamps and STEM workshops." },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Programs,
});

const programs = [
  { title: "Kids Coding Program", duration: "12 sessions", level: "Ages 8–14", outcome: "First working web app & game", highlights: ["Scratch → JavaScript", "Game building", "Mini portfolio"], price: "KES 12,000" },
  { title: "AI for Kids", duration: "12 sessions", level: "Ages 8–14", outcome: "Kids build their own AI-powered projects", highlights: ["Be producers, not consumers of AI", "Prompting & AI tools", "Build mini AI apps"], price: "KES 12,000" },
  { title: "Robotics for Schools", duration: "Custom partnerships", level: "All schools", outcome: "Compete-ready robotics team", highlights: ["Arduino + sensors", "Team-based builds", "Competition prep"], price: "Custom partnership" },
  { title: "Tech Bootcamp", duration: "12 weeks", level: "Intermediate", outcome: "3 deployed projects in your portfolio", highlights: ["Full-stack web", "Cloud deployment", "Real client briefs"] },
  { title: "Holiday Tech Camp", duration: "2 weeks", level: "All ages", outcome: "Mini robotics & coding project", highlights: ["Daily builds", "Team challenges", "Showcase day"] },
  { title: "Educator Training", duration: "Custom", level: "Teachers & facilitators", outcome: "Confident to teach coding & robotics", highlights: ["Curriculum support", "Hands-on robotics & coding", "Classroom-ready resources"], price: "Custom partnership" },
];

function Programs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <SectionHeading
        eyebrow="Programs"
        title="Pick a pathway. Build something real."
        subtitle="Every program is project-based and outcome-driven — you leave with skills, work and confidence."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <div key={p.title} className="glass rounded-2xl p-7 hover-lift flex flex-col">
            <div className="text-xs text-primary font-bold tracking-wider mb-3">PROGRAM 0{i + 1}</div>
            <h3 className="font-display font-bold text-xl mb-4">{p.title}</h3>
            <div className="space-y-2 text-sm mb-5">
              <div className="flex justify-between"><span className="text-muted-foreground">Duration</span><span className="font-semibold">{p.duration}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Level</span><span className="font-semibold">{p.level}</span></div>
              {p.price && <div className="flex justify-between"><span className="text-muted-foreground">Price</span><span className="font-semibold text-primary">{p.price}</span></div>}
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground mb-5">
              {p.highlights.map((h) => <li key={h}>• {h}</li>)}
            </ul>
            <div className="mt-auto pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-1">Outcome</p>
              <p className="font-semibold text-sm mb-4">{p.outcome}</p>
              <Link to="/contact" className="text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all text-primary">
                Enroll <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
