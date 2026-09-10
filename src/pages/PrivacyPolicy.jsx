import useSeo from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import { SITE_CONFIG } from "../config/siteConfig";

export default function PrivacyPolicy() {
  useSeo({
    title: "Privacy Policy",
    description: "How Noor Ul Quran Online Academy handles information submitted through this website.",
    path: "/privacy-policy",
  });

  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-prose">
          <div className="mb-8 rounded-xl border border-brass-200 bg-brass-50 px-5 py-4 font-body text-sm text-brass-900">
            This is generic, editable placeholder content. Please have it reviewed by a
            qualified professional before publishing the live website.
          </div>

          <div className="flex flex-col gap-8 font-body text-[15px] leading-relaxed text-ink-soft">
            <PolicySection title="Introduction">
              {SITE_CONFIG.name} ("we", "us", "our") respects your privacy. This policy explains
              what information we collect through this website and how it is used.
            </PolicySection>

            <PolicySection title="Information We Collect">
              When you submit our contact form, we may collect your name, email address, WhatsApp
              number, preferred course, and any message you provide. We do not knowingly collect
              more information than is needed to respond to your inquiry.
            </PolicySection>

            <PolicySection title="How We Use Your Information">
              Information submitted through the contact form is used only to respond to your
              enrollment inquiry, arrange classes, and communicate with you about the academy's
              courses.
            </PolicySection>

            <PolicySection title="WhatsApp & Email Communication">
              If you contact us via WhatsApp or email, that conversation is subject to the privacy
              practices of those respective platforms in addition to this policy.
            </PolicySection>

            <PolicySection title="Data Sharing">
              We do not sell your personal information. Information you submit is used solely by
              {" " + SITE_CONFIG.name} for enrollment and communication purposes.
            </PolicySection>

            <PolicySection title="Your Choices">
              You may contact us at any time to ask what information we hold about you or to
              request that it be deleted.
            </PolicySection>

            <PolicySection title="Contact">
              Questions about this policy can be sent to {SITE_CONFIG.email}.
            </PolicySection>

            <p className="text-sm text-ink-faint">Last updated: [Add date]</p>
          </div>
        </Container>
      </section>
    </>
  );
}

function PolicySection({ title, children }) {
  return (
    <div>
      <h2 className="font-display text-xl text-night-900">{title}</h2>
      <p className="mt-2">{children}</p>
    </div>
  );
}
