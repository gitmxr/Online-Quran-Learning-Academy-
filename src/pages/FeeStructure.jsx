import { HeartHandshake, Baby, UserRound, Users, ShieldCheck, Gift } from "lucide-react";
import useSeo from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import { WhatsAppCTA } from "../components/common/CTA";

const approach = [
  { icon: Baby, title: "Kids", text: "Flexible / affordable fee." },
  { icon: UserRound, title: "Brothers", text: "Flexible / affordable fee." },
  { icon: Users, title: "Sisters", text: "Flexible / affordable fee." },
  {
    icon: ShieldCheck,
    title: "Financial Assistance",
    text: "Available for those who genuinely cannot afford the fee.",
  },
  {
    icon: Gift,
    title: "Free / Supported Classes",
    text: "Available subject to availability.",
  },
];

export default function FeeStructure() {
  useSeo({
    title: "Fee Structure",
    description:
      "Pay What You Can Afford — flexible, affordable fees at Noor Ul Quran Online Academy, with financial assistance available for those who need it.",
    path: "/fee-structure",
  });

  return (
    <>
      <PageHero
        title="Affordable & Flexible Fee Structure"
        description="Pay What You Can Afford — our goal is to make Quran education accessible to everyone."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Fee Structure" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="max-w-prose">
          <HeartHandshake size={32} className="text-brass-600" aria-hidden="true" />
          <p className="mt-5 font-body text-lg leading-relaxed text-ink-soft">
            We understand that every family's financial situation is different. If you can afford
            the regular fee, you may contribute according to the available fee structure.
          </p>
          <p className="mt-4 font-body text-lg leading-relaxed text-ink-soft">
            If you are unable to pay, please don't worry.{" "}
            <span className="text-night-900 font-medium">
              Financial difficulties should never stop anyone from learning the Quran.
            </span>
          </p>
        </Container>
      </section>

      <section className="bg-night-50/60 py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl text-night-900">Our Approach</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-night-100 bg-paper-card p-6">
                <Icon size={22} className="text-brass-600" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg text-night-900">{title}</h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-soft">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-prose">
          <h2 className="font-display text-2xl text-night-900">Our Promise</h2>
          <p className="mt-3 font-body text-base leading-relaxed text-ink-soft">
            No one should be prevented from learning the Quran because of financial hardship.
          </p>
          <p className="mt-2 font-display text-xl italic text-night-800">
            "Learn the Quran without financial worries."
          </p>
        </Container>
      </section>

      <section className="bg-night-900 py-16 text-center sm:py-20">
        <Container>
          <h2 className="mx-auto max-w-lg font-display text-3xl text-paper sm:text-4xl">
            Not sure which option is right for you?
          </h2>
          <div className="mt-8 flex justify-center">
            <WhatsAppCTA label="Contact us on WhatsApp" />
          </div>
        </Container>
      </section>
    </>
  );
}
