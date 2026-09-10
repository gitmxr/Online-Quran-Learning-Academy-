import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle2, Users } from "lucide-react";
import useSeo from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import ArchFrame from "../components/common/ArchFrame";
import { WhatsAppCTA, CTALink } from "../components/common/CTA";
import { courses, getCourseBySlug } from "../data/courses";
import { SITE_CONFIG } from "../config/siteConfig";

function CourseSchema({ course }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: course.title,
      description: course.shortDescription,
      provider: {
        "@type": "EducationalOrganization",
        name: SITE_CONFIG.name,
        sameAs: SITE_CONFIG.siteUrl,
      },
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, [course]);
  return null;
}

export default function CourseDetail() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  useSeo({
    title: course?.title || "Course Not Found",
    description: course?.shortDescription || "This course could not be found.",
    path: `/courses/${slug}`,
  });

  if (!course) return <Navigate to="/courses" replace />;

  const otherCourses = courses.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <>
      <CourseSchema course={course} />
      <PageHero
        title={course.title}
        description={course.shortDescription}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Courses", to: "/courses" },
          { label: course.title },
        ]}
      />

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="font-display text-2xl text-night-900">Course Introduction</h2>
              <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-ink-soft">
                {course.shortDescription} Classes are taught online, one step at a time, with a
                dedicated teacher guiding every session.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-night-900">What Students Learn</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {course.learn.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-[15px] text-ink-soft">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brass-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-night-900">Who This Course Is For</h2>
              <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-ink-soft">
                {course.whoFor}
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-night-900">How Classes Work</h2>
              <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-ink-soft">
                {course.howItWorks}
              </p>
            </div>

            <div className="rounded-2xl border border-night-100 bg-paper-card p-6">
              <div className="flex items-center gap-2.5 text-night-700">
                <Users size={18} aria-hidden="true" />
                <h2 className="font-display text-xl text-night-900">Teacher & Learning Approach</h2>
              </div>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-ink-soft">
                Our teachers aim to provide students with a respectful, comfortable, and
                supportive Quran learning environment throughout this course.
              </p>
              <Link
                to="/teachers"
                className="mt-3 inline-block font-body text-sm font-medium text-night-700 underline decoration-brass-400 decoration-2 underline-offset-4 hover:text-night-900"
              >
                Meet our teachers
              </Link>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <ArchFrame
              label={`[Add ${course.title} photograph]`}
              className="aspect-[4/5] w-full"
            />
            <div className="rounded-2xl border border-night-100 bg-paper-card p-6 text-center">
              <h3 className="font-display text-xl text-night-900">Interested in this course?</h3>
              <p className="mt-2 font-body text-sm text-ink-soft">
                Talk to us on WhatsApp, or enroll now to get started.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <WhatsAppCTA course={course.title} label="Talk to us on WhatsApp" />
                <CTALink to="/contact" variant="outline">
                  Enroll Now
                </CTALink>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-night-50/60 py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl text-night-900">Explore other courses</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {otherCourses.map((c) => (
              <Link
                key={c.slug}
                to={`/courses/${c.slug}`}
                className="rounded-2xl border border-night-100 bg-paper-card p-5 transition-colors hover:border-brass-300"
              >
                <h3 className="font-display text-lg text-night-900">{c.title}</h3>
                <p className="mt-1.5 font-body text-sm text-ink-faint">{c.shortDescription}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
