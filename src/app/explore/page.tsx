import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/SiteShell";
import { allArticles, categories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Explore love and relationships",
  description:
    "Browse guides to attraction, closeness, conflict, heartbreak and boundaries.",
};

const desc: Record<string, string> = {
  "Understanding love":
    "What love can mean, how attraction differs from closeness, and why no one story fits everyone.",
  "Feelings & insecurity":
    "Make sense of jealousy, uncertainty, vulnerability and the questions that keep circling.",
  "Unrequited love":
    "Care for your own feelings while respecting another person's boundaries.",
  "Attachment & closeness":
    "Explore patterns of closeness without reducing people to labels.",
  "Healthy relationships":
    "Communication, boundaries, trust and the work of repair.",
  "Difficult relationships":
    "Recognise patterns that restrict choice and find a safer next step.",
  "Heartbreak & healing":
    "Make room for grief, change and rebuilding after a relationship ends.",
  "Friendship & belonging":
    "Love beyond romance: the relationships and communities that help us belong.",
};

export default function Explore() {
  return (
    <div className="wrap page-wrap">
      <PageIntro
        eyebrow="EXPLORE"
        title="Every side of love."
        description="Pick a subject that fits what’s on your mind. You can start anywhere and follow the questions that matter to you."
      />

      <div className="explore-grid">
        {categories.map((c, i) => (
          <section
            className={`explore-category card-tone-${i % 4}`}
            key={c}
            id={i === 1 ? "the-good" : undefined}
          >
            <span className="tile-index">
              {String(i + 1).padStart(2, "0")} / A SUBJECT
            </span>

            <h2>{c}</h2>
            <p>{desc[c]}</p>
            <div className="explore-links">
              {allArticles
                .filter((a) => a.category === c)
                .slice(0, 3)
                .map((a) => (
                  <Link key={a.slug} href={`/articles/${a.slug}`}>
                    {a.title}
                    <ArrowUpRight size={15} />
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>

      <div className="center-cta">
        <p>Looking for something specific?</p>
        <Link className="button button-primary" href="/articles">
          Search the article library <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
