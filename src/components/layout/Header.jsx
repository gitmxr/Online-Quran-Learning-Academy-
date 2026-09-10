import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import Logo from "./Logo";
import Container from "../common/Container";
import { CTALink } from "../common/CTA";
import { primaryNav } from "../../data/nav";

export default function Header({ onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-paper/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(18,38,31,0.08)]" : ""
      }`}
    >
      <Container className="flex h-[68px] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-1 rounded-full px-3.5 py-2 font-body text-[15px] transition-colors ${
                          isActive ? "text-night-900 font-medium" : "text-ink-soft hover:text-night-800"
                        }`
                      }
                    >
                      {item.label}
                      <ChevronDown size={14} aria-hidden="true" />
                    </NavLink>
                    <div className="invisible absolute left-0 top-full z-20 min-w-[230px] translate-y-1 rounded-xl border border-night-100 bg-paper-card py-2 opacity-0 shadow-card transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            `block px-4 py-2 font-body text-sm transition-colors ${
                              isActive ? "text-night-900 bg-night-50" : "text-ink-soft hover:bg-night-50 hover:text-night-800"
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block rounded-full px-3.5 py-2 font-body text-[15px] transition-colors ${
                        isActive ? "text-night-900 font-medium" : "text-ink-soft hover:text-night-800"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <CTALink to="/contact" variant="primary" className="hidden sm:inline-flex">
            Enroll Now
          </CTALink>
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-night-900 hover:bg-night-50 lg:hidden"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </Container>
    </header>
  );
}
