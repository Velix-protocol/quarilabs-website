import DoubleCircle from "../icons/DoubleCircle";
import Linkedin from "../icons/Linkedin";
import Telegram from "../icons/Telegram";
import X from "../icons/X";
import Section from "../ui/Section";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#181615] to-[#343434] mt-32 h-[30.75rem] relative overflow-hidden">
      <Section className="">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 w-fit">
            <h1 className="flex gap-4 items-center text-3xl font-clashDisplay font-bold">
              <DoubleCircle />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-quari-orange-500 to-quari-orange-300">
                Contact Us
              </span>
            </h1>
            <a
              href="mailto:contact@quarilabs.com"
              target="_blank"
              className="text-white font-clashDisplay text-2xl"
            >
              contact@quarilabs.com
            </a>
            <div className="bg-gradient-to-r h-0.5 from-quari-orange-500 to-quari-orange-300" />
          </div>
          <div>
            <ul className="flex items-center gap-4">
              <li>
                <Telegram />
              </li>
              <li>
                <Linkedin />
              </li>
              <li>
                <X />
              </li>
            </ul>
            <p className="font-clashDisplay text-2xl text-white mt-4">
              © Quarilabs {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </Section>
      <Section className="relative h-full flex justify-center items-center">
        <p className="text-[18.0625rem] flex justify-center h-fit w-[75.0625rems] font-clashDisplay font-bold text-[#343434] absolute bottom-[22rem] mx-auto tracking-widest leading-[0px]">
          QUARI
        </p>
      </Section>
    </div>
  );
};

export default Footer;
