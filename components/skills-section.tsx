/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/section";
import { SquareGridBackground } from "@/components/square-grid-background";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function SkillsSection() {
  const [expanded, setExpanded] = useState(false);

  const skills = [
    {
      title: "React/NextJS",
      slug: "nextdotjs",
      redirect: "https://nextjs.org/",
    },
    {
      title: "React Native",
      slug: "react",
      redirect: "https://reactnative.dev/",
    },
    {
      title: "TypeScript",
      slug: "typescript",
      redirect: "https://www.typescriptlang.org/",
    },
    { title: "Python", slug: "python", redirect: "https://www.python.org/" },
    { title: "C++", slug: "cplusplus", redirect: "https://isocpp.org/" },
    {
      title: "Git",
      slug: "git",
      redirect: "https://git-scm.com/",
    },
    {
      title: "TailwindCSS",
      slug: "tailwindcss",
      redirect: "https://tailwindcss.com/",
    },
    {
      title: "PostgreSQL",
      slug: "postgresql",
      redirect: "https://www.postgresql.org/",
    },
    { title: "NodeJS", slug: "nodedotjs", redirect: "https://nodejs.org/" },
    { title: "ExpressJS", slug: "express", redirect: "https://expressjs.com/" },
    {
      title: "FastAPI",
      slug: "fastapi",
      redirect: "https://fastapi.tiangolo.com/",
    },
    { title: "Docker", slug: "docker", redirect: "https://www.docker.com/" },
    { title: "TRPC", slug: "trpc", redirect: "https://trpc.io/" },
    { title: "Figma", slug: "figma", redirect: "https://figma.com/" },
    { title: "S3", slug: "amazons3", redirect: "https://aws.amazon.com/s3/" },
    {
      title: "Drizzle ORM",
      slug: "drizzle",
      redirect: "https://orm.drizzle.team/",
    },
  ];

  return (
    <Section background={<SquareGridBackground />}>
      <h1 className="text-xl uppercase font-semibold md:text-left text-center">
        Skills + Tech
      </h1>
      <h2 className="md:text-lg mt-2 md:text-left text-justify">
        Check out some technology I{"'"}ve used over the years.
      </h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 mt-6 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      {/* Mobile Grid — always show first 4 */}
      <div className="md:hidden grid grid-cols-2 gap-4 mt-6">
        {skills.slice(0, 4).map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      {/* Animated expansion for remaining skills */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={false}
        animate={{ maxHeight: expanded ? 1000 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {skills.slice(4).map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Toggle Button */}
      <div className="md:hidden mt-4 flex justify-center">
        <Button variant="outline" onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? "View less" : "View all"}
          <ChevronDown
            className={expanded ? "rotate-180 transition-transform" : ""}
          />
        </Button>
      </div>
    </Section>
  );
}

function SkillCard({
  skill,
}: {
  skill: { title: string; slug: string; redirect: string };
}) {
  return (
    <Link href={skill.redirect} target="_blank" className="relative">
      <div className="rounded-lg overflow-hidden relative">
        <div className="bg-background absolute inset-0 z-0 pointer-events-none" />
        <Card className="flex items-center justify-center relative z-10 hover:bg-secondary/40">
          <CardContent className="flex flex-col gap-2 items-center justify-center">
            <img
              height="32"
              width="32"
              src={`https://cdn.simpleicons.org/${skill.slug}`}
              alt={skill.slug}
            />
            <h1 className="font-semibold text-center text-xs sm:text-sm">
              {skill.title}
            </h1>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
