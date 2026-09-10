import useSeo from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import TeacherCard from "../components/teachers/TeacherCard";
import { femaleTeachers, sharedTeacherStatement } from "../data/teachers";

export default function TeachersFemale() {
  useSeo({
    title: "Female Teachers",
    description: "Meet the female Quran teachers at Noor Ul Quran Online Academy.",
    path: "/teachers/female",
  });

  return (
    <>
      <PageHero
        title="Female Teachers"
        description={sharedTeacherStatement}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Teachers", to: "/teachers" },
          { label: "Female Teachers" },
        ]}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {femaleTeachers.map((t) => (
              <TeacherCard key={t.slug} teacher={t} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
