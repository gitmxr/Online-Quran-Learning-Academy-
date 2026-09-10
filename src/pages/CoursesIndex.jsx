import useSeo from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import CourseCard from "../components/courses/CourseCard";
import { WhatsAppCTA } from "../components/common/CTA";
import { courses } from "../data/courses";

export default function CoursesIndex() {
  useSeo({
    title: "Courses",
    description:
      "Noorani Qaida, Quran Reading, Tajweed, Memorization, Namaz Learning, Basic Islamic Education, One-to-One classes, and courses for kids and adults.",
    path: "/courses",
  });

  return (
    <>
      <PageHero
        title="Courses for every stage of the journey"
        description="From the very first letters to memorizing the Quran, every course is taught at a pace that fits the student."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Courses" }]}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          <div className="mt-14 flex flex-col items-center gap-3 rounded-2xl border border-night-100 bg-paper-card px-6 py-10 text-center">
            <h2 className="font-display text-2xl text-night-900">Not sure which course fits?</h2>
            <p className="max-w-md font-body text-sm text-ink-soft">
              Tell us a little about the student's age and goals on WhatsApp, and we'll help you
              choose the right starting point.
            </p>
            <WhatsAppCTA className="mt-3" />
          </div>
        </Container>
      </section>
    </>
  );
}
