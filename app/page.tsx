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
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden grid-noise pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(55,55,55,0.65),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(30,30,30,0.5),transparent_35%)]" />

        <div className="container relative flex min-h-[calc(100vh-7rem)] flex-col justify-center pb-20 pt-10 md:pb-24">
          <div className="eyebrow reveal">
            JASA PEMBUATAN WEBSITE & DIGITAL AGENCY
          </div>

          <h1 className="display mt-7 max-w-6xl reveal delay1">
            JASA PEMBUATAN
            <br />
            <span className="text-neutral-500">WEBSITE</span> UNTUK BISNIS.
          </h1>

          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/10 pt-8 md:mt-12 md:flex-row md:items-end md:gap-12">
            <p className="max-w-xl text-base leading-7 muted">
              VAYREN DIGITAL menyediakan jasa pembuatan website company
              profile, landing page, e-commerce, digital marketing, dan solusi
              AI untuk membantu bisnis membangun kehadiran digital, menjangkau
              pelanggan, dan bertumbuh.
            </p>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                className="btn btn-solid transition duration-300 hover:-translate-y-0.5"
                href="/contact"
              >
                KONSULTASI PROJECT <ArrowUpRight size={14} />
              </Link>

              <Link
                className="btn transition duration-300 hover:-translate-y-0.5"
                href="/portfolio"
              >
                LIHAT PORTFOLIO <ArrowDown size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-y border-[#242424] bg-[#080808] py-5">
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
                className="mx-7 whitespace-nowrap eyebrow text-neutral-400"
              >
                {x} /
              </span>
            ))
          )}
        </div>
      </section>

      {/* About */}
      <section className="container py-28 md:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="sticky top-28">
              <div className="eyebrow">01 — TENTANG VAYREN DIGITAL</div>
            </div>
          </div>

          <div>
            <h2 className="h2 max-w-4xl">
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

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                "Branding",
                "Jasa Pembuatan Website",
                "Content",
                "Digital Marketing",
                "Advertising",
                "Conversion",
                "AI Automation",
                "E-Commerce",
              ].map((x, i) => (
                <div
                  className="group border border-[#242424] bg-[#0a0a0a] p-4 text-sm transition duration-300 hover:-translate-y-1 hover:border-neutral-500 hover:bg-[#121212]"
                  key={x}
                >
                  <span className="mb-6 block text-[10px] tracking-[0.18em] text-neutral-600">
                    0{i + 1}
                  </span>
                  <span className="block leading-5">{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="container pb-28 md:pb-40">
        <div className="flex flex-col justify-between gap-8 border-b border-[#242424] pb-10 sm:flex-row sm:items-end">
          <div>
            <div className="eyebrow">02 — PORTFOLIO WEBSITE</div>

            <h2 className="h2 mt-5">
              PROJECT DIGITAL
              <br />
              YANG MEMBERI HASIL.
            </h2>
          </div>

          <Link
            className="btn hidden transition duration-300 hover:-translate-y-0.5 md:inline-flex"
            href="/portfolio"
          >
            LIHAT SEMUA PORTFOLIO <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>

        <Link
          className="btn mt-8 w-full justify-center transition duration-300 hover:-translate-y-0.5 md:hidden"
          href="/portfolio"
        >
          LIHAT SEMUA PORTFOLIO <ArrowUpRight size={14} />
        </Link>
      </section>

      {/* Services */}
      <section className="border-y border-[#242424] bg-[#060606] py-28 md:py-36">
        <div className="container">
          <div className="eyebrow">03 — LAYANAN DIGITAL</div>

          <h2 className="h2 mt-5 max-w-5xl">
            DARI IDE PERTAMA HINGGA WEBSITE, MARKETING, DAN SISTEM DIGITAL
            YANG MEMBANTU BISNIS BERTUMBUH.
          </h2>

          <div className="mt-14 grid overflow-hidden border border-[#242424] bg-[#242424] sm:grid-cols-2 lg:grid-cols-3">
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
                className="group relative min-h-[280px] bg-black p-7 transition duration-300 hover:z-10 hover:bg-[#111111] sm:p-8"
              >
                <span className="eyebrow text-neutral-600">0{i + 1}</span>

                <ArrowUpRight
                  size={18}
                  className="absolute right-7 top-7 text-neutral-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />

                <h3 className="mt-16 max-w-[16rem] text-xl leading-tight tracking-tight sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-6 muted">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-28 md:py-40">
        <div className="panel relative overflow-hidden p-8 md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/[0.05] blur-3xl" />

          <div className="relative">
            <div className="eyebrow">04 — KONSULTASI WEBSITE</div>

            <h2 className="h2 mt-6 max-w-5xl">
              SIAP MEMBUAT WEBSITE DAN MEMBANGUN PERTUMBUHAN DIGITAL BISNIS
              ANDA?
            </h2>

            <p className="mt-7 max-w-xl leading-7 muted">
              Ceritakan bisnis dan tujuan Anda. VAYREN DIGITAL siap membantu
              merancang website, digital marketing, atau solusi AI yang sesuai
              kebutuhan bisnis Anda.
            </p>

            <Link
              className="btn btn-solid mt-9 transition duration-300 hover:-translate-y-0.5"
              href="/contact"
            >
              MULAI KONSULTASI <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
