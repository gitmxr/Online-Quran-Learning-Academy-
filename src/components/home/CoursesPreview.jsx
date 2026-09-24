import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ArchFrame from "../common/ArchFrame";
import { CTALink } from "../common/CTA";
import { courses } from "../../data/courses";

export default function CoursesPreview() {
  return (
    <section className="bg-night-50/60 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            title="Courses for every stage of the journey"
            description="From the very first letters to memorizing the Quran, each course is taught at a pace that fits the student."
          />
          <CTALink to="/courses" variant="outline" className="w-fit shrink-0">
            View All Courses
          </CTALink>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Link key={course.slug} to={`/courses/${course.slug}`} className="group block">
              <ArchFrame
                src={course.image || course.photo}
                alt={course.title}
                label={`[Add ${course.title} image]`}
                className="aspect-square w-full"
              />
              <div className="mt-4 flex items-start justify-between gap-2">
                <h3 className="font-display text-lg text-night-900 group-hover:text-night-600 transition-colors">
                  {course.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-brass-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-faint">
                {course.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
