"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY"; // get free at web3forms.com

const COMMISSION_TYPES = [
  "Single Portrait",
  "Pet Portrait",
  "Couple / Family Portrait",
  "Landscape",
  "Custom / Other",
];

const SIZES = [
  "mdall — 12x16 in",
  "Medium — 16x20 in",
  "Large — 24x36 in",
  "Custom size (specify in notes)",
];

const BUDGETS = [
  "Under $150",
  "$150 – $300",
  "$300 – $600",
  "$600+",
  "Not sure yet",
];

export default function CommissionForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [fileNames, setFileNames] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "New Custom Commission Request");
    formData.append("from_name", "Website Commission Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
        setFileNames([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-[#ece6db] bg-[#faf8f5] p-10 text-center">
        <CheckCircle2 className="mx-auto mb-4 text-[#a9822e]" size={40} />
        <h3 className="text-2xl text-[#1d1d1d]">Request Received!</h3>
        <p className="mt-3 text-gray-700 ">
          Thank you — I've received your commission details and photos.
          I'll reply within 24–48 hours with pricing and next steps.
        </p>
        <a
          href="https://wa.me/923078793323"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-md font-medium  tracking-[0.15em] text-[#a9822e] underline"
        >
          Or message me directly on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact info */}
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full Name" name="name" required  placeholder="Enter Your Name"/>
        <Field label="Email Address" name="email" type="email"  placeholder="Enter Your Email" required />
        <Field
          label="Phone / WhatsApp Number"
          name="phone"
          placeholder="Enter Phone Number"
          type="tel"
          required
        />
        <SelectField
          label="Commission Type"
          name="commission_type"
          options={COMMISSION_TYPES}
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field
          label="Number of People / Subjects"
          name="subjects"
          type="number"
          min="1"
          defaultValue="1"
        />
        <SelectField label="Size" name="size" options={SIZES} required />
        <SelectField
          label="Budget Range"
          name="budget"
          options={BUDGETS}
        />
        <Field
          label="Needed By (optional)"
          name="deadline"
          type="date"
        />
      </div>

      {/* Reference photos */}
      <div>
        <label className="mb-2 block text-md font-medium      text-[#1d1d1d]">
          Reference Photos *
        </label>
        <input
          type="file"
          name="attachment"
          accept="image/*"
          multiple
          required
          onChange={(e) =>
            setFileNames(Array.from(e.target.files).map((f) => f.name))
          }
          className="block w-full rounded-md border border-[#ece6db] bg-[#faf8f5] p-3 text-md file:mr-4 file:rounded file:border-0 file:bg-[#043852] file:px-4 file:py-2 file:text-white"
        />
        <p className="mt-2 text-xs text-gray-500">
          Upload clear, well-lit photos. You can select multiple images.
        </p>
        {fileNames.length > 0 && (
          <p className="mt-1 text-xs text-[#a9822e]">
            {fileNames.length} file(s) selected: {fileNames.join(", ")}
          </p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label className="mb-2 block text-md font-medium      text-[#1d1d1d]">
          Style Notes / Special Requests
        </label>
        <textarea
          name="notes"
          rows={4}
          placeholder="Background color, framing preference, mood, anything you'd like me to know..."
          className="w-full rounded-md border border-[#ece6db] bg-[#faf8f5] p-3 text-md"
        />
      </div>

      {status === "error" && (
        <p className="text-md text-red-600">
          Something went wrong sending your request — please try again or
          message me directly on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-3 border border-[#1d1d1d] bg-[#043852] px-8 py-4 text-md font-semibold   tracking-[0.15em] text-white transition hover:border-[#a9822e] hover:bg-[#a9822e] disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="animate-spin" size={18} /> Sending...
          </>
        ) : (
          "Submit Commission Request"
        )}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required, ...rest }) {
  return (
    <div>
      <label className="mb-2 block text-md font-medium      text-[#1d1d1d]">
        {label} {required && "*"}
      </label>
     <input
  type={type}
  name={name}
  required={required}
  className={`
    w-full
    min-w-0
    rounded-md
    border
    border-[#ece6db]
    bg-[#faf8f5]
    p-3
    text-md
    ${type === "date" ? "appearance-none" : ""}
  `}
  {...rest}
/>
    </div>
  );
}

function SelectField({ label, name, options, required }) {
  return (
    <div>
      <label className="mb-2 block text-md font-medium      text-[#1d1d1d]">
        {label} {required && "*"}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-md border border-[#ece6db] bg-[#faf8f5] p-3 text-md"
      >
        <option value="" disabled>
          Select...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}