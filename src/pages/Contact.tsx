import { Helmet } from "react-helmet-async";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/mvzyjgbj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...r.data, _subject: `New contact from ${r.data.name}` }),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Thanks! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Contact — Msingi Labs</title>
        <meta name="description" content="Get in touch with Msingi Labs — partner with us, enroll in a program, or book a workshop." />
        <meta property="og:title" content="Contact Msingi Labs" />
        <meta property="og:description" content="Let's build the future of African tech together." />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <SectionHeading
        eyebrow="Get in Touch"
        title="Let's build the future together"
        subtitle="Partner with us, enroll in a program, or book a workshop. We respond within 24 hours."
      />
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="glass rounded-3xl p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-semibold mb-2 block">Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:outline-none focus:border-primary transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="text-sm font-semibold mb-2 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:outline-none focus:border-primary transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-semibold mb-2 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us what you're looking for..."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full px-6 py-3.5 rounded-xl bg-gradient-hero text-primary-foreground font-semibold glow-cyan hover:scale-[1.02] transition-transform inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="space-y-6">
          {[
            { icon: Phone, label: "Phone", val: "+254 726 333 992", href: "tel:+254726333992" },
            { icon: Phone, label: "Phone", val: "+254 720 200 920", href: "tel:+254720200920" },
            { icon: MapPin, label: "Office", val: "Nairobi, Kenya", href: undefined as string | undefined },
          ].map((c) => (
            <a key={c.label} href={c.href} className="glass rounded-2xl p-6 hover-lift flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                <c.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{c.label}</div>
                <div className="font-display font-semibold text-lg">{c.val}</div>
              </div>
            </a>
          ))}
          <div className="glass rounded-2xl overflow-hidden h-64">
            <iframe
              title="Msingi Labs location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.39636209258!2d36.70730603849!3d-1.3028617882316476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1700000000000"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
