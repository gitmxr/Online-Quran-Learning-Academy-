import useSeo from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import TeacherCard from "../components/teachers/TeacherCard";
import { CTALink } from "../components/common/CTA";
import { teachers, sharedTeacherStatement } from "../data/teachers";

export default function TeachersIndex() {
  useSeo({
    title: "Our Teachers",
    description:
      "Meet the Quran teachers at Noor Ul Quran Online Academy, dedicated to a respectful and supportive learning environment.",
    path: "/teachers",
  });

  return (
    <>
      <PageHero
        title="Our Quran Teachers"
        description={sharedTeacherStatement}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Teachers" }]}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap gap-3">
            <CTALink to="/teachers/male" variant="outline">
              Male Teachers
            </CTALink>
            <CTALink to="/teachers/female" variant="outline">
              Female Teachers
            </CTALink>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((t) => (
              <TeacherCard key={t.slug} teacher={t} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
