import Container from "../common/Container";
import ArchFrame from "../common/ArchFrame";
import { EnrollCTA, WhatsAppCTA } from "../common/CTA";
import { SITE_CONFIG } from "../../config/siteConfig";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-night-900">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-lattice opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-20">
        <div className="animate-rise">
          <p className="font-arabic text-2xl text-brass-300/90 sm:text-3xl" dir="rtl" lang="ar">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <h1 className="mt-5 max-w-xl font-display text-[2.6rem] leading-[1.08] text-paper sm:text-6xl">
            Learn Quran.
            <br />
            Understand Quran.
            <br />
            <span className="text-brass-300">Live Quran.</span>
          </h1>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-paper/70">
            {SITE_CONFIG.strapline} Join students of every age, from anywhere in the world, in a
            classroom built on patience and care.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <EnrollCTA />
            <WhatsAppCTA />
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-paper/10 pt-7 max-w-md">
            <div>
              <dt className="font-display text-2xl text-paper">Kids</dt>
              <dd className="font-body text-xs text-paper/55">& adults welcome</dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-paper">1:1</dt>
              <dd className="font-body text-xs text-paper/55">personal attention</dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-paper">Global</dt>
              <dd className="font-body text-xs text-paper/55">learn from anywhere</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <ArchFrame
            wide
            tone="brass"
            label="[Add hero photograph of a Quran class]"
            className="mx-auto aspect-[17/15] w-full max-w-sm shadow-lantern lg:max-w-md"
          />
          <div className="absolute -bottom-5 left-1/2 w-[86%] -translate-x-1/2 rounded-2xl border border-night-100 bg-paper-card px-5 py-4 shadow-card sm:-bottom-6 sm:w-[78%]">
            <p className="font-display text-sm text-night-900">"Pay What You Can Afford"</p>
            <p className="mt-0.5 font-body text-xs text-ink-faint">
              Quran education made accessible for everyone.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
