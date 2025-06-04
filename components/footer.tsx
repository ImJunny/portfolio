import Section from "./section";

export default function Footer() {
  return (
    <footer>
      <Section className="bg-black border-0" id="contact-section">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col">
            <span className="text-2xl tracking-tighter font-semibold text-center text-background">
              Want to reach out?
            </span>
            <span className="text-background lg:text-lg">
              Feel free to contact me via email or phone
            </span>
          </div>

          <div className="grid grid-rows-2 gap-x-4 text-background ">
            <span className="font-semibold text-center">
              johnnguyen4501@gmail.com
            </span>
            <span className="font-semibold text-center">+1 (717) 350-3843</span>
          </div>
        </div>
      </Section>
    </footer>
  );
}
