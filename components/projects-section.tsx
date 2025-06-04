import ProjectEntry, { ProjectEntryType } from "@/components/project-entry";
import Section from "@/components/section";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function ProjectSection() {
  const projects: ProjectEntryType[] = [
    {
      title: "Hustle",
      date: "Dec 2024 - Present",
      description:
        "Hustle is a social media app that allows people to quickly find jobs and services. Improving upon existing services in the quick-gig industry, it aims to provide a community of productivity. It features precise geocoding, financial transactions, P2P communication, algorithmic feeds, AI, and more. The app also supports both iOS and Android devices.",
      main_tags: ["Mobile", "React Native", "Closed Source"],
      images: ["/hustle/hustle-1.png"],
      blog: "https://www.linkedin.com/posts/john-nhat-nguyen-29252021a_capstone-development-thankyou-activity-7323815129463013376-MB0_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADc__44Bwbl0IsvjZ0MJj_aeW0XTGvFMnw4",
    },
    {
      title: "HackPSH",
      date: "Aug 2023 - December 2024",
      description:
        "HackPSH is a web platform used for IEEE's hackathons at Penn State Harrisburg for three semesters. It allows users to view general information about the event, organization, and sponsors. Using the platform, participants are able to register, create teams, complete coding challenges, and track scores, easing the management process for event adminstrators.",
      main_tags: ["Web", "React", "Open Source"],
      redirect: "https://ieee.hackpsh.org/",
      images: [
        "/hackpsh/hackpsh-1.png",
        "/hackpsh/hackpsh-2.png",
        "/hackpsh/hackpsh-3.png",
        "/hackpsh/hackpsh-4.png",
        "/hackpsh/hackpsh-5.png",
        "/hackpsh/hackpsh-6.png",
        "/hackpsh/hackpsh-7.png",
        "/hackpsh/hackpsh-8.png",
      ],
      repo: "https://github.com/IEEE-PSH/hackpsh-web",
    },
    {
      title: "Audio Aura",
      date: "May 2023 - July 2023",
      description:
        "Audio Aura is a web application that takes inspiration from Spotify's annual Wrapped feature, displaying to users a visualization of their listening trends. Users can listen to snippets of their top songs and filter trends by different time periods. (NOTE: This project is live, but has not been updated since. Bugs are expected to occur.)",
      main_tags: ["Web", "React", "Open Source"],
      redirect: "https://audioaura.onrender.com/",
      images: ["/audio-aura/audio-aura-1.png"],
      repo: "https://github.com/ImJunny/audio-aura-v1",
    },
    {
      title: "Dangledood",
      date: "May 2023 - May 2023",
      description: `Dangledood is a web application for the Hangman game, hence the name "Dangledood". It was written with HTML, CSS, and JavaScript, featuring a random word API and hand-drawn visuals.`,
      main_tags: ["Web", "React", "Open Source"],
      images: ["/dangledood/dangledood-1.png", "/dangledood/dangledood-2.png"],
      repo: "https://github.com/ImJunny/dangledood",
    },
  ];

  return (
    <Section className="bg-zinc-900 text-white" id="projects-section">
      <h1 className="text-2xl tracking-tighter md:text-left text-center font-semibold">
        Featured Projects
      </h1>
      <h2 className="lg:text-lg mt-2 md:text-left text-center">
        Here are projects I thought were worth mentioning.
      </h2>
      <div className="flex flex-col gap-6 mt-4">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectEntry data={project} />
          </div>
        ))}
      </div>
      <Separator className="mt-16 bg-border-dark" />
      <div className="mt-8 sm:mt-16 flex flex-col gap-4">
        <div>
          <h1 className="text-2xl tracking-tighter text-center font-semibold">
            Want to see more?
          </h1>
          <h2 className="lg:text-lg mt-2 text-center">
            You can view all my repositories by visiting my GitHub.
          </h2>
        </div>

        <Button
          className="border-background/30 bg-foreground text-background border-1 self-center"
          asChild
        >
          <Link href="https://github.com/ImJunny" target="_blank">
            <Github />
            Visit my GitHub
          </Link>
        </Button>
      </div>
    </Section>
  );
}
