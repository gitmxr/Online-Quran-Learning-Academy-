import useSeo from "../hooks/useSeo";
import Container from "../components/common/Container";
import { CTALink } from "../components/common/CTA";

export default function NotFound() {
  useSeo({ title: "Page Not Found", description: "This page could not be found.", path: "/404" });

  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="font-display text-6xl text-brass-500">404</p>
        <h1 className="mt-4 font-display text-3xl text-night-900">
          We couldn't find that page
        </h1>
        <p className="mx-auto mt-3 max-w-md font-body text-ink-soft">
          The page you're looking for may have moved. Let's get you back on track.
        </p>
        <CTALink to="/" variant="primary" className="mt-8 inline-flex">
          Back to Home
        </CTALink>
      </Container>
    </section>
  );
}
