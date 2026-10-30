import type { Metadata } from "next";
import { PageIntro } from "@/components/SiteShell";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Find support",
  description:
    "Find support services in your country and practical next steps for reaching out.",
};

export default function GetHelp() {
  return (
    <div className="wrap page-wrap narrow-page">
      <PageIntro
        eyebrow="SUPPORT, WHEN YOU NEED IT"
        title="If things feel hard to manage, talk to someone."
        description="A trusted person or qualified professional can help you think through what’s happening. You can ask for support before a situation becomes a crisis."
      />

      <div className="support-steps">
        <section>
          <span className="step-index">01</span>
          <div>
            <h2>Tell someone you trust</h2>
            <p>
              A friend, family member, teacher, counsellor or another trusted
              person may help you feel less alone and think through what would
              help next.
            </p>
          </div>
        </section>

        <section>
          <span className="step-index">02</span>
          <div>
            <h2>Consider qualified support</h2>
            <p>
              A mental health professional can offer personal guidance. If you
              are not sure where to start, a local health service or
              school/college wellbeing team may be able to explain options.
            </p>
          </div>
        </section>

        <section>
          <span className="step-index">03</span>
          <div>
            <h2>Find a service in your country</h2>
            <p>
              Services differ by country, and their hours or eligibility can
              change. Find A Helpline lists local options; check the details on
              the service’s own site before reaching out.
            </p>

            <a
              className="button button-primary"
              href="https://findahelpline.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Find A Helpline <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      </div>

      <div className="emergency-notice">
        <p className="eyebrow">IF SOMEONE IS IN IMMEDIATE DANGER</p>
        <p>
          Contact the emergency services where you are, or go to the nearest
          emergency department. This website is not an emergency service and
          cannot respond to urgent requests.
        </p>
      </div>

      <p className="support-caveat">
        Love Is Human does not provide clinical care, crisis counselling or a
        personalised safety assessment. The directory above is an external
        service; its availability and information can change.
      </p>
    </div>
  );
}
