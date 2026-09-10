import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "../../config/siteConfig";

const base =
  "inline-flex items-center justify-center gap-2 font-body font-medium text-sm sm:text-base transition-colors duration-200 rounded-full px-6 py-3";

const variants = {
  primary: `${base} bg-brass-500 text-night-900 hover:bg-brass-400`,
  dark: `${base} bg-night-800 text-paper hover:bg-night-700`,
  outline: `${base} border border-night-300 text-night-800 hover:border-night-500 hover:bg-night-50`,
  outlineLight: `${base} border border-paper/40 text-paper hover:bg-paper/10`,
  whatsapp: `${base} bg-[#1F4A3C] text-paper hover:bg-[#173a2f]`,
};

export function CTALink({ to, variant = "primary", children, className = "", ...props }) {
  return (
    <Link to={to} className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function CTAAnchor({ href, variant = "primary", children, className = "", ...props }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${variants[variant]} ${className}`}
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
  variant = "whatsapp",
  label = "WhatsApp Us",
  className = "",
}) {
  return (
    <CTAAnchor
      href={buildWhatsAppLink({ course, classType })}
      variant={variant}
      className={className}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {label}
    </CTAAnchor>
  );
}

export function EnrollCTA({ className = "" }) {
  return (
    <CTALink to="/contact" variant="primary" className={className}>
      Enroll Now
      <ArrowRight size={16} aria-hidden="true" />
    </CTALink>
  );
}
