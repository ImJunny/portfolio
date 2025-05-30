import ProjectEntry, { ProjectEntryType } from "@/components/project-entry";
import Section from "@/components/section";

export default function ProjectSection() {
  const projects: ProjectEntryType[] = [
    {
      title: "Hustle",
      date: "Dec 2024 - Present",
      description:
        "Hustle is a social media app that allows people to quickly find jobs and services. Improving upon existing services in the quick-gig industry, it aims to provide a community of productivity. It features precise geocoding, financial transactions, P2P communication, algorithmic feeds, AI, and more. The app also supports both iOS and Android devices.",
      main_tags: ["Mobile", "React Native", "Private"],
      images: ["/hustle/hustle-1.png"],
      blog: "https://www.linkedin.com/posts/john-nhat-nguyen-29252021a_capstone-development-thankyou-activity-7323815129463013376-MB0_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADc__44Bwbl0IsvjZ0MJj_aeW0XTGvFMnw4",
    },
    {
      title: "HackPSH",
      date: "Aug 2023 - December 2024",
      description:
        "HackPSH is a web platform used for IEEE's hackathons at Penn State Harrisburg for three semesters. It allows users to view general information about the event, organization, and sponsors. Using the platform, participants are able to register, create teams, complete coding challenges, and track scores, easing the management process for event adminstrators.",
      main_tags: ["Web", "React", "Public"],
      redirect: "https://ieee.hackpsh.org/",
      images: [
        "/hackpsh/hackpsh-1.png",
        "/hackpsh/hackpsh-2.png",
        "/hackpsh/hackpsh-3.png",
      ],
      repo: "https://github.com/IEEE-PSH/hackpsh-web",
    },
    {
      title: "Audio Aura",
      date: "May 2023 - July 2023",
      description:
        "Audio Aura is a web application that takes inspiration from Spotify's annual Wrapped feature, displaying to users a visualization of their listening trends. Users can listen to snippets of their top songs and filter trends by different time periods. (NOTE: This project is live, but has not been updated since. Bugs are expected to occur.)",
      main_tags: ["Web", "React", "Public"],
      redirect: "https://audioaura.onrender.com/",
      images: ["/audio-aura/audio-aura-1.png"],
      repo: "https://github.com/ImJunny/audio-aura-v1",
    },
  ];

  return (
    <Section className="bg-zinc-900 text-white">
      <h1 className="text-xl uppercase font-semibold md:text-left text-center">
        Featured Projects
      </h1>
      <p className="md:text-lg mt-2 md:text-left text-center">
        Here are projects I thought were worth mentioning.
      </p>
      <div className="flex flex-col gap-6 mt-4">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectEntry data={project} />
          </div>
        ))}
      </div>
      <h1 className="mt-8 sm:mt-16 text-xl mb-8 uppercase font-semibold md:text-left text-center">
        Other Projects
      </h1>
    </Section>
  );
}
