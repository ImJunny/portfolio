"use client";
import Nav from "@/components/nav";
import ProjectEntry, { ProjectEntryType } from "@/components/project-entry";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroTitle from "@/components/hero-title";
import { cn } from "@/lib/utils";
import { GridBackground } from "@/components/grid-background";

export default function Home() {
  const socials = [
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      redirect: "https://www.linkedin.com/in/john-nguyen-29252021a/",
      className: "bg-blue-700 hover:bg-blue-700/80",
    },
    {
      name: "GitHub",
      icon: <Github />,
      redirect: "https://github.com/ImJunny",
      className: "bg-zinc-800 hover:bg-zinc-800/80",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      redirect: "https://www.instagram.com/jnguye.n/",
      className: "bg-pink-600 hover:bg-pink-600/80",
    },
    { name: "Email", icon: <Mail />, redirect: "" },
  ];

  const projects: ProjectEntryType[] = [
    {
      title: "Hustle",
      date: "Dec 2024 - Present",
      description:
        "Hustle is a social media app that allows people to quickly find jobs and services. Improving upon existing services in the quick-gig industry, Hustle aims to provide a community of productivity. This makes it suitable for those who want to pick up blue-collar-esque jobs, make money from hobbies, or expand their own skillsets in a particular industry.",
      tags: [
        "Mobile",
        "React Native",
        "PostgreSQL",
        "ExpressJS",
        "FastAPI",
        "AI/ML",
        "Google Maps",
        "Stripe",
      ],
    },
    {
      title: "HackPSH",
      date: "Aug 2025 - Jan 2026",
      description:
        "HackPSH is a hackathon platform that allows students to participate in hackathons and showcase their skills. It provides a platform for students to collaborate, learn, and innovate.",
      tags: ["Web", "NextJS", "PostgreSQL", "Drizzle", "TRPC", "TailwindCSS"],
      redirect: "https://ieee.hackpsh.org/",
    },
    {
      title: "Audio Aura",
      date: "Aug 2025 - Jan 2026",
      description:
        "HackPSH is a hackathon platform that allows students to participate in hackathons and showcase their skills. It provides a platform for students to collaborate, learn, and innovate.",
      tags: ["Web", "React"],
    },
  ];

  return (
    <div>
      <Nav />

      <Section className="md:min-h-120 items-center">
        {/* <div className="absolute inset-0 -z-10">
          <GridBackground />
        </div> */}

        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-16 items-center">
          <div className="flex flex-col">
            <HeroTitle />
            <h2 className="text-lg mt-4 md:text-left text-justify">
              I{"'"}m a <span className="font-bold">full-stack developer</span>{" "}
              and a Penn State CS graduate. My passion for software has
              introduced me to many technical concepts with a proficiency in
              ReactJS and TypeScript. Having an eye for visuals with UI/UX
              design and a strong background in backend development, I engage in
              web and mobile apps which I find interesting and innovative.
            </h2>
            <div className="gap-2 flex flex-wrap mt-8 justify-center md:justify-start">
              {socials.map((social) => (
                <Button
                  key={social.name}
                  variant={social.className ? "default" : "outline"}
                  className={cn(
                    social.className,
                    "h-10 w-10 lg:h-auto lg:w-auto"
                  )}
                  asChild
                >
                  <Link href={social.redirect as string} target="_blank">
                    {social.icon}
                    <span className="hidden lg:flex ml-2">{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="rounded-full overflow-hidden w-48 h-48 md:min-w-72 md:min-h-72 order-first md:order-last md:block">
            <Image src={"/avatar.jpg"} width={400} height={400} alt="avatar" />
          </div>
        </div>
      </Section>

      <Section className="bg-zinc-950 text-white">
        <h1 className="text-xl mb-8 uppercase font-semibold md:text-left text-center">
          Projects
        </h1>
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectEntry data={project} />
              {projects.indexOf(project) !== projects.length - 1 && (
                <Separator className="mt-16" />
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
