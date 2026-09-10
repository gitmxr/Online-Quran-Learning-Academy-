import { Quote } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { CTALink } from "../common/CTA";
import { testimonials } from "../../data/testimonials";

export function TestimonialCard({ testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-night-100 bg-paper-card p-7">
      <div>
        <Quote size={22} className="text-brass-500" aria-hidden="true" />
        <blockquote className="mt-4 font-display text-lg italic leading-snug text-night-800">
          {testimonial.quote}
        </blockquote>
      </div>
      <figcaption className="mt-6 border-t border-night-100 pt-4">
        <p className="font-body text-sm font-medium text-night-900">{testimonial.name}</p>
        <p className="font-body text-xs text-ink-faint">{testimonial.detail}</p>
      </figcaption>
    </figure>
  );
}

export default function TestimonialsPreview() {
  return (
    <section className="bg-night-50/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          title="Stories from our students"
          description="Real feedback from the Noor Ul Quran community, added here as it comes in."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <CTALink to="/testimonials" variant="outline">
            Read More Stories
          </CTALink>
        </div>
      </Container>
    </section>
  );
}
