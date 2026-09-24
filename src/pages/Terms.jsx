import useSeo from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import { SITE_CONFIG } from "../config/siteConfig";

export default function Terms() {
  useSeo({
    title: "Terms & Conditions",
    description: "Terms and conditions for using the Noor Ul Quran Online Academy website and enrolling in classes.",
    path: "/terms",
  });

  return (
    <>
      <PageHero
        title="Terms & Conditions"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Terms & Conditions" }]}
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-prose">
          <div className="flex flex-col gap-8 font-body text-[15px] leading-relaxed text-ink-soft">
            <Section title="Using This Website">
              This website provides information about {SITE_CONFIG.name} and allows visitors to
              inquire about enrollment. By using this website, you agree to use it respectfully
              and for its intended purpose.
            </Section>

            <Section title="Enrollment & Classes">
              Enrollment details, scheduling, and fee arrangements are confirmed directly with the
              academy via WhatsApp or email, and are not automatically finalized by submitting the
              contact form.
            </Section>

            <Section title="Fees">
              {SITE_CONFIG.name} follows a "Pay What You Can Afford" approach. Specific fee
              arrangements are discussed and confirmed individually with each student or guardian.
            </Section>

            <Section title="Content">
              All course descriptions and information on this website are provided for general
              guidance and may be updated from time to time.
            </Section>

            <Section title="Contact">
              For questions about these terms, contact {SITE_CONFIG.email}.
            </Section>

            <p className="text-sm text-ink-faint">Last updated: September 2026</p>
          </div>
        </Container>
      </section>
    </>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-display text-xl text-night-900">{title}</h2>
      <p className="mt-2">{children}</p>
    </div>
  );
}
