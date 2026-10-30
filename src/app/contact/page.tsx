import type { Metadata } from "next";
import { PageIntro } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to send feedback or report a problem with this site.",
};

export default function Contact() {
  return (
    <div className="wrap page-wrap narrow-page">
      <PageIntro
        eyebrow="CONTACT"
        title="A place to find support."
        description="Love Is Human is here to offer reading and reflection."
      />

      <div className="prose-page">
        <h2>Looking for support?</h2>
        <p>
          This website does not receive messages or personal stories. If you’re
          looking for support with something difficult, visit our{" "}
          <a href="/get-help">support directory</a> to find options near you. If
          someone is in immediate danger, contact local emergency services.
        </p>
      </div>
    </div>
  );
}
