import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Heart,
  MoveUpRight,
} from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import { BrandMark } from "@/components/SiteShell";
import { allArticles } from "@/lib/articles";

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow"></p>
          <h1>
            Love is one of the most <em>human</em>
          </h1>

          <p className="hero-lede">
            Love can be joyful, awkward, steady, painful, or several things at
            once.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/explore">
              Explore the subject <ArrowRight size={16} />
            </Link>

            <Link className="quiet-link" href="/about">
              Why this exists <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div
          className="hero-art"
          aria-label="Abstract illustration of two forms meeting"
        >
          <div className="art-sun" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-form form-left" />
          <div className="art-form form-right" />
          <span className="art-caption">
            EVERY SIDE OF LOVE
            <br />
            EVERY SIDE OF BEING HUMAN
          </span>
        </div>

        <div className="hero-bottom">
          <span>Start with what brought you here</span>
          <ArrowDownRight size={17} />
        </div>
      </section>

      <section className="intro-band">
        <div className="wrap intro-band-inner">
          <p className="eyebrow">LOVE, IN ALL ITS FORMS</p>
          <h2>
            There is more to love than romance.
            <br />
            <em>Understanding can be.</em>
          </h2>

          <p className="body-copy">
            We write about closeness, conflict, longing and the ordinary work of
            getting along. No single story explains how love should look.
          </p>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A PLACE TO START</p>
            <h2>Every side of love.</h2>
          </div>

          <Link className="text-link" href="/explore">
            Explore all themes <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="theme-grid">
          <Link href="/explore#the-good" className="theme-tile theme-good">
            <span className="tile-index">01 / THE GOOD</span>
            <div className="tile-icon">
              <Heart />
            </div>

            <h3>The good</h3>
            <p>Connection, trust, affection and belonging.</p>
            <span className="tile-link">
              Explore <ArrowUpRight size={15} />
            </span>
          </Link>

          <Link href="/feelings" className="theme-tile theme-complex">
            <span className="tile-index">02 / THE COMPLICATED</span>
            <div className="tile-rings" aria-hidden="true" />
            <h3>The complicated</h3>
            <p>Insecurity, uncertainty and feelings that do not fit neatly.</p>
            <span className="tile-link">
              Find a starting point <ArrowUpRight size={15} />
            </span>
          </Link>

          <Link href="/get-help" className="theme-tile theme-hard">
            <span className="tile-index">03 / THE DIFFICULT</span>
            <div className="tile-icon">
              <BookOpen />
            </div>

            <h3>The difficult</h3>
            <p>Rejection, heartbreak and relationships that hurt.</p>
            <span className="tile-link">
              Find understanding <ArrowUpRight size={15} />
            </span>
          </Link>
        </div>
      </section>

      <section className="section section-wash">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A QUESTION, A FEELING, A PLACE TO BEGIN</p>
              <h2>What are you trying to understand?</h2>
            </div>

            <Link className="text-link" href="/feelings">
              Open the feelings guide <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="question-list">
            <Link href="/articles/overthinking-messages">
              <span>01</span>Why do I overthink messages and silence?
              <ArrowUpRight />
            </Link>

            <Link href="/articles/unrequited-love">
              <span>02</span>What do I do with feelings that aren’t returned?
              <ArrowUpRight />
            </Link>

            <Link href="/articles/healthy-boundaries">
              <span>03</span>Can boundaries and love exist together?
              <ArrowUpRight />
            </Link>

            <Link href="/articles/love-or-loneliness">
              <span>04</span>Am I in love, lonely, or a little of both?
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FROM THE READING ROOM</p>
            <h2>Read a little further.</h2>
          </div>

          <Link className="text-link" href="/articles">
            Browse all articles <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="article-grid featured-grid">
          {[allArticles[0], allArticles[4], allArticles[15]].map((a, i) => (
            <ArticleCard key={a.slug} article={a} index={i} />
          ))}
        </div>
      </section>

      <section className="evidence-section">
        <div className="wrap evidence-inner">
          <div className="evidence-symbol" aria-hidden="true">
            <BrandMark />
          </div>

          <div>
            <p className="eyebrow">RESEARCH, WITH CARE</p>
            <h2>
              Curious about love.
              <br />
              <em>Careful with the claims.</em>
            </h2>

            <p>
              We use research and established educational resources, and say
              when the evidence has limits. These guides can help you think;
              they cannot diagnose you or someone else.
            </p>

            <Link className="text-link" href="/sources">
              See our sources and approach <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="support-strip wrap">
        <div>
          <span className="eyebrow">WHEN YOU NEED A LITTLE MORE</span>
          <h2>Some things are easier with support.</h2>
          <p>
            Find guidance for reaching out to someone you trust or a qualified
            professional.
          </p>
        </div>

        <Link className="button button-outline" href="/get-help">
          Find support <MoveUpRight size={16} />
        </Link>
      </section>
    </>
  );
}
