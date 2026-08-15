import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  Mail,
  Phone,
  ExternalLink,
  GraduationCap,
  Code2,
  Sparkles,
  MessageCircle,
} from "lucide-react";

import { NeuralBackground } from "@/components/NeuralBackground";
import { Reveal } from "@/components/Reveal";
import heroAsset from "@/assets/hero.jpg.asset.json";
import g1 from "@/assets/g1.jpg.asset.json";
import g2 from "@/assets/g2.jpg.asset.json";
import g3 from "@/assets/g3.jpg.asset.json";
import g4 from "@/assets/g4.jpg.asset.json";
import g5 from "@/assets/g5.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ubaidullah Jamshed — Web Developer Resume" },
      {
        name: "description",
        content:
          "Resume and portfolio of Ubaidullah Jamshed, a web developer from Lahore building fast, modern, responsive websites.",
      },
      { property: "og:title", content: "Ubaidullah Jamshed — Web Developer Resume" },
      {
        property: "og:description",
        content:
          "Education, skills, projects and gallery of Ubaidullah Jamshed — available for website development work.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const gallery = [
  { src: g1.url, alt: "Ubaidullah standing by a black BMW at a car show" },
  { src: g2.url, alt: "Ubaidullah in a casual tee at a car meet" },
  { src: g3.url, alt: "Ubaidullah seated in a grey blazer at a formal dinner" },
  { src: g4.url, alt: "Ubaidullah adjusting his blazer on stage" },
  { src: g5.url, alt: "Ubaidullah in formal wear at Pearl-Continental Lahore" },
];

const marqueeItems = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Next.js",
  "Node.js",
  "Supabase",
  "Netlify",
  "Figma",
  "Vite",
  "Git",
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ubaidullah-jamshed-61648439b/?skipRedirect=true",
  },
  { label: "GitHub", href: "https://github.com/settings/profile" },
  { label: "Instagram", href: "https://www.instagram.com/ubaid_x_27/" },
  { label: "Facebook", href: "https://www.facebook.com/ubaidullah27" },
  { label: "TikTok", href: "https://www.tiktok.com/@ubaid_x_72" },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <NeuralBackground className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70" />

      <div className="relative z-10">
        {/* Nav */}
        <header className="sticky top-0 z-20 border-b border-border/60 bg-background/70 backdrop-blur-md">
          <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between">
            <a href="#home" className="min-w-0 truncate text-sm font-bold tracking-tight sm:text-base">
              Ubaidullah&apos;s Resume
            </a>
            <div className="hidden gap-6 text-sm text-muted-foreground sm:flex">
              <a className="transition-colors hover:text-primary" href="#education">
                Education
              </a>
              <a className="transition-colors hover:text-primary" href="#work">
                Skills
              </a>
              <a className="transition-colors hover:text-primary" href="#gallery">
                Gallery
              </a>
              <a className="transition-colors hover:text-primary" href="#contact">
                Contact
              </a>
            </div>
            <a
              href="#contact"
              className="shrink-0 rounded-full border border-primary/50 px-4 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10 sm:hidden"
            >
              Hire me
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section id="home" className="hero-surface px-4 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[320px_minmax(0,1fr)]">
            <Reveal className="mx-auto">
              <div className="animate-float glow-ring overflow-hidden rounded-3xl border border-primary/30">
                <img
                  src={heroAsset.url}
                  alt="Portrait of Ubaidullah Jamshed"
                  className="h-[340px] w-[280px] object-cover sm:h-[400px] sm:w-[320px]"
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="min-w-0">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> Available for freelance work
              </p>
              <h1 className="text-3xl leading-tight font-black tracking-tight sm:text-5xl">
                Ubaidullah Jamshed —{" "}
                <span className="text-gradient">Web Developer</span>
              </h1>
              <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
                I design and build fast, professional, mobile-first websites — clean code,
                smooth animation, and interfaces people actually enjoy using.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/Ubaidullah-Jamshed-CV.pdf"
                  download="Ubaidullah-Jamshed-CV.pdf"
                  className="glow-ring inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>
                <a
                  href="https://hu-devs.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  View sample project <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Marquee */}
        <section className="border-y border-border/60 bg-card/30 py-5">
          <div className="flex w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
            <div className="animate-marquee flex shrink-0 gap-4 pr-4">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="glass-card rounded-full px-6 py-2 text-sm font-semibold whitespace-nowrap text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="flex items-center gap-3 text-2xl font-black sm:text-3xl">
                <GraduationCap className="h-7 w-7 shrink-0 text-primary" /> Education
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Matriculation",
                  year: "2024",
                  school: "Lahore Lyceum School",
                  marks: "80% Marks",
                  note: "Completed",
                },
                {
                  title: "Intermediate (Part 1)",
                  year: "2025",
                  school: "Punjab College, DHA Campus",
                  marks: "70% Marks",
                  note: "Part 2 result pending",
                },
              ].map((e, i) => (
                <Reveal key={e.title} delay={i * 120}>
                  <article className="glass-card h-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="min-w-0 truncate text-lg font-bold">{e.title}</h3>
                      <span className="shrink-0 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                        {e.year}
                      </span>
                    </div>
                    <p className="mt-2 text-muted-foreground">{e.school}</p>
                    <p className="mt-4 text-2xl font-black text-gradient">{e.marks}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{e.note}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Experience */}
        <section id="work" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="flex items-center gap-3 text-2xl font-black sm:text-3xl">
                <Code2 className="h-7 w-7 shrink-0 text-primary" /> Experience &amp; Skills
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <Reveal>
                <div className="glass-card h-full rounded-2xl p-6">
                  <h3 className="text-lg font-bold">Expert-level Web Development</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Full builds from blank page to live site: structure, styling, animation,
                    responsiveness and deployment.
                  </p>
                  <div className="mt-6 space-y-4">
                    {[
                      { label: "Web Development", value: 95 },
                      { label: "Responsive UI Design", value: 90 },
                      { label: "JavaScript / React", value: 85 },
                      { label: "Animation & Interaction", value: 88 },
                    ].map((s) => (
                      <div key={s.label}>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{s.label}</span>
                          <span>{s.value}%</span>
                        </div>
                        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: `${s.value}%`,
                              backgroundImage: "var(--gradient-accent)",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6">
                  <div>
                    <h3 className="text-lg font-bold">Proof of work</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      A live, production website built and deployed end-to-end.
                    </p>
                  </div>
                  <a
                    href="https://hu-devs.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-ring mt-6 flex items-center justify-between gap-3 rounded-xl border border-primary/40 bg-primary/10 p-4 transition-transform hover:scale-[1.02]"
                  >
                    <span className="min-w-0">
                      <span className="block text-xs text-muted-foreground">Sample Project</span>
                      <span className="block truncate font-semibold text-primary">
                        https://hu-devs.netlify.app/
                      </span>
                    </span>
                    <ExternalLink className="h-5 w-5 shrink-0 text-primary" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="text-2xl font-black sm:text-3xl">Gallery</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {gallery.map((img, i) => (
                <Reveal key={img.src} delay={i * 90}>
                  <figure className="group relative overflow-hidden rounded-2xl border border-border">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-64"
                    />
                    <figcaption className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="text-2xl font-black sm:text-4xl">
                Need a website that <span className="text-gradient">actually converts</span>?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                I take on website development projects — portfolios, business sites and landing
                pages. Send a message and let&apos;s talk about yours.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:ubaidullahjamshed658@gmail.com"
                  className="inline-flex max-w-full items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="truncate">ubaidullahjamshed658@gmail.com</span>
                </a>
                <a
                  href="tel:+923470783752"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0" /> 03470783752
                </a>
                <a
                  href="https://wa.me/923470783752"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-full px-5 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-border/60 px-4 py-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ubaidullah Jamshed · Lahore, Pakistan
        </footer>

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/923470783752"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Ubaidullah on WhatsApp"
          className="glow-ring fixed right-4 bottom-4 z-30 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </main>
  );
}
