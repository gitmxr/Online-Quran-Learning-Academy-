import useSeo from "../hooks/useSeo";
import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import AboutPreview from "../components/home/AboutPreview";
import CoursesPreview from "../components/home/CoursesPreview";
import TeachersPreview from "../components/home/TeachersPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeePreview from "../components/home/FeePreview";
import TestimonialsPreview from "../components/home/TestimonialsPreview";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  useSeo({
    title: "Learn Quran Online | Kids & Adults Worldwide",
    description:
      "Noor Ul Quran Online Academy: learn the Holy Quran from home with qualified teachers. Noorani Qaida, Tajweed, memorization, Namaz and Islamic studies for kids and adults, worldwide.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <CoursesPreview />
      <WhyChooseUs />
      <TeachersPreview />
      <FeePreview />
      <TestimonialsPreview />
      <FinalCTA />
    </>
  );
}
