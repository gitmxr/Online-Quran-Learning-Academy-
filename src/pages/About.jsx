import { Globe2, HeartHandshake, BookOpenText } from "lucide-react";
import useSeo from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import ArchFrame from "../components/common/ArchFrame";
import SectionHeading from "../components/common/SectionHeading";
import { WhatsAppCTA, EnrollCTA } from "../components/common/CTA";

const pillars = [
  {
    icon: Globe2,
    title: "Accessible to everyone",
    text: "Students join Noor Ul Quran Online Academy from anywhere in the world and learn from the comfort of their own home.",
  },
  {
    icon: HeartHandshake,
    title: "Affordable by design",
    text: "A \u201cPay What You Can Afford\u201d approach means financial circumstances are never a barrier to learning the Quran.",
  },
  {
    icon: BookOpenText,
    title: "Rooted in the Quran",
    text: "From the first letters of Noorani Qaida through to memorization, every course is built around Quranic and Islamic education.",
  },
];

export default function About() {
  useSeo({
    title: "About Us",
    description:
      "Noor Ul Quran Online Academy is an online Quran learning platform providing Quranic and basic Islamic education to children and adults worldwide.",
    path: "/about",
  });

  return (
    <>
      <PageHero
        title="About Noor Ul Quran Online Academy"
        description="Learn Quran. Understand Quran. Live Quran."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="Who we are"
              description="Noor Ul Quran Online Academy is an online Quran learning platform providing Quranic and basic Islamic education to children and adults worldwide. Our aim is to make Quran learning easy, accessible, affordable, and convenient for everyone."
            />
            <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-ink-soft">
              Classes are open to children, adults, brothers and sisters — beginners taking their
              very first steps in reading Arabic, and students who want to move on to Tajweed,
              memorization, or a deeper grounding in everyday Islamic knowledge.
            </p>
          </div>
          <ArchFrame
            label="[Add photograph representing the academy]"
            className="mx-auto aspect-[4/5] w-full max-w-sm"
          />
        </Container>
      </section>

      <section className="bg-night-50/60 py-16 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            className="mx-auto"
            title="What guides our teaching"
          />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-night-800 text-brass-300">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg text-night-900">{title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-night-100 bg-paper-card p-8">
            <h3 className="font-display text-2xl text-night-900">Our Mission</h3>
            <p className="mt-3 font-body text-base leading-relaxed text-ink-soft">
              To bring the Quran within reach of every home, no matter the distance, by pairing
              sincere students with dedicated, respectful teachers — and to make sure Quran
              learning stays easy, accessible, affordable, and convenient for everyone.
            </p>
          </div>
          <div className="rounded-2xl border border-night-100 bg-paper-card p-8">
            <h3 className="font-display text-2xl text-night-900">Our Vision</h3>
            <p className="mt-3 font-body text-base leading-relaxed text-ink-soft">
              A world where financial hardship or geography never stands between a person and
              learning the Quran, and where students of every age can learn, understand, and live
              by its teachings.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-night-900 py-16 text-center sm:py-20">
        <Container>
          <h2 className="mx-auto max-w-xl font-display text-3xl text-paper sm:text-4xl">
            Ready to begin your Quran journey with us?
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <EnrollCTA />
            <WhatsAppCTA />
          </div>
        </Container>
      </section>
    </>
  );
}
