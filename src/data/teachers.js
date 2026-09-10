// Teacher names and roles are sourced directly from the academy PDF.
// No qualifications, experience or biography details are invented —
// each `bio` field is an editable placeholder until the academy
// supplies real profile content.

export const sharedTeacherStatement =
  "Our teachers aim to provide students with a respectful, comfortable, and supportive Quran learning environment.";

export const teachers = [
  {
    slug: "qari-abdul-sattar",
    name: "Qari Abdul Sattar",
    role: "Quran Teacher",
    gender: "male",
    bio: "[Add teacher biography]",
    photo: null,
  },
  {
    slug: "qari-umer-farooq",
    name: "Qari Umer Farooq",
    role: "Quran Teacher",
    gender: "male",
    bio: "[Add teacher biography]",
    photo: null,
  },
  {
    slug: "qaria-rukia-allah-yar",
    name: "Qaria Rukia Allah Yar",
    role: "Quran Teacher",
    gender: "female",
    bio: "[Add teacher biography]",
    photo: null,
  },
  {
    slug: "qaria-aysha-aziz",
    name: "Qaria Aysha Aziz",
    role: "Quran Teacher",
    gender: "female",
    bio: "[Add teacher biography]",
    photo: null,
  },
  {
    slug: "qaria-sadia",
    name: "Qaria Sadia",
    role: "Quran Teacher",
    gender: "female",
    bio: "[Add teacher biography]",
    photo: null,
  },
];

export const maleTeachers = teachers.filter((t) => t.gender === "male");
export const femaleTeachers = teachers.filter((t) => t.gender === "female");
