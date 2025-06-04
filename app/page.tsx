import Nav from "@/components/nav";
import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ResumeSection from "@/components/resume-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <ResumeSection />
      <Footer />
    </>
  );
}
