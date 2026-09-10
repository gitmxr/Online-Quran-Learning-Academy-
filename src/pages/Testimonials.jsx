import useSeo from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import { TestimonialCard } from "../components/home/TestimonialsPreview";
import { EnrollCTA, WhatsAppCTA } from "../components/common/CTA";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  useSeo({
    title: "Testimonials",
    description: "Stories and feedback from students of Noor Ul Quran Online Academy.",
    path: "/testimonials",
  });

  return (
    <>
      <PageHero
        title="Stories from our students"
        description="Real feedback from the Noor Ul Quran community, added here as it comes in."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Testimonials" }]}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-night-900 py-16 text-center sm:py-20">
        <Container>
          <h2 className="mx-auto max-w-lg font-display text-3xl text-paper sm:text-4xl">
            Ready to write your own story with the Quran?
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <EnrollCTA />
            <WhatsAppCTA />
          </div>
        </Container>
      </section>
    </>
  );
}
