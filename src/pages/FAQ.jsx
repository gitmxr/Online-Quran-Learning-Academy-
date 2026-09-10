import { useEffect } from "react";
import useSeo from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import FAQAccordion from "../components/common/FAQAccordion";
import { WhatsAppCTA } from "../components/common/CTA";
import { faqs } from "../data/faqs";

function FAQSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);
  return null;
}

export default function FAQ() {
  useSeo({
    title: "Frequently Asked Questions",
    description: "Answers to common questions about enrolling and learning at Noor Ul Quran Online Academy.",
    path: "/faq",
  });

  return (
    <>
      <FAQSchema />
      <PageHero
        title="Frequently Asked Questions"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-prose">
          <FAQAccordion items={faqs} />
          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-night-100 bg-paper-card px-6 py-10 text-center">
            <h2 className="font-display text-2xl text-night-900">Still have a question?</h2>
            <p className="max-w-md font-body text-sm text-ink-soft">
              Message us directly and we'll be glad to help.
            </p>
            <WhatsAppCTA className="mt-3" />
          </div>
        </Container>
      </section>
    </>
  );
}
