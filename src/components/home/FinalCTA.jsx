import Container from "../common/Container";
import { EnrollCTA, WhatsAppCTA } from "../common/CTA";

export default function FinalCTA() {
  return (
    <section className="bg-night-900 py-20 text-center sm:py-24">
      <Container>
        <p className="font-arabic text-2xl text-brass-300/90" dir="rtl" lang="ar">
          بِسْمِ اللَّهِ
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight text-paper sm:text-4xl">
          Your journey with the Quran can begin today.
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-paper/70">
          Learn, understand, and live according to the teachings of the Holy Quran with Noor Ul
          Quran Online Academy.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <EnrollCTA />
          <WhatsAppCTA />
        </div>
      </Container>
    </section>
  );
}
