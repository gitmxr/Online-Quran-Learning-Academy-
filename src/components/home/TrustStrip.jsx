import { GraduationCap, Users, Globe2, HandHeart, BookOpen, Home } from "lucide-react";
import Container from "../common/Container";

const items = [
  { icon: GraduationCap, label: "Qualified Quran Teachers" },
  { icon: Users, label: "One-to-One Learning" },
  { icon: Home, label: "Learn From Home" },
  { icon: BookOpen, label: "Quran with Tajweed" },
  { icon: Globe2, label: "Students Worldwide" },
  { icon: HandHeart, label: "Affordable & Flexible Fees" },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-night-100 bg-paper-card">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-7 py-10 sm:grid-cols-3 lg:grid-cols-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2.5 text-center sm:items-start sm:text-left">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-night-50 text-night-600">
              <Icon size={18} aria-hidden="true" />
            </span>
            <span className="font-body text-sm leading-snug text-ink-soft">{label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
