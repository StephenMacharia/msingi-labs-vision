import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/254726333992"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send a message to us via WhatsApp"
      title="Send a message to us via WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      <span className="hidden sm:inline-block px-3 py-2 rounded-lg bg-background border border-border text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
        Send a message to us via WhatsApp
      </span>
      <span className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg animate-pulse-glow hover:scale-110 transition-transform">
        <MessageCircle className="w-7 h-7 text-white" />
      </span>
    </a>
  );
}
