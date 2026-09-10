import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { courses } from "../../data/courses";
import { WhatsAppCTA } from "./CTA";

const initialState = {
  name: "",
  email: "",
  whatsapp: "",
  course: "",
  classType: "",
  message: "",
};

/**
 * INTEGRATION POINT
 * ------------------------------------------------------------------
 * This function currently simulates a submission so the form is fully
 * functional in the UI (validation, loading, success, error states)
 * without a backend. To go live, replace the body of this function
 * with a real call to your chosen email service, for example:
 *
 *   - Formspree:  fetch("https://formspree.io/f/xxxxxx", { method: "POST", body: ... })
 *   - EmailJS:    emailjs.send(serviceId, templateId, formData)
 *   - Resend/SendGrid via your own serverless function endpoint
 *
 * Keep the same resolve/reject contract so the form UI needs no changes.
 * ------------------------------------------------------------------
 */
async function submitInquiry(formData) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  // eslint-disable-next-line no-console
  console.info("Inquiry ready to send (connect a backend to deliver it):", formData);
  return { ok: true };
}

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.whatsapp.trim()) {
    errors.whatsapp = "Please enter a WhatsApp number.";
  } else if (!/^[+\d][\d\s-]{6,}$/.test(values.whatsapp.trim())) {
    errors.whatsapp = "Please enter a valid phone/WhatsApp number.";
  }
  if (!values.course) errors.course = "Please select a course.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      const result = await submitInquiry(values);
      if (result.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-night-100 bg-paper-card p-8 text-center sm:p-10">
        <CheckCircle2 className="mx-auto mb-4 text-night-500" size={40} aria-hidden="true" />
        <h3 className="font-display text-2xl text-night-900">
          Thank you. We have received your inquiry.
        </h3>
        <p className="mt-2 font-body text-ink-soft">
          A member of the academy will reach out to you soon. For a faster reply, continue the
          conversation on WhatsApp now.
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppCTA
            course={values.course}
            classType={values.classType}
            label="Continue on WhatsApp"
          />
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          required
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          label="Email"
          required
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="WhatsApp Number"
          required
          type="tel"
          name="whatsapp"
          value={values.whatsapp}
          onChange={handleChange}
          error={errors.whatsapp}
          placeholder="+92 3xx xxxxxxx"
          autoComplete="tel"
        />
        <SelectField
          label="Interested Course"
          required
          name="course"
          value={values.course}
          onChange={handleChange}
          error={errors.course}
          options={courses.map((c) => ({ value: c.title, label: c.title }))}
        />
      </div>

      <SelectField
        label="Preferred Class Type"
        name="classType"
        value={values.classType}
        onChange={handleChange}
        options={[
          { value: "One-to-One", label: "One-to-One" },
          { value: "Kids", label: "Kids" },
          { value: "Brothers", label: "Brothers" },
          { value: "Sisters", label: "Sisters" },
        ]}
        placeholder="Select an option"
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="font-body text-sm font-medium text-night-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          className="rounded-xl border border-night-200 bg-paper-card px-4 py-3 font-body text-[15px] text-ink outline-none transition-colors focus:border-brass-500"
          placeholder="Tell us a little about your goals or your child's age..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={16} aria-hidden="true" />
          Something went wrong sending your inquiry. Please try again, or message us directly on
          WhatsApp.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-night-800 px-7 py-3.5 font-body text-base font-medium text-paper transition-colors hover:bg-night-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="animate-spin" size={18} aria-hidden="true" />}
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}

function Field({ label, required, error, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={props.name} className="font-body text-sm font-medium text-night-800">
        {label} {required && <span className="text-brass-600">*</span>}
      </label>
      <input
        id={props.name}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.name}-error` : undefined}
        className={`rounded-xl border bg-paper-card px-4 py-3 font-body text-[15px] text-ink outline-none transition-colors focus:border-brass-500 ${
          error ? "border-red-400" : "border-night-200"
        }`}
        {...props}
      />
      {error && (
        <p id={`${props.name}-error`} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({ label, required, error, options, placeholder = "Select a course", ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={props.name} className="font-body text-sm font-medium text-night-800">
        {label} {required && <span className="text-brass-600">*</span>}
      </label>
      <select
        id={props.name}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.name}-error` : undefined}
        className={`rounded-xl border bg-paper-card px-4 py-3 font-body text-[15px] text-ink outline-none transition-colors focus:border-brass-500 ${
          error ? "border-red-400" : "border-night-200"
        }`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${props.name}-error`} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
