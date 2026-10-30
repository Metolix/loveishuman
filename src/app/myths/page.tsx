import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Love myths",
  description: "Common claims about love, and what they leave out.",
};

const myths = [
  [
    "Jealousy proves love.",
    "Jealousy is an emotion, not evidence of devotion. It may point to fear or uncertainty, but it never excuses monitoring, pressure or control.",
    "Understanding jealousy without romanticising it",
    "understanding-jealousy",
  ],
  [
    "If someone loves you, they will always know what you need.",
    "People cannot read minds. Honest, respectful communication helps others understand what matters to you.",
    "Healthy relationships need communication and space",
    "conflict-and-repair",
  ],
  [
    "If you love someone enough, they will eventually love you back.",
    "Feelings cannot make another person reciprocate. Their answer deserves respect, and your feelings deserve care elsewhere.",
    "When you love someone who does not love you back",
    "unrequited-love",
  ],
  [
    "Real love should never be difficult.",
    "Every relationship has ordinary disagreements. The presence of difficulty is not the whole story; safety, respect and the ability to repair matter.",
    "What healthy conflict and repair look like",
    "conflict-and-repair",
  ],
  [
    "You must sacrifice everything for the person you love.",
    "Care can involve compromise, but it should not require giving up your safety, autonomy or all the relationships and interests that sustain you.",
    "Healthy boundaries are not a lack of love",
    "healthy-boundaries",
  ],
  [
    "If a relationship ends, the love was never real.",
    "An ending does not erase what was meaningful. It can also be true that a relationship was not right to continue.",
    "Can you miss someone and know the relationship was wrong for you?",
    "miss-and-move-on",
  ],
  [
    "You cannot love someone too much.",
    "Strong feelings are not automatically harmful. What matters is how people act, whether care is mutual and whether each person keeps room to choose.",
    "Can you love someone too much?",
    "can-you-love-too-much",
  ],
];

export default function Myths() {
  return (
    <div className="wrap page-wrap">
      <PageIntro
        eyebrow="COMMON CLAIMS, RECONSIDERED"
        title="Some familiar ideas about love deserve a second look."
        description="Simple rules can sound reassuring, but relationships depend on the people in them. These claims leave out a lot."
      />

      <div className="myth-list">
        {myths.map(([claim, reading, article, slug], i) => (
          <article className="myth-row" key={claim}>
            <span className="myth-index">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="eyebrow">A COMMON BELIEF</p>
              <h2>“{claim}”</h2>
            </div>

            <div>
              <p>{reading}</p>
              <Link href={`/articles/${slug}`}>
                {article}
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
