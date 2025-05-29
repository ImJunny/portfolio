import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TypingText } from "./animate-ui/text/typing";
import EmailButton from "./email-button";

export default function HeroSection() {
  const socials = [
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      redirect: "https://www.linkedin.com/in/john-nhat-nguyen-29252021a",
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
  ];

  return (
    <Section className="md:min-h-120 items-center">
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-16 items-center">
        <div className="flex flex-col">
          <h1
            className={cn(
              "text-3xl md:text-4xl tracking-tighter text-center md:text-left"
            )}
          >
            <TypingText
              text={["Hello!", "Welcome to my portfolio.", "John Nhat Nguyen"]}
              duration={30}
              cursor
              cursorClassName="h-10 invisible"
            />
          </h1>
          <h2 className="md:text-lg mt-4 md:text-left text-justify">
            I{"'"}m a <span className="font-bold">full-stack developer</span>{" "}
            and a Penn State CS graduate. My passion for software has introduced
            me to many technical concepts with a proficiency in ReactJS and
            TypeScript. Having an eye for visuals with UI/UX design and a strong
            background in backend development, I engage in web and mobile apps
            that I find interesting and innovative.
          </h2>
          <div className="gap-2 flex flex-wrap mt-8 justify-center md:justify-start">
            {socials.map((social) => (
              <Button
                key={social.name}
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
            <EmailButton />
          </div>
        </div>

        <div className="rounded-full overflow-hidden w-48 h-48 md:min-w-72 md:min-h-72 order-first md:order-last md:block">
          <Image src={"/avatar.jpg"} width={400} height={400} alt="avatar" />
        </div>
      </div>
    </Section>
  );
}
