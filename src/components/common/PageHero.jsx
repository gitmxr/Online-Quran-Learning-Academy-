import Container from "./Container";
import Breadcrumbs from "./Breadcrumbs";

export default function PageHero({ title, description, breadcrumbs }) {
  return (
    <section className="border-b border-night-100 bg-night-900">
      <Container>
        {breadcrumbs && (
          <div className="[&_ol]:text-paper/50 [&_a]:text-paper/70 [&_a:hover]:text-brass-300 [&_span]:text-paper/90">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <div className="pb-14 pt-6 sm:pb-16">
          <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-paper sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-paper/70">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
