// =============================================================
// CENTRAL SITE CONFIGURATION
// Every WhatsApp number, email address and social link used
// anywhere on the website is pulled from this single file.
// Edit values here and the whole site updates.
// =============================================================

export const SITE_CONFIG = {
  name: "Noor Ul Quran Online Academy",
  shortName: "Noor Ul Quran",
  tagline: "Learn Quran | Understand Quran | Live Quran",
  strapline:
    "Learn the Holy Quran from the comfort of your home with qualified and dedicated Quran teachers.",

  // Contact — sourced from the academy's business PDF.
  whatsappDisplay: "+92 321 9282371",
  whatsappNumber: "923219282371", // digits only, used for wa.me links
  email: "academynoorulquranonline@gmail.com",

  availability: "Online classes available worldwide",

  social: {
    facebook: "https://www.facebook.com/share/18Q9T19UB8/",
    instagram: "https://www.instagram.com/noorulquranonlineaccademy",
    twitter: "https://x.com/quranonline74",
  },

  // Used for canonical/OG URLs. Update once the real domain is live.
  siteUrl: "https://www.noorulquranonline.com",
};

/**
 * Builds a wa.me deep link with a pre-filled, URL-encoded message.
 * Every "WhatsApp Us" button on the site should call this helper
 * instead of hard-coding a phone number or message string.
 */
export function buildWhatsAppLink({ course, classType, name } = {}) {
  const lines = [
    "Assalamu Alaikum,",
    "",
    "I am interested in joining Noor Ul Quran Online Academy.",
    "",
    `Name: ${name || ""}`,
    `Interested Course: ${course || ""}`,
    `Preferred Class Type: ${classType || ""}`,
    "",
    "I would like to know more about the classes and enrollment process.",
    "",
    "JazakAllah Khair.",
  ];
  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`;
}

/** Builds a mailto: link with a pre-filled subject and body. */
export function buildMailtoLink({ subject, course, name } = {}) {
  const finalSubject = subject || `Enrollment enquiry — ${course || "Quran classes"}`;
  const body = [
    "Assalamu Alaikum,",
    "",
    "I am interested in joining Noor Ul Quran Online Academy.",
    "",
    `Name: ${name || ""}`,
    `Interested Course: ${course || ""}`,
    "",
    "JazakAllah Khair.",
  ].join("\n");
  return `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
    finalSubject
  )}&body=${encodeURIComponent(body)}`;
}
