import Section from "@/components/section";
import { FlickeringGridBackground } from "./flickering-grid-background";
import { Lens } from "./magicui/lens";
import { Card, CardContent } from "./ui/card";

export default function ResumeSection() {
  return (
    <Section background={<FlickeringGridBackground />}>
      <Card>
        <CardContent className="flex gap-12">
          <Lens>
            <div className="w-100 h-140 bg-blue-200" />
          </Lens>

          <div>
            <h1 className="text-xl mb-8 font-semibold md:text-left text-center">
              Peep my resume.
            </h1>
            <p>You can download it here</p>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
