import type { Metadata } from "next";
import { PageIntro } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "A clear explanation of what Love Is Human stores and how information is handled when you visit.",
};

export default function Privacy() {
  return (
    <div className="wrap page-wrap narrow-page">
      <PageIntro
        eyebrow="YOUR PRIVACY"
        title="Your visit is yours."
        description="Love Is Human is a reading resource. We don’t ask you to create an account or share personal details to use it. Last reviewed 30 October 2026."
      />

      <div className="prose-page">
        <h2>What is stored on your device</h2>
        <p>
          The site saves your light or dark theme preference in your browser so
          it can remember your choice next time. The feelings guide works in
          your browser; what you enter there is not sent to us. You can clear
          this saved preference in your browser settings.
        </p>

        <h2>Information involved in visiting the site</h2>
        <p>
          The site is hosted on Cloudflare Pages. When a page is requested,
          Cloudflare may process technical information such as your IP address,
          browser details and request time to deliver, secure and troubleshoot
          the service. Cloudflare’s handling of that information is described in
          its{" "}
          <a href="https://www.cloudflare.com/privacypolicy/">privacy policy</a>
          .
        </p>

        <p>
          Love Is Human does not use advertising trackers or analytics tools. We
          do not receive the entries you make in the feelings guide.
        </p>

        <h2>Links to other sites</h2>
        <p>
          Our guides link to other organisations and resources. When you follow
          one of those links, that organisation’s privacy practices apply.
          Please check its privacy information before sharing personal details.
        </p>

        <h2>Questions and updates</h2>
        <p>This site does not collect messages or personal stories.</p>
      </div>
    </div>
  );
}
