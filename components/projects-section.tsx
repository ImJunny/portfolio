import ProjectEntry, { ProjectEntryType } from "@/components/project-entry";
import Section from "@/components/section";
import { Separator } from "@/components/ui/separator";

export default function ProjectSection() {
  const projects: ProjectEntryType[] = [
    {
      title: "Hustle",
      date: "Dec 2024 - Present",
      description:
        "Hustle is a social media app that allows people to quickly find jobs and services. Improving upon existing services in the quick-gig industry, it aims to provide a community of productivity. It features precise geocoding, financial transactions, P2P communication, algorithmic feeds, and more. Streamlined by an ORM, type-safe APIs, and environment containerization, we were able to develop a solid proof-of-concept of an enterprise-level product.",
      main_tags: ["Mobile", "React Native"],
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
      images: ["/hustle/hustle-1.png"],
    },
    {
      title: "HackPSH",
      date: "Aug 2025 - Jan 2026",
      description:
        "HackPSH is a hackathon platform that allows students to participate in hackathons and showcase their skills. It provides a platform for students to collaborate, learn, and innovate.",
      main_tags: ["Web", "React"],
      tags: ["Web", "NextJS", "PostgreSQL", "Drizzle", "TRPC", "TailwindCSS"],
      redirect: "https://ieee.hackpsh.org/",
      images: [
        "/hackpsh/hackpsh-1.png",
        "/hackpsh/hackpsh-2.png",
        "/hackpsh/hackpsh-3.png",
      ],
    },
    {
      title: "Audio Aura",
      date: "Aug 2025 - Jan 2026",
      description:
        "HackPSH is a hackathon platform that allows students to participate in hackathons and showcase their skills. It provides a platform for students to collaborate, learn, and innovate.",
      main_tags: ["Web", "React"],
      tags: ["Web", "React"],
      redirect: "https://audioaura.onrender.com/",
      images: ["/audio-aura/audio-aura-1.png"],
    },
  ];

  return (
    <Section className="bg-zinc-900 text-white">
      <h1 className="text-xl mb-8 uppercase font-semibold md:text-left text-center">
        Featured Projects
      </h1>
      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectEntry data={project} />
            {projects.indexOf(project) !== projects.length - 1 && (
              <Separator className="mt-16 bg-secondary/20" />
            )}
          </div>
        ))}
      </div>
      <h1 className="mt-16 text-xl mb-8 uppercase font-semibold md:text-left text-center">
        Other Projects
      </h1>
    </Section>
  );
}
