import { courses } from "./courses";

export const primaryNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Courses",
    to: "/courses",
    children: courses.map((c) => ({ label: c.title, to: `/courses/${c.slug}` })),
  },
  {
    label: "Teachers",
    to: "/teachers",
    children: [
      { label: "All Teachers", to: "/teachers" },
      { label: "Male Teachers", to: "/teachers/male" },
      { label: "Female Teachers", to: "/teachers/female" },
    ],
  },
  { label: "Fee Structure", to: "/fee-structure" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Teachers", to: "/teachers" },
  { label: "Fee Structure", to: "/fee-structure" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
];
