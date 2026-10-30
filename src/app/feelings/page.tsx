import type { Metadata } from "next";
import { PageIntro } from "@/components/SiteShell";
import FeelingsGuide from "@/components/FeelingsGuide";

export const metadata: Metadata = {
  title: "Feelings guide",
  description:
    "Choose what feels closest and find related reading about love and relationships.",
};

export default function Feelings() {
  return (
    <div className="wrap page-wrap">
      <PageIntro
        eyebrow="START WITH WHAT YOU’RE FEELING"
        title="What’s on your mind?"
        description="Choose what feels closest. This guide can point you toward useful reading — it cannot diagnose you or tell you what to do."
      />

      <FeelingsGuide />
      <p className="library-disclaimer">
        If you’re in immediate danger, contact emergency services where you are.{" "}
        <a href="/get-help">Find support options</a>
      </p>
    </div>
  );
}
