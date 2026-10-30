import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://loveishuman.pages.dev"),
  title: {
    default: "Love Is Human | Love, relationships and feelings",
    template: "%s · Love Is Human",
  },
  description:
    "Clear guides to love, relationships, emotions and the questions that can be hard to ask.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    type: "website",
    siteName: "Love Is Human",
    title: "Love Is Human",
    description: "Guides to love, relationships and the feelings around them.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem("lih-theme");
                document.documentElement.dataset.theme = savedTheme || "dark";
              } catch {
                document.documentElement.dataset.theme = "dark";
              }
            `,
          }}
        />
      </head>

      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
