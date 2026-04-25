"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How quickly can we get started?",
    a: "Most programs kick off within 2 weeks of signing, including needs assessment, program design, and employee onboarding.",
  },
  {
    q: "Can you customize the curriculum for our industry?",
    a: "Absolutely. We have built custom programs for BFSI, e-commerce, healthcare, and manufacturing sectors.",
  },
  {
    q: "What is the minimum team size?",
    a: "We work with teams as small as 10 and as large as 5000. Pricing scales with your team size.",
  },
  {
    q: "Do employees get certificates?",
    a: "Yes. All programs include industry-recognized certificates co-branded with leading universities.",
  },
  {
    q: "What if an employee drops out midway?",
    a: "We offer make-up sessions, one-on-one mentoring, and extended content access at no extra cost.",
  },
  {
    q: "How do we track employee progress?",
    a: "You get a live HR dashboard showing enrollment, attendance, scores, and certification status.",
  },
  {
    q: "Is there a free pilot option?",
    a: "Yes. We offer a free 2-week pilot for up to 20 employees before any commitment.",
  },
  {
    q: "What technology do employees need?",
    a: "Just a laptop and internet. Our LMS runs on any modern browser with no installation needed.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span
          className="text-gray-900 font-semibold text-base group-hover:text-blue-600 transition-colors pr-4"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {q}
        </span>
        <span
          className={
            "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all " +
            (open ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500")
          }
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M20 12H4" : "M12 4v16m8-8H4"}
            />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 text-gray-500 text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Questions we get asked a lot
          </h2>
        </div>
        <div className="bg-gray-50 rounded-2xl px-8 py-2">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
