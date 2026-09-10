import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { primaryNav } from "../../data/nav";
import { CTALink } from "../common/CTA";
import { WhatsAppCTA } from "../common/CTA";

export default function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-night-950/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-paper shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-night-100 px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-night-900 hover:bg-night-50"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-3">
          <ul className="flex flex-col gap-0.5">
            {primaryNav.map((item) => (
              <li key={item.label} className="border-b border-night-50 last:border-0">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      aria-expanded={expanded === item.label}
                      className="flex w-full items-center justify-between px-2 py-3.5 font-body text-[16px] text-night-900"
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${
                          expanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        expanded === item.label ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]"
                      }`}
                    >
                      <ul className="min-h-0 flex flex-col gap-0.5 pl-4">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <NavLink
                              to={child.to}
                              onClick={onClose}
                              className="block rounded-lg px-3 py-2.5 font-body text-[15px] text-ink-soft hover:bg-night-50"
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onClick={onClose}
                    className="block px-2 py-3.5 font-body text-[16px] text-night-900"
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 border-t border-night-100 px-5 py-5">
          <CTALink to="/contact" variant="primary" onClick={onClose}>
            Enroll Now
          </CTALink>
          <WhatsAppCTA />
        </div>
      </div>
    </div>
  );
}
