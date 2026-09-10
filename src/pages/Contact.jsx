import { Mail, MessageCircle, Globe2 } from "lucide-react";
import useSeo from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import ContactForm from "../components/common/ContactForm";
import { SITE_CONFIG, buildWhatsAppLink } from "../config/siteConfig";

export default function Contact() {
  useSeo({
    title: "Contact Us",
    description:
      "Get in touch with Noor Ul Quran Online Academy on WhatsApp, email, or through our contact form.",
    path: "/contact",
  });

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Ask about classes, enroll, or say Assalamu Alaikum — we'd love to hear from you."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <ContactMethod
              icon={MessageCircle}
              label="WhatsApp"
              value={SITE_CONFIG.whatsappDisplay}
              href={buildWhatsAppLink()}
            />
            <ContactMethod
              icon={Mail}
              label="Email"
              value={SITE_CONFIG.email}
              href={`mailto:${SITE_CONFIG.email}`}
            />
            <ContactMethod
              icon={Globe2}
              label="Availability"
              value={SITE_CONFIG.availability}
            />
          </div>

          <div className="rounded-2xl border border-night-100 bg-paper-card p-6 sm:p-8">
            <h2 className="font-display text-2xl text-night-900">Send an Inquiry</h2>
            <p className="mt-1.5 font-body text-sm text-ink-soft">
              Fill in the form and a member of the academy will get back to you.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactMethod({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-night-100 bg-paper-card p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-night-50 text-night-700">
        <Icon size={19} aria-hidden="true" />
      </span>
      <div>
        <p className="font-body text-xs uppercase tracking-wide text-ink-faint">{label}</p>
        <p className="mt-0.5 font-body text-base text-night-900 break-all">{value}</p>
      </div>
    </div>
  );
  if (!href) return content;
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block transition-transform hover:-translate-y-0.5"
    >
      {content}
    </a>
  );
}
