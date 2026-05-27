import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Msingi Labs" },
      { name: "description", content: "Robotics, IoT, AI and software projects built by Msingi Labs students and teams." },
      { property: "og:title", content: "Projects — Msingi Labs" },
      { property: "og:description", content: "Real prototypes, real impact — built by African learners." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const all = [
  { title: "Smart Irrigation IoT", tag: "IoT", desc: "Soil-sensor driven watering system." },
  { title: "Line-Following Robot", tag: "Robotics", desc: "Arduino bot navigating obstacle courses." },
  { title: "School Attendance App", tag: "Software", desc: "Biometric check-in for high schools." },
  { title: "AI Crop Disease Detector", tag: "AI", desc: "CV model identifying plant diseases." },
  { title: "Solar Tracker", tag: "IoT", desc: "Servo panel that follows the sun." },
  { title: "Robotic Arm v2", tag: "Robotics", desc: "Six-axis arm with voice control." },
  { title: "Class Schedule AI", tag: "AI", desc: "AI timetable generator for schools." },
  { title: "Pothole Mapper", tag: "Software", desc: "Crowdsourced road condition app." },
  { title: "Smart Door Lock", tag: "IoT", desc: "RFID + mobile-app controlled lock." },
];

const tags = ["All", "Robotics", "IoT", "AI", "Software"] as const;

function Projects() {
  const [active, setActive] = useState<(typeof tags)[number]>("All");
  const filtered = active === "All" ? all : all.filter((p) => p.tag === active);

  return (
    <div className="container mx-auto px-6 py-16">
      <SectionHeading
        eyebrow="Portfolio"
        title="Built by our learners"
        subtitle="Browse student and team projects across robotics, IoT, AI and software."
      />
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              active === t ? "bg-gradient-hero text-primary-foreground glow-cyan" : "glass hover:border-primary"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <div key={p.title} className="group overflow-hidden rounded-2xl glass hover-lift">
            <div className="h-48 bg-gradient-hero relative">
              <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white, transparent 60%)" }} />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-semibold">{p.tag}</div>
            </div>
            <div className="p-6">
              <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
