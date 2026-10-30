import type { Metadata } from "next";
import { PageIntro } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using Love Is Human and its educational guides.",
};

export default function Terms() {
  return (
    <div className="wrap page-wrap narrow-page">
      <PageIntro
        eyebrow="TERMS OF USE"
        title="A few things to know."
        description="By using Love Is Human, you agree to these straightforward terms. Last reviewed 30 October 2026."
      />

      <div className="prose-page">
        <h2>For information and reflection</h2>
        <p>
          Love Is Human offers general educational information about love,
          relationships and wellbeing. It is not medical or mental health care,
          therapy, crisis support or a personal assessment. Reading a guide does
          not create a professional relationship. For advice about your
          circumstances, speak with a qualified professional. If you are in
          immediate danger, contact local emergency services.
        </p>

        <h2>Use the site with care</h2>
        <p>
          You may read and share links to the guides for personal,
          non-commercial use. Please do not present the material as your own,
          use it to harass or harm anyone, or interfere with the site or other
          people’s access to it.
        </p>

        <h2>Sources and other services</h2>
        <p>
          We aim to make the guides useful and considered, but they are general
          information and may not fit every situation. Sources and linked
          services belong to their respective publishers, whose content,
          availability and terms may change.
        </p>

        <h2>Changes</h2>
        <p>
          These terms may be updated as the site develops. The review date above
          indicates the latest revision. Continued use after an update means you
          accept the revised terms.
        </p>
      </div>
    </div>
  );
}
