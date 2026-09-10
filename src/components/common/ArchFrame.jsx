const PATTERN_ID_BASE = "arch-pattern";

/**
 * ArchFrame renders the site's signature arch-shaped image mount.
 * Pass `src` + `alt` for a real photograph. Without `src`, it renders
 * an elegant placeholder (geometric motif + label) so the owner knows
 * exactly what to replace and where.
 */
export default function ArchFrame({
  src,
  alt = "",
  label,
  wide = false,
  className = "",
  tone = "night", // "night" | "brass"
}) {
  const shapeClass = wide ? "arch-frame-wide" : "arch-frame";
  const patternId = `${PATTERN_ID_BASE}-${wide ? "wide" : "sq"}-${tone}`;

  const bg =
    tone === "brass"
      ? "bg-gradient-to-b from-brass-200 via-brass-100 to-paper-card"
      : "bg-gradient-to-b from-night-600 via-night-700 to-night-900";

  return (
    <div
      className={`relative overflow-hidden ${shapeClass} ${bg} ${className}`}
      role={src ? "img" : "presentation"}
      aria-label={src ? alt : undefined}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <>
          <svg className="absolute inset-0 h-full w-full opacity-[0.16]" aria-hidden="true">
            <defs>
              <pattern id={patternId} width="26" height="26" patternUnits="userSpaceOnUse">
                <path
                  d="M13 0 L26 13 L13 26 L0 13 Z"
                  fill="none"
                  stroke={tone === "brass" ? "#87622A" : "#C79A46"}
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path
                d="M25 10c-6 1.5-10 6.8-10 13s4 11.5 10 13c-10 1.5-18-5.4-18-13S15 8.5 25 10z"
                fill={tone === "brass" ? "#87622A" : "#DDB86C"}
              />
            </svg>
            {label && (
              <p
                className={`font-body text-xs tracking-wide ${
                  tone === "brass" ? "text-brass-800/80" : "text-paper/70"
                }`}
              >
                {label}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
