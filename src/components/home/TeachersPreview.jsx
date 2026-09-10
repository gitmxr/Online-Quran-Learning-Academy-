import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ArchFrame from "../common/ArchFrame";
import { CTALink } from "../common/CTA";
import { teachers, sharedTeacherStatement } from "../../data/teachers";

export default function TeachersPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          title="Teachers who make learning feel personal"
          description={sharedTeacherStatement}
        />

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-10">
          {teachers.map((t) => (
            <div key={t.slug} className="flex w-32 flex-col items-center text-center sm:w-36">
              <ArchFrame label="Photo" className="aspect-[4/5] w-full" />
              <p className="mt-3 font-display text-[15px] text-night-900">{t.name}</p>
              <p className="font-body text-xs text-ink-faint">{t.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTALink to="/teachers" variant="outline">
            Meet All Teachers
          </CTALink>
        </div>
      </Container>
    </section>
  );
}
