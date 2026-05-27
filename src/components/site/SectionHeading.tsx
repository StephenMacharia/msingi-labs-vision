export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-14 ${center ? "text-center mx-auto max-w-2xl" : ""}`}>
      {eyebrow && (
        <span className="inline-block px-3 py-1 rounded-full glass text-xs font-semibold tracking-widest text-primary uppercase mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}
