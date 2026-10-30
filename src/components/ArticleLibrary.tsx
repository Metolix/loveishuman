"use client";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import ArticleCard from "./ArticleCard";
import { allArticles, categories } from "@/lib/articles";

export default function ArticleLibrary() {
  const [category, setCategory] = useState("All topics");
  const visible = useMemo(
    () =>
      allArticles.filter(
        (a) =>
          (category === "All topics" || a.category === category) &&
          `${a.title} ${a.description} ${a.category}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, category],
  );
  return (
    <>
      <div className="library-controls">
        <label className="search-box">
          <Search size={18} />
          <span className="sr-only">Search articles</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by topic or question…"
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Clear search">
              <X size={16} />
            </button>
          )}
        </label>

        <label className="filter-select">
          <span className="sr-only">Filter articles by topic</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All topics</option>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>

      <p className="result-count" aria-live="polite">
        {visible.length} {visible.length === 1 ? "article" : "articles"}
        {query ? ` matching “${query}”` : ""}
      </p>
      {visible.length ? (
        <div className="article-grid">
          {visible.map((a, i) => (
            <ArticleCard key={a.slug} article={a} index={i} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span className="small-ornament">○</span>
          <h2>No articles found</h2>
          <p>Try a broader search or choose another topic.</p>
          <button
            className="text-button"
            onClick={() => {
              setQuery("");
              setCategory("All topics");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
