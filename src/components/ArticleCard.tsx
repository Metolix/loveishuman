import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/lib/articles";

export default function ArticleCard({
  article,
  index = 0,
}: {
  article: Article;
  index?: number;
}) {
  return (
    <Link
      className={`article-card card-tone-${index % 4}`}
      href={`/articles/${article.slug}`}
    >
      <div className="card-meta">
        <span>{article.category}</span>
        <span>{article.read} MIN READ</span>
      </div>

      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <span className="card-arrow" aria-label="Read article">
        <ArrowUpRight size={17} />
      </span>
    </Link>
  );
}
