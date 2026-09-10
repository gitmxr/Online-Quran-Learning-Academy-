export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left";
  const titleColor = tone === "light" ? "text-paper" : "text-night-900";
  const descColor = tone === "light" ? "text-paper/75" : "text-ink-soft";
  const kickerColor = tone === "light" ? "text-brass-200" : "text-night-500";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {kicker && (
        <p className={`font-body text-sm font-medium ${kickerColor}`}>{kicker}</p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl leading-[1.15] ${titleColor} ${
          align === "center" ? "max-w-2xl" : "max-w-xl"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`font-body text-base leading-relaxed ${descColor} ${
          align === "center" ? "max-w-xl" : "max-w-lg"
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
