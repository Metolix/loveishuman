import type { Metadata } from "next";
import { PageIntro } from "@/components/SiteShell";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sources and editorial approach",
  description:
    "Research, health guidance and standards behind the Love Is Human guides.",
};

const sources = [
  [
    "APA Dictionary of Psychology: Love",
    "American Psychological Association",
    "A concise reference entry describing love as complex and expressed in multiple forms.",
    "https://dictionary.apa.org/love",
  ],
  [
    "How close relationships help us thrive",
    "APA Monitor on Psychology",
    "A research-informed overview of close relationships, attachment and wellbeing.",
    "https://www.apa.org/monitor/2019/12/relationships-thrive.html",
  ],
  [
    "Maintaining healthy relationships and mental wellbeing",
    "NHS Every Mind Matters",
    "Practical guidance on communication, boundaries, conflict and wellbeing in relationships.",
    "https://www.nhs.uk/every-mind-matters/lifes-challenges/maintaining-healthy-relationships-and-mental-wellbeing/",
  ],
  [
    "How consent works",
    "love is respect",
    "Educational resource on communicating and respecting consent.",
    "https://www.loveisrespect.org/resources/how-consent-works/",
  ],
  [
    "Healthy Relationships",
    "Planned Parenthood",
    "Guidance on communication, space, respect and consent in relationships.",
    "https://www.plannedparenthood.org/learn/relationships/healthy-relationships",
  ],
  [
    "Web Content Accessibility Guidelines (WCAG) 2.2",
    "W3C",
    "The accessibility standard used as a design target for contrast, keyboard access, focus and motion.",
    "https://www.w3.org/TR/WCAG22/",
  ],
];

export default function Sources() {
  return (
    <div className="wrap page-wrap narrow-page">
      <PageIntro
        eyebrow="THE READING LIST"
        title="Where these guides get their information."
        description="We use research and established educational resources. A source can inform an article without backing every sentence in it."
      />

      <p className="source-review">Sources reviewed 30 October 2026.</p>
      <div className="source-list">
        {sources.map(([title, publisher, note, url]) => (
          <article className="source-item" key={url}>
            <p className="eyebrow">{publisher}</p>
            <h2>
              <a href={url} target="_blank" rel="noreferrer">
                {title}
                <ArrowUpRight size={15} />
              </a>
            </h2>

            <p>{note}</p>
          </article>
        ))}
      </div>

      <div className="prose-page">
        <h2>Editorial principles</h2>
        <p>
          We favour primary research, established health organisations and
          official standards. A popular theory is not automatically settled
          evidence, and a psychological label cannot tell you how someone
          behaves in a specific relationship.
        </p>
      </div>
    </div>
  );
}
