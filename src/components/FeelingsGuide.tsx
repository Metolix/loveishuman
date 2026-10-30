"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { allArticles } from "@/lib/articles";
const feelings = [
  {
    label: "I feel insecure",
    text: "When insecurity shows up, write down what happened and what you’re afraid it means. The two may not be the same.",
    slugs: ["not-good-enough", "loved-but-insecure"],
  },
  {
    label: "I cannot stop thinking about someone",
    text: "If you keep checking for signs of interest, take a break from the app or reminders. Strong feelings can be real, and the other person’s boundaries still count.",
    slugs: ["limerence", "overthinking-messages"],
  },
  {
    label: "I am scared of losing someone",
    text: "Think about what set off the worry. If it feels safe, tell the person what you need instead of testing them or waiting for them to guess.",
    slugs: ["vulnerability-in-love", "attachment-styles"],
  },
  {
    label: "I like someone who does not like me back",
    text: "Your feelings are real, and their answer deserves respect. Space and support can help you grieve without turning a no into something to overcome.",
    slugs: ["unrequited-love", "respect-rejection"],
  },
  {
    label: "I feel jealous",
    text: "Jealousy can point to fear or an unmet need. It is an emotion to understand, never permission to monitor or control someone.",
    slugs: ["understanding-jealousy"],
  },
  {
    label: "I am struggling after a breakup",
    text: "A breakup can throw off ordinary routines. Pick one thing that would help today, and let someone you trust know how you’re doing.",
    slugs: ["heartbreak-everyday-life", "rebuild-after-breakup"],
  },
  {
    label: "I feel lonely",
    text: "Romance is one way to feel close to people. A friend, family member, group or community can matter just as much.",
    slugs: ["love-or-loneliness", "love-beyond-romance"],
  },
  {
    label: "I do not understand what I am feeling",
    text: "You don’t have to name the feeling straight away. Start with what happened, what you need, and what would feel fair to the other person too.",
    slugs: ["what-is-love", "attraction-infatuation-love"],
  },
];

export default function FeelingsGuide() {
  const [chosen, setChosen] = useState<number | null>(null);

  const item = chosen === null ? null : feelings[chosen];
  return (
    <div className="feelings-layout">
      <div
        className="feelings-options"
        role="group"
        aria-label="Choose what feels closest"
      >
        {feelings.map((f, i) => (
          <button
            key={f.label}
            onClick={() => setChosen(i)}
            className={
              chosen === i ? "feeling-choice selected" : "feeling-choice"
            }
            aria-pressed={chosen === i}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            {f.label}
            <ArrowUpRight size={16} />
          </button>
        ))}
      </div>

      <section className="feeling-result" aria-live="polite">
        {item ? (
          <>
            <p className="eyebrow">A place to begin</p>
            <h2>{item.label}</h2>
            <p>{item.text}</p>
            <div className="result-links">
              {item.slugs.map((slug) => (
                <Link href={`/articles/${slug}`} key={slug}>
                  {allArticles.find((article) => article.slug === slug)
                    ?.title ?? slug}
                  <ArrowUpRight size={14} />
                </Link>
              ))}
            </div>

            <p className="guide-note">
              This guide offers general education, not a diagnosis or
              personalised assessment.
            </p>
          </>
        ) : (
          <div className="result-placeholder">
            <span className="orbit-art" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>

            <p>
              Choose a feeling or situation.
              <br />
              We’ll point you to a few related articles.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
