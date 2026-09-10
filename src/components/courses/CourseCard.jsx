import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ArchFrame from "../common/ArchFrame";

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group flex flex-col rounded-2xl border border-night-100 bg-paper-card p-5 transition-colors hover:border-brass-300 sm:flex-row sm:items-center sm:gap-6"
    >
      <ArchFrame
        label={`[Add ${course.title} image]`}
        className="aspect-square w-full sm:w-28 shrink-0"
      />
      <div className="mt-4 flex-1 sm:mt-0">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-night-900">{course.title}</h3>
          <ArrowUpRight
            size={18}
            aria-hidden="true"
            className="mt-1 shrink-0 text-brass-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
        <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-soft">
          {course.shortDescription}
        </p>
      </div>
    </Link>
  );
}
