"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const wa = "855882592825";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const message = [
      "Halo VAYREN DIGITAL, saya tertarik dengan layanan digital agency Anda.",
      "",
      `Nama: ${form.get("name")}`,
      `Business Name: ${form.get("business")}`,
      `Email: ${form.get("email")}`,
      `WhatsApp: ${form.get("whatsapp")}`,
      `Business Type: ${form.get("businessType")}`,
      `Budget Range: ${form.get("budget")}`,
      `Services Needed: ${form.get("service")}`,
      "",
      `Project Description: ${form.get("description")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${wa}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSent(true);
  }

  return (
    <section className="container py-36">
      <div className="grid gap-16 md:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="eyebrow">CONTACT</div>
          <h1 className="display mt-6">LET&apos;S BUILD SOMETHING GREAT.</h1>
          <p className="mt-8 max-w-lg text-lg leading-8 muted">
            Tell us about your business and what you want to achieve.
          </p>

          <a
            className="btn btn-solid mt-9"
            target="_blank"
            rel="noreferrer"
            href={`https://wa.me/${wa}?text=${encodeURIComponent(
              "Halo, saya tertarik dengan layanan digital agency Anda. Saya ingin berkonsultasi mengenai project saya."
            )}`}
          >
            WHATSAPP US <ArrowUpRight size={14} />
          </a>

          <div className="mt-12 text-sm">
            <div className="eyebrow">WhatsApp</div>
            <div className="mt-2">+855 88 259 2825</div>
          </div>
        </div>

        <form onSubmit={submit} className="panel space-y-5 p-6 md:p-9">
          {[
            ["name", "Name", "text"],
            ["business", "Business Name", "text"],
            ["email", "Email", "email"],
            ["whatsapp", "WhatsApp", "text"],
            ["businessType", "Business Type", "text"],
            ["budget", "Budget Range", "text"],
          ].map(([name, label, type]) => (
            <label className="block" key={name}>
              <span className="eyebrow">{label}</span>
              <input
                required
                name={name}
                type={type}
                className="mt-2 w-full border border-[#333] bg-black p-4 outline-none focus:border-white"
              />
            </label>
          ))}

          <label className="block">
            <span className="eyebrow">Services Needed</span>
            <select
              name="service"
              className="mt-2 w-full border border-[#333] bg-black p-4"
              defaultValue="Website Development"
            >
              <option>Website Development</option>
              <option>AI Creative</option>
              <option>Digital Marketing</option>
              <option>E-Commerce</option>
              <option>Advertising</option>
              <option>Automation</option>
            </select>
          </label>

          <label className="block">
            <span className="eyebrow">Project Description</span>
            <textarea
              required
              name="description"
              rows={6}
              className="mt-2 w-full border border-[#333] bg-black p-4 outline-none focus:border-white"
            />
          </label>

          <button className="btn btn-solid w-full justify-center" type="submit">
            START A CONVERSATION <ArrowUpRight size={14} />
          </button>

          {sent && (
            <p className="text-sm">
              WhatsApp conversation opened. If it did not open, use the
              WhatsApp button on this page.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
