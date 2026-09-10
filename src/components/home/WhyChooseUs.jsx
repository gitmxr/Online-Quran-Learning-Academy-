import { Check } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ArchFrame from "../common/ArchFrame";

const reasons = [
  "Qualified Quran Teachers",
  "One-to-One Online Classes",
  "Flexible Learning",
  "Classes for Kids & Adults",
  "Quran with Tajweed",
  "Noorani Qaida",
  "Namaz Learning",
  "Comfortable Learning From Home",
  "Students Welcome Worldwide",
  "Affordable & Flexible Fee Options",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-night-900 py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            tone="light"
            title="Why families choose Noor Ul Quran Online Academy"
          />
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-2.5 font-body text-[15px] text-paper/85">
                <Check size={17} className="mt-0.5 shrink-0 text-brass-400" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <ArchFrame
          wide
          tone="brass"
          label="[Add photograph of an online class in session]"
          className="mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-none"
        />
      </Container>
    </section>
  );
}
