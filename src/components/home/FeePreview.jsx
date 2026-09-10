import { HeartHandshake } from "lucide-react";
import Container from "../common/Container";
import { CTALink } from "../common/CTA";
import { WhatsAppCTA } from "../common/CTA";

export default function FeePreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brass-50 px-6 py-14 text-center sm:px-16">
          <HeartHandshake
            size={38}
            className="mx-auto text-brass-700"
            aria-hidden="true"
          />
          <h2 className="mx-auto mt-5 max-w-xl font-display text-3xl leading-tight text-night-900 sm:text-4xl">
            "Pay What You Can Afford"
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-base leading-relaxed text-ink-soft">
            Financial difficulties should never stop anyone from learning the Quran. Financial
            assistance and supported classes are available for those who genuinely cannot afford
            the fee, subject to availability.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CTALink to="/fee-structure" variant="dark">
              See Fee Structure
            </CTALink>
            <WhatsAppCTA label="Ask About Fees" />
          </div>
        </div>
      </Container>
    </section>
  );
}
