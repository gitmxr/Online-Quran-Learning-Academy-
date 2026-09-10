import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../../config/siteConfig";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label={`${SITE_CONFIG.name} — Home`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-night-800">
        <svg width="18" height="18" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <path
            d="M25 10c-6 1.5-10 6.8-10 13s4 11.5 10 13c-10 1.5-18-5.4-18-13S15 8.5 25 10z"
            fill="#C79A46"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-[15px] sm:text-base ${
            light ? "text-paper" : "text-night-900"
          }`}
        >
          Noor Ul Quran
        </span>
        <span
          className={`block font-body text-[10px] tracking-wide ${
            light ? "text-paper/60" : "text-ink-faint"
          }`}
        >
          Online Academy
        </span>
      </span>
    </Link>
  );
}
