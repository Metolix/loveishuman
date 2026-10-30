import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Relationships",
  description:
    "Explore communication, boundaries, trust, repair and signs of controlling behaviour.",
};

const topics = [
  [
    "Communication",
    "Speak honestly, listen with curiosity and ask for clarity when something is hard to read.",
    "conflict-and-repair",
  ],
  [
    "Trust and boundaries",
    "Care can be close while leaving space for choice, privacy and separate friendships.",
    "healthy-boundaries",
  ],
  [
    "Emotional intimacy",
    "Closeness often grows through small acts of openness and responsiveness over time.",
    "vulnerability-in-love",
  ],
  [
    "Disagreements and repair",
    "Conflict happens. Look for respect, accountability and effort to change harmful patterns.",
    "conflict-and-repair",
  ],
  [
    "Respect and compatibility",
    "Affection matters, and so do the ways your values and everyday needs fit together.",
    "attraction-infatuation-love",
  ],
  [
    "Independence together",
    "A relationship can matter deeply without becoming the only source of support or identity.",
    "interdependence",
  ],
  [
    "When behaviour feels controlling",
    "Repeated pressure, surveillance, isolation or threats deserve attention and support.",
    "controlling-behaviour",
  ],
];

export default function Relationships() {
  return (
    <div className="wrap page-wrap">
      <PageIntro
        eyebrow="RELATIONSHIPS"
        title="Being close without losing yourself."
        description="No relationship gets everything right. Look for respect, honest conversations, clear boundaries and the freedom for each person to make choices."
      />

      <div className="relationship-list">
        {topics.map(([title, body, slug], i) => (
          <Link
            href={`/articles/${slug}`}
            className="relationship-item"
            key={title}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>

            <ArrowUpRight />
          </Link>
        ))}
      </div>

      <div className="callout">
        <p className="eyebrow">A NOTE ON SAFETY</p>
        <h2>Fear and control are not ordinary conflict.</h2>
        <p>
          If you feel unsafe or someone is limiting your choices, support is
          available. You do not have to find the perfect label before reaching
          out.
        </p>

        <Link className="text-link" href="/get-help">
          Find support options <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}
