import Container from "../common/Container";
import ArchFrame from "../common/ArchFrame";
import SectionHeading from "../common/SectionHeading";
import { CTALink } from "../common/CTA";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ArchFrame
          src="/images/general/mom_son.jfif"
          alt="Mother and son learning Quran online together"
          className="mx-auto aspect-[4/5] w-full max-w-sm shadow-card"
          imgClassName="h-full w-full object-cover object-center"
        />
        <div>
          <SectionHeading
            title="A classroom without walls, wherever you call home"
            description="Noor Ul Quran Online Academy is an online Quran learning platform providing Quranic and basic Islamic education to children and adults worldwide. Our aim is to make Quran learning easy, accessible, affordable, and convenient for everyone."
          />
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <MissionCard
              title="Our Mission"
              text="To bring the Quran within reach of every home, no matter the distance, by pairing sincere students with dedicated teachers."
            />
            <MissionCard
              title="Our Vision"
              text="A world where financial hardship or geography never stands between a person and learning the Quran."
            />
          </div>
          <CTALink to="/about" variant="outline" className="mt-8 w-fit">
            More About Us
          </CTALink>
        </div>
      </Container>
    </section>
  );
}

function MissionCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-night-100 bg-paper-card p-5">
      <h3 className="font-display text-lg text-night-900">{title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">{text}</p>
    </div>
  );
}
