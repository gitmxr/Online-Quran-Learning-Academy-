// All copy here is sourced directly from the academy's business PDF.
// Where the PDF does not go into further depth, fields are marked
// with an editable placeholder rather than invented detail.

export const courses = [
  {
    slug: "noorani-qaida",
    title: "Noorani Qaida",
    shortDescription:
      "Learn the basics of Quran reading from the beginning with proper pronunciation.",
    audience: "Absolute beginners of any age, starting from the very first letters.",
    learn: [
      "Correct pronunciation (makhraj) of the Arabic letters",
      "How letters join together to form words",
      "The foundations every Quran reader needs before moving to the Quran itself",
    ],
    whoFor:
      "New students — children or adults — who have not yet learned to read Arabic script, and anyone who wants to revisit the fundamentals with a patient, dedicated teacher.",
    howItWorks:
      "One-to-one or small-group online sessions, paced to the student, with steady repetition and correction from a dedicated teacher.",
  },
  {
    slug: "quran-reading",
    title: "Quran Reading",
    shortDescription: "Improve your Quran reading skills with regular online lessons.",
    audience: "Students who can already read Arabic script and want to build fluency.",
    learn: [
      "Smoother, more confident recitation",
      "Correction of recurring reading mistakes",
      "Regular practice with a consistent teacher",
    ],
    whoFor:
      "Students who have completed Noorani Qaida, or already read Quran, and want ongoing, regular practice.",
    howItWorks:
      "Ongoing weekly online lessons with steady, page-by-page progress and gentle correction.",
  },
  {
    slug: "quran-with-tajweed",
    title: "Quran with Tajweed",
    shortDescription: "Learn the rules of Tajweed and improve your Quran recitation.",
    audience: "Students who want to recite the Quran with correct Tajweed rules.",
    learn: [
      "The rules of Tajweed and how they apply while reading",
      "Improved, more precise Quran recitation",
      "Ongoing correction from a dedicated teacher",
    ],
    whoFor:
      "Students already comfortable reading Quran who want to refine their recitation according to the rules of Tajweed.",
    howItWorks:
      "Guided online sessions that apply Tajweed rules directly to live recitation, with correction and repetition.",
  },
  {
    slug: "quran-memorization",
    title: "Quran Memorization",
    shortDescription:
      "Guidance and support for students who want to memorize the Holy Quran.",
    audience: "Students working toward memorizing part or all of the Holy Quran.",
    learn: [
      "A structured approach to memorization (Hifz)",
      "Regular revision to retain what has been memorized",
      "Ongoing guidance and support from a dedicated teacher",
    ],
    whoFor: "Children and adults committed to memorizing the Quran at their own pace.",
    howItWorks:
      "Regular one-to-one sessions combining new memorization with revision of previously learned portions.",
  },
  {
    slug: "namaz-learning",
    title: "Namaz Learning",
    shortDescription:
      "Learn how to perform Salah correctly, including essential duas and practices.",
    audience: "Anyone who wants to learn or correct how they perform Salah.",
    learn: [
      "How to perform Salah correctly, step by step",
      "Essential duas used in daily prayer",
      "Everyday practices connected to Namaz",
    ],
    whoFor: "Children and adults, including beginners who have never prayed before.",
    howItWorks: "Guided, practical online sessions covering Salah from start to finish.",
  },
  {
    slug: "basic-islamic-education",
    title: "Basic Islamic Education",
    shortDescription: "Learn essential Islamic knowledge and everyday teachings.",
    audience: "Students who want a grounding in essential Islamic knowledge.",
    learn: [
      "Essential Islamic knowledge for everyday life",
      "Everyday teachings explained clearly and respectfully",
    ],
    whoFor: "Children and adults seeking a respectful introduction to core Islamic teachings.",
    howItWorks: "Structured online sessions covering everyday Islamic knowledge and practice.",
  },
  {
    slug: "one-to-one-quran-classes",
    title: "One-to-One Quran Classes",
    shortDescription: "Personalized online classes with dedicated teacher attention.",
    audience: "Students who prefer individual, personalized attention.",
    learn: [
      "A pace and plan built around the individual student",
      "Focused, one-to-one correction and guidance",
    ],
    whoFor: "Any student — child or adult — who learns best with undivided teacher attention.",
    howItWorks:
      "Private online sessions scheduled around the student, with full teacher focus throughout.",
  },
  {
    slug: "quran-for-kids-and-adults",
    title: "Quran Classes for Kids & Adults",
    shortDescription:
      "Specially designed learning opportunities for children, brothers, sisters, and adults.",
    audience: "Children, brothers, sisters and adults of all ages.",
    learn: [
      "Learning opportunities designed around the student's age and stage",
      "A comfortable, supportive online classroom environment",
    ],
    whoFor: "Families looking for Quran education suitable for every member, young or old.",
    howItWorks:
      "Online classes grouped and paced appropriately for children, brothers, sisters and adults.",
  },
];

export function getCourseBySlug(slug) {
  return courses.find((c) => c.slug === slug);
}
