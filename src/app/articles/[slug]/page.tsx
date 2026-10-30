import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { allArticles, getArticle } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/articles/${a.slug}` },
    openGraph: { title: a.title, description: a.description, type: "article" },
  };
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const a = getArticle(slug);
  if (!a) notFound();
  const related = allArticles
    .filter((x) => x.category === a.category && x.slug !== a.slug)
    .slice(0, 2);
  return (
    <article className="article-page">
      <div className="wrap">
        <Link className="back-link" href="/articles">
          <ArrowLeft size={15} /> All articles
        </Link>

        <header className="article-header">
          <p className="eyebrow">
            {a.category} <span>·</span> {a.read} MIN READ
          </p>

          <h1>{a.title}</h1>
          <p className="article-deck">{a.description}</p>
          <p className="review-meta">
            An educational guide · Reviewed 30 October 2026
          </p>
        </header>

        <div className="article-body">
          <aside className="article-aside">
            <p className="eyebrow">IN THIS ARTICLE</p>
            <nav aria-label="In this article">
              {a.sections.map((s, i) => (
                <a href={`#section-${i}`} key={s.heading}>
                  {s.heading}
                </a>
              ))}
            </nav>

            <div className="aside-note">
              A note on care
              <p>
                This is general education, not a diagnosis or personalised
                advice.
              </p>
            </div>
          </aside>

          <div className="article-content">
            <p className="article-lead">{a.intro}</p>
            {a.sections.map((s, i) => (
              <section key={s.heading} id={`section-${i}`}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </section>
            ))}
            <section className="sources-inline">
              <h2>Sources for this guide</h2>
              {a.sources.map((s) => (
                <a key={s.url} href={s.url} target="_blank" rel="noreferrer">
                  {s.title}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </section>
          </div>
        </div>
        {related.length > 0 && (
          <div className="related-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">KEEP EXPLORING</p>
                <h2>Related reading</h2>
              </div>

              <Link className="text-link" href="/articles">
                All articles <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="article-grid">
              {related.map((r, i) => (
                <ArticleCard article={r} index={i} key={r.slug} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
