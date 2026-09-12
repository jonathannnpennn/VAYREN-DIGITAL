import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Package = {
  name: string;
  price: string;
  description: string;
  features: string[];
};

type Retainer = {
  name: string;
  price: string;
  features: string[];
};

const packages: Package[] = [
  {
    name: "DIGITAL STARTER",
    price: "Rp1.500.000",
    description: "Untuk bisnis yang ingin mulai membangun digital presence.",
    features: [
      "Landing page",
      "Business profile",
      "Product/service section",
      "Gallery",
      "WhatsApp CTA",
      "5 social media designs",
      "2 short AI videos",
      "Basic Google Business setup",
      "7 days support",
    ],
  },
  {
    name: "BUSINESS GROWTH",
    price: "Rp3.000.000",
    description: "Website dan creative foundation untuk bisnis yang ingin tumbuh.",
    features: [
      "Professional website",
      "Product catalog",
      "WhatsApp integration",
      "10 social media designs",
      "5 short videos",
      "Copywriting",
      "Basic Meta Ads setup",
      "Basic TikTok Ads setup",
      "Analytics setup",
      "SEO basic",
      "14 days support",
    ],
  },
  {
    name: "DIGITAL GROWTH SYSTEM",
    price: "Rp5.000.000 – Rp8.000.000+",
    description: "Sistem digital yang lebih lengkap dan dapat dikembangkan.",
    features: [
      "Professional website",
      "E-commerce/catalog",
      "Order system",
      "Admin dashboard",
      "Database",
      "AI product photography",
      "15–20 creative assets",
      "8–10 short videos",
      "Meta Ads setup",
      "TikTok Ads setup",
      "Conversion funnel",
      "WhatsApp flow",
      "Lead database",
      "30 days support",
    ],
  },
];

const retainers: Retainer[] = [
  {
    name: "CONTENT CARE",
    price: "Rp1.000.000/month",
    features: [
      "12 designs",
      "4 short videos",
      "Caption",
      "Content calendar",
      "Posting support",
    ],
  },
  {
    name: "GROWTH CARE",
    price: "Rp2.000.000/month",
    features: [
      "16 designs",
      "8 videos",
      "Social media management",
      "Content planning",
      "Basic ads management",
      "Monthly report",
    ],
  },
  {
    name: "FULL GROWTH",
    price: "Rp3.500.000–Rp5.000.000/month",
    features: [
      "20+ content",
      "8–12 videos",
      "Social media management",
      "Ads management",
      "Creative testing",
      "Landing page optimization",
      "WhatsApp optimization",
      "Monthly reporting",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="container py-36">
      <div className="eyebrow">PRICING</div>
      <h1 className="display mt-6">
        CLEAR.
        <br />
        <span className="text-neutral-500">PRACTICAL.</span>
      </h1>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {packages.map((pkg, index) => (
          <div className="panel card p-7" key={pkg.name}>
            <div className="eyebrow">
              {index === 1 ? "POPULAR" : `PACKAGE 0${index + 1}`}
            </div>

            <h2 className="mt-8 text-xl">{pkg.name}</h2>
            <div className="mt-3 text-2xl font-semibold">{pkg.price}</div>
            <p className="mt-4 text-sm leading-6 muted">{pkg.description}</p>

            <ul className="mt-7 space-y-3 text-sm">
              {pkg.features.map((feature) => (
                <li key={feature}>+ {feature}</li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="btn mt-8 w-full justify-center"
            >
              {index === 1 ? "CHOOSE GROWTH" : "GET STARTED"}{" "}
              <ArrowUpRight size={14} />
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs muted">
        Advertising budget is not included and is paid separately by the client.
      </p>

      <h2 className="h2 mt-36">
        ONGOING
        <br />
        GROWTH.
      </h2>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {retainers.map((plan) => (
          <div className="panel p-7" key={plan.name}>
            <div className="eyebrow">{plan.name}</div>
            <div className="mt-5 text-2xl">{plan.price}</div>

            <ul className="mt-7 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature}>+ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs muted">Ad spend is separate.</p>
    </section>
  );
}
