import type { Metadata } from "next";
import { Inter, Poppins, Caveat, JetBrains_Mono } from "next/font/google";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { Nav } from "@/components/Nav";
import { Providers } from "@/components/Providers";
import { profile } from "@/data/profile";
import "./globals.css";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const heading = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const signature = Caveat({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${profile.name}   ${profile.title}`,
  description: profile.valueProposition.join(" "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${body.variable} ${heading.variable} ${signature.variable} ${mono.variable} min-h-screen antialiased`}
      >
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
          >
            Skip to content
          </a>
          <Nav />
          {children}
          <footer className="border-t border-white/10 bg-[var(--dark-section)] py-10 print:hidden">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-sm text-[var(--dark-section-muted)] sm:flex-row sm:justify-between">
              <p>
                © {new Date().getFullYear()} {profile.name}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-white"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-colors hover:text-white"
                >
                  <GitHubIcon className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="transition-colors hover:text-white"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
