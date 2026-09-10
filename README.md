# Noor Ul Quran Online Academy — Website

A complete, responsive, multi-page marketing and lead-generation website for **Noor Ul Quran Online Academy**, built with React, Vite, React Router, and Tailwind CSS.

---

## Project Overview

This is a lead-generation website for an online Quran academy. Every page is built to move a visitor toward one of two actions: **WhatsApp** or **email** enquiry, backed by a lead-capture contact form.

Content (courses, teachers, FAQs, contact details) is data-driven from a handful of files, so the site can be updated without touching component code.

## Tech Stack

- **React 19** + **Vite** — fast dev/build tooling
- **React Router v7** — client-side routing, clean URLs
- **Tailwind CSS 3** — utility-first styling, custom design tokens
- **lucide-react** — icon set

No backend, database, or authentication is included by design — this is a frontend marketing site with a contact form ready to be wired up to an email service.

## Folder Structure

```
src/
├── components/
│   ├── layout/        Header, Footer, MobileMenu, TopBar, Logo, Layout
│   ├── common/         CTA, ArchFrame, ContactForm, FAQAccordion, etc.
│   ├── home/            Hero, TrustStrip, CoursesPreview, etc. (homepage sections)
│   ├── courses/       CourseCard
│   └── teachers/       TeacherCard
├── pages/               One file per route (Home, About, CourseDetail, etc.)
├── data/                 courses.js, teachers.js, testimonials.js, faqs.js, nav.js
├── config/              siteConfig.js — WhatsApp/email/social, all in one place
├── hooks/               useSeo.js — sets page title/meta tags per route
└── App.jsx              Route definitions

public/
├── images/               Drop replacement photos here (see "Replace Images" below)
├── robots.txt
└── sitemap.xml
```

## How to Run Locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## How to Build

```bash
npm run build
```

This outputs a production build to `dist/`. Preview it locally with:

```bash
npm run preview
```

## How to Change WhatsApp Number

Open **`src/config/siteConfig.js`** and edit:

```js
whatsappDisplay: "+92 321 9282371",   // shown in the UI
whatsappNumber: "923219282371",       // digits only, used in wa.me links
```

Every WhatsApp button on the site (floating button, header, footer, course pages, contact page) reads from this one file — nothing is hard-coded elsewhere.

## How to Change Email

Same file, **`src/config/siteConfig.js`**:

```js
email: "academynoorulquranonline@gmail.com",
```

## How to Add a Course

Open **`src/data/courses.js`** and add a new object to the `courses` array:

```js
{
  slug: "your-course-slug",
  title: "Course Title",
  shortDescription: "One-sentence summary.",
  audience: "Who it's for, one sentence.",
  learn: ["Point one", "Point two"],
  whoFor: "Longer description of the ideal student.",
  howItWorks: "How the classes are run.",
},
```

A route, navigation entry, homepage card, and detail page are all generated automatically from this array — no other file needs to change.

## How to Add a Teacher

Open **`src/data/teachers.js`** and add to the `teachers` array:

```js
{
  slug: "teacher-slug",
  name: "Teacher Name",
  role: "Quran Teacher",
  gender: "male" | "female",
  bio: "Short biography.",
  photo: "/images/teachers/teacher-slug.jpg", // or null for placeholder
},
```

They'll automatically appear on `/teachers` and on `/teachers/male` or `/teachers/female`.

## How to Add Testimonials

Open **`src/data/testimonials.js`** and replace the placeholder objects:

```js
{ id: "t1", quote: "Real student quote.", name: "Student Name", detail: "Course / Country" },
```

## How to Replace Images

The site currently uses an elegant arch-shaped placeholder (`ArchFrame` component) everywhere a photo is missing. To use a real photo, pass a `src` into that component, or update the relevant data file's `photo` field.

Suggested folders for dropping in real assets:

```
public/images/hero/
public/images/courses/
public/images/teachers/
public/images/testimonials/
public/images/about/
public/images/general/
```

Then reference them as `/images/courses/your-image.jpg`, etc.

## Connecting the Contact Form to a Real Backend

The contact form (`src/components/common/ContactForm.jsx`) is fully functional in the UI — validation, loading, success, and error states all work — but currently only logs the submission to the console. To send real emails, open that file and replace the body of the `submitInquiry` function with a call to your chosen provider (Formspree, EmailJS, Resend, SendGrid via your own endpoint, etc.). The function's resolve/reject contract is already set up so no other UI code needs to change.

## SEO

- Every page sets its own title/description/canonical URL via the `useSeo` hook.
- `public/robots.txt` and `public/sitemap.xml` are included — update the domain in both once the site is live.
- `Course` and `FAQPage` structured data are included on the relevant pages; `EducationalOrganization` structured data is in `index.html`.

## Deploying

This is a static site after `npm run build` — the `dist/` folder can be deployed to Replit, Vercel, Netlify, or any static host. On Replit:

1. Import this project.
2. Run `npm install`.
3. Use `npm run build` then serve the `dist/` folder (or configure the Replit run command to `npm run preview -- --host 0.0.0.0`).

---

**Before going live, remember to:**
- Replace every `[Add ...]` placeholder (teacher bios, testimonials, images).
- Confirm the WhatsApp number and email in `siteConfig.js`.
- Connect the contact form to a real email service.
- Have a professional review the Privacy Policy and Terms & Conditions pages.
- Update `siteUrl` in `siteConfig.js`, `index.html`, `robots.txt`, and `sitemap.xml` once the real domain is chosen.
