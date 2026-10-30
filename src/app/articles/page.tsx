import type { Metadata } from "next";
import { PageIntro } from "@/components/SiteShell";
import ArticleLibrary from "@/components/ArticleLibrary";

export const metadata: Metadata = {
  title: "Articles",
  description: "Browse practical guides to love, emotions and relationships.",
};

export default function Articles() {
  return (
    <div className="wrap page-wrap">
      <PageIntro
        eyebrow="THE ARTICLE LIBRARY"
        title="Guides for the questions on your mind."
        description="Look up a topic, follow a question or read an article that catches your eye. Start wherever you like."
      />

      <ArticleLibrary />
      <p className="library-disclaimer">
        Educational reading, not a substitute for personalised professional
        care. <a href="/about">How we work</a>
      </p>
    </div>
  );
}
