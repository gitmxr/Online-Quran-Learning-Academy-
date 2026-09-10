import useSeo from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import TeacherCard from "../components/teachers/TeacherCard";
import { maleTeachers, sharedTeacherStatement } from "../data/teachers";

export default function TeachersMale() {
  useSeo({
    title: "Male Teachers",
    description: "Meet the male Quran teachers at Noor Ul Quran Online Academy.",
    path: "/teachers/male",
  });

  return (
    <>
      <PageHero
        title="Male Teachers"
        description={sharedTeacherStatement}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Teachers", to: "/teachers" },
          { label: "Male Teachers" },
        ]}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {maleTeachers.map((t) => (
              <TeacherCard key={t.slug} teacher={t} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
