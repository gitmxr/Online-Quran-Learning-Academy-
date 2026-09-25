import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../../config/siteConfig";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0" aria-label={`${SITE_CONFIG.name} — Home`}>
      <img
        src="/logo.png"
        alt="Noor Ul Quran Logo"
        className="h-10 w-10 sm:h-11 sm:w-11 object-contain shrink-0"
      />
      <span className="leading-tight">
        <span
          className={`block font-display text-[15px] sm:text-base font-medium ${
            light ? "text-paper" : "text-night-900"
          }`}
        >
          Noor Ul Quran
        </span>
        <span
          className={`block font-body text-[10px] sm:text-[11px] tracking-wide ${
            light ? "text-paper/60" : "text-ink-faint"
          }`}
        >
          Online Academy
        </span>
      </span>
    </Link>
  );
}
