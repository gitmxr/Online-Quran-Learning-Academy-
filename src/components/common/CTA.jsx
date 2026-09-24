import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "../../config/siteConfig";

const base =
  "inline-flex items-center justify-center gap-2 font-body font-medium rounded-full whitespace-nowrap select-none transition-all duration-200";

const sizeClasses = {
  sm: "text-xs sm:text-sm px-4 py-1.5",
  md: "text-sm sm:text-base px-6 py-3",
  header: "text-sm px-5 py-2.5 shadow-sm hover:shadow",
};

const variants = {
  primary: "bg-brass-500 text-night-900 hover:bg-brass-400 active:scale-[0.98]",
  dark: "bg-night-800 text-paper hover:bg-night-700 active:scale-[0.98]",
  outline: "border border-night-300 text-night-800 hover:border-night-500 hover:bg-night-50 active:scale-[0.98]",
  outlineLight: "border border-paper/40 text-paper hover:bg-paper/10 active:scale-[0.98]",
  whatsapp: "bg-[#1F4A3C] text-paper hover:bg-[#173a2f] active:scale-[0.98]",
};

export function CTALink({ to, variant = "primary", size = "md", children, className = "", ...props }) {
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  return (
    <Link to={to} className={`${base} ${variants[variant] || variants.primary} ${sizeClass} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function CTAAnchor({ href, variant = "primary", size = "md", children, className = "", ...props }) {
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant] || variants.primary} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

/** Standard "WhatsApp Us" call to action wired to the central config. */
export function WhatsAppCTA({
  course,
  classType,
  name,
  variant = "whatsapp",
  size = "md",
  label = "WhatsApp Us",
  className = "",
}) {
  return (
    <CTAAnchor
      href={buildWhatsAppLink({ course, classType, name })}
      variant={variant}
      size={size}
      className={className}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {label}
    </CTAAnchor>
  );
}

export function EnrollCTA({ className = "", size = "md" }) {
  return (
    <CTALink to="/contact" variant="primary" size={size} className={className}>
      Enroll Now
      <ArrowRight size={16} aria-hidden="true" />
    </CTALink>
  );
}

