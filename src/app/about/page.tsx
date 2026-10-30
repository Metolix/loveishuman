import type { Metadata } from "next";
import { PageIntro } from "@/components/SiteShell";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Love Is Human",
  description: "Our mission, scope and editorial principles.",
};

export default function About() {
  return (
    <div className="wrap page-wrap narrow-page">
      <PageIntro
        eyebrow="ABOUT LOVE IS HUMAN"
        title="A place to make sense of love and relationships."
        description="Love Is Human is an independent guide to relationships and the feelings around them: attraction, closeness, doubt, heartbreak and everything in between."
      />

      <div className="prose-page">
        <h2>What you’ll find here</h2>
        <p>
          You’ll find guides to attraction, attachment, insecurity, boundaries,
          rejection, communication and the many ways people care for one
          another. We explain the ideas without treating an article as a
          diagnosis or a rulebook for every relationship.
        </p>

        <h2>How we approach the subject</h2>
        <p>
          We draw on research and established educational organisations. When we
          offer an interpretation or a practical suggestion, we try to say so.
          Psychology can give us useful ways to think; it cannot sum up a person
          from a few paragraphs.
        </p>

        <p>
          We won’t frame abuse as romance or rejection as a challenge to
          overcome. And a fulfilling life does not depend on having a romantic
          partner. Friendship, family, community and care for yourself matter
          too.
        </p>

        <h2>What this is not</h2>
        <p>
          This site offers general information. It is not therapy, crisis
          support or a personal clinical assessment. If you need help with your
          own situation, a qualified professional can respond to the details an
          article cannot know.
        </p>

        <Link className="text-link" href="/sources">
          Read our sources and editorial notes <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}
