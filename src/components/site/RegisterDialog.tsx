import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(30),
  interest: z.string().trim().min(1, "Please tell us what you're interested in").max(200),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export function RegisterDialog({
  trigger,
  title = "Register your interest",
  description = "Tell us a bit about you and we'll get back within 24 hours.",
  defaultInterest = "",
}: {
  trigger: ReactNode;
  title?: string;
  description?: string;
  defaultInterest?: string;
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: defaultInterest, message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    toast.success("Thanks! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", phone: "", interest: defaultInterest, message: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="glass border-border max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-gradient">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 mt-2">
          <div>
            <label className="text-xs font-semibold mb-1.5 block uppercase tracking-wider">Full name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="w-full px-4 py-2.5 rounded-xl bg-input border border-border focus:outline-none focus:border-primary transition-colors text-sm"
              placeholder="Jane Doe"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold mb-1.5 block uppercase tracking-wider">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full px-4 py-2.5 rounded-xl bg-input border border-border focus:outline-none focus:border-primary transition-colors text-sm"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1.5 block uppercase tracking-wider">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={30}
                className="w-full px-4 py-2.5 rounded-xl bg-input border border-border focus:outline-none focus:border-primary transition-colors text-sm"
                placeholder="+254 ..."
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold mb-1.5 block uppercase tracking-wider">I'm interested in</label>
            <input
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
              maxLength={200}
              className="w-full px-4 py-2.5 rounded-xl bg-input border border-border focus:outline-none focus:border-primary transition-colors text-sm"
              placeholder="Robotics training, school partnership, holiday camp..."
            />
          </div>
          <div>
            <label className="text-xs font-semibold mb-1.5 block uppercase tracking-wider">Message (optional)</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              maxLength={1000}
              className="w-full px-4 py-2.5 rounded-xl bg-input border border-border focus:outline-none focus:border-primary transition-colors text-sm resize-none"
              placeholder="Preferred dates, group size, anything else we should know..."
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-xl bg-gradient-hero text-primary-foreground font-semibold glow-cyan hover:scale-[1.02] transition-transform inline-flex items-center justify-center gap-2"
          >
            Submit <Send className="w-4 h-4" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
