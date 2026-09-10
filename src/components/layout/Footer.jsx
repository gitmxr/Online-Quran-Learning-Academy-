import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, XIcon } from "../common/SocialIcons";
import Container from "../common/Container";
import { footerLinks, legalLinks } from "../../data/nav";
import { courses } from "../../data/courses";
import { SITE_CONFIG, buildWhatsAppLink } from "../../config/siteConfig";
import { CTALink } from "../common/CTA";

export default function Footer() {
  return (
    <footer className="bg-night-950 text-paper/85">
      <Container className="py-16">
        <div className="flex flex-col gap-10 border-b border-paper/10 pb-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md">
            <h2 className="font-display text-2xl text-paper sm:text-[28px]">
              Start Your Quran Journey Today
            </h2>
            <p className="mt-2 font-body text-sm text-paper/60">
              {SITE_CONFIG.tagline}
            </p>
          </div>
          <CTALink to="/contact" variant="primary" className="w-fit">
            Enroll Now
          </CTALink>
        </div>

        <div className="grid grid-cols-2 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-paper/60">
              An online Quran learning platform providing Quranic and basic Islamic education to
              children and adults worldwide.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialIcon href={SITE_CONFIG.social.facebook} label="Facebook">
                <FacebookIcon size={16} aria-hidden="true" />
              </SocialIcon>
              <SocialIcon href={SITE_CONFIG.social.instagram} label="Instagram">
                <InstagramIcon size={16} aria-hidden="true" />
              </SocialIcon>
              <SocialIcon href={SITE_CONFIG.social.twitter} label="X (Twitter)">
                <XIcon size={16} aria-hidden="true" />
              </SocialIcon>
            </div>
          </div>

          <FooterColumn title="Quick Links">
            {footerLinks.map((l) => (
              <FooterLink key={l.to} to={l.to}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Courses">
            {courses.slice(0, 6).map((c) => (
              <FooterLink key={c.slug} to={`/courses/${c.slug}`}>
                {c.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-1 font-body text-sm text-paper/70 hover:text-brass-300"
            >
              <MessageCircle size={14} aria-hidden="true" /> {SITE_CONFIG.whatsappDisplay}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-2 py-1 font-body text-sm text-paper/70 hover:text-brass-300 break-all"
            >
              <Mail size={14} aria-hidden="true" className="shrink-0" /> {SITE_CONFIG.email}
            </a>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {legalLinks.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-paper/80">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="font-display text-sm text-paper/90">{title}</h3>
      <div className="mt-4 flex flex-col gap-0.5">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link to={to} className="py-1 font-body text-sm text-paper/70 hover:text-brass-300">
      {children}
    </Link>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-brass-400 hover:text-brass-300"
    >
      {children}
    </a>
  );
}
