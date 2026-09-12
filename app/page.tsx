import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website & Digital Marketing | VAYREN DIGITAL",
  description:
    "VAYREN DIGITAL menyediakan jasa pembuatan website company profile, landing page, e-commerce, digital marketing, dan solusi AI untuk bisnis.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen overflow-hidden grid-noise pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,#1c1c1c,transparent_28%)]" />

        <div className="container relative flex min-h-[calc(100vh-7rem)] flex-col justify-center pb-20">
          <div className="eyebrow reveal">
            JASA PEMBUATAN WEBSITE & DIGITAL AGENCY
          </div>

          <h1 className="display mt-7 max-w-6xl reveal delay1">
            JASA PEMBUATAN
            <br />
            <span className="text-neutral-500">WEBSITE</span> UNTUK BISNIS.
          </h1>

          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end reveal delay2">
            <p className="max-w-xl text-base leading-7 muted">
              VAYREN DIGITAL menyediakan jasa pembuatan website company
              profile, landing page, e-commerce, digital marketing, dan solusi
              AI untuk membantu bisnis membangun kehadiran digital, menjangkau
              pelanggan, dan bertumbuh.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link className="btn btn-solid" href="/contact">
                KONSULTASI PROJECT <ArrowUpRight size={14} />
              </Link>

              <Link className="btn" href="/portfolio">
                LIHAT PORTFOLIO <ArrowDown size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#242424] py-5">
        <div className="marquee">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            [
              "JASA PEMBUATAN WEBSITE",
              "WEBSITE COMPANY PROFILE",
              "LANDING PAGE",
              "E-COMMERCE",
              "DIGITAL MARKETING",
              "SOLUSI AI BISNIS",
              "AUTOMATION",
            ].map((x) => (
              <span
                key={`${i}-${x}`}
                className="mx-7 whitespace-nowrap eyebrow"
              >
                {x} /
              </span>
            ))
          )}
        </div>
      </section>

      <section className="container py-28 md:py-40">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="eyebrow">01 — TENTANG VAYREN DIGITAL</div>
          </div>

          <div>
            <h2 className="h2">
              KAMI BUKAN HANYA MEMBUAT WEBSITE. KAMI MEMBANGUN SISTEM DIGITAL
              UNTUK BISNIS.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 muted">
              VAYREN DIGITAL adalah digital agency yang menggabungkan desain,
              teknologi, AI, dan digital marketing. Kami membantu bisnis,
              UMKM, perusahaan, dan personal brand membangun website modern,
              pengalaman digital, serta strategi pertumbuhan online yang lebih
              efektif.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                "Branding",
                "Jasa Pembuatan Website",
                "Content",
                "Digital Marketing",
                "Advertising",
                "Conversion",
                "AI Automation",
                "E-Commerce",
              ].map((x) => (
                <div
                  className="border border-[#242424] p-4 text-sm"
                  key={x}
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-28 md:pb-40">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow">02 — PORTFOLIO WEBSITE</div>

            <h2 className="h2 mt-5">
              PROJECT DIGITAL
              <br />
              YANG MEMBERI HASIL.
            </h2>
          </div>

          <Link className="btn hidden md:inline-flex" href="/portfolio">
            LIHAT SEMUA PORTFOLIO <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section className="border-y border-[#242424] py-28">
        <div className="container">
          <div className="eyebrow">03 — LAYANAN DIGITAL</div>

          <h2 className="h2 mt-5 max-w-5xl">
            DARI IDE PERTAMA HINGGA WEBSITE, MARKETING, DAN SISTEM DIGITAL
            YANG MEMBANTU BISNIS BERTUMBUH.
          </h2>

          <div className="mt-14 grid gap-px bg-[#242424] md:grid-cols-3">
            {[
              {
                title: "JASA PEMBUATAN WEBSITE",
                description:
                  "Website company profile, landing page, portfolio, dan website bisnis yang modern serta responsif.",
              },
              {
                title: "SOLUSI AI UNTUK BISNIS",
                description:
                  "Creative AI, workflow AI, dan solusi digital untuk meningkatkan efisiensi bisnis.",
              },
              {
                title: "JASA DIGITAL MARKETING",
                description:
                  "Strategi pemasaran digital untuk membantu brand mendapatkan visibilitas dan leads.",
              },
              {
                title: "DIGITAL ADVERTISING",
                description:
                  "Kampanye digital advertising yang dirancang sesuai target bisnis dan audiens Anda.",
              },
              {
                title: "WEBSITE E-COMMERCE",
                description:
                  "Pengembangan e-commerce dan pengalaman belanja online yang mudah digunakan pelanggan.",
              },
              {
                title: "AUTOMATION",
                description:
                  "Automasi proses digital untuk membuat kerja bisnis lebih cepat, rapi, dan terukur.",
              },
            ].map((service, i) => (
              <Link
                href="/services"
                key={service.title}
                className="bg-black p-7 hover:bg-[#101010]"
              >
                <span className="eyebrow">0{i + 1}</span>

                <h3 className="mt-10 text-xl">{service.title}</h3>

                <p className="mt-3 text-sm muted">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-28 md:py-40">
        <div className="panel p-8 md:p-16">
          <div className="eyebrow">04 — KONSULTASI WEBSITE</div>

          <h2 className="h2 mt-6 max-w-5xl">
            SIAP MEMBUAT WEBSITE DAN MEMBANGUN PERTUMBUHAN DIGITAL BISNIS ANDA?
          </h2>

          <p className="mt-7 max-w-xl muted">
            Ceritakan bisnis dan tujuan Anda. VAYREN DIGITAL siap membantu
            merancang website, digital marketing, atau solusi AI yang sesuai
            kebutuhan bisnis Anda.
          </p>

          <Link className="btn btn-solid mt-9" href="/contact">
            MULAI KONSULTASI <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
