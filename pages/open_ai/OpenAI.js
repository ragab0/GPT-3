import "./OpenAI.css";
import Image from "next/image";
import Possibility from "@/assets/imgs/possibility.webp";
import { openAiarticles } from "@/assets/data/openAiArticles";

export default function OpenAI() {
  return (
    <section id="open_ai" className="openai-section container pt-[200px]">
      <div className="feature">
        <div>
          <h2
            className=" max-w-md mb-4 bg-linear-before before:bg-[#07325F]"
            data-aos="fade-in"
          >
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h2>
          <a
            href="#"
            aria-label="click!"
            className="text-secondClr hover:opacity-80"
            data-aos="fade-in"
            // data-aos-anchor-placement="center-bottom"
          >
            Request Early Access to Get Started
          </a>
        </div>
        <div className="articles">
          {openAiarticles.map(({ heading, desc }, i) => (
            <article
              key={i}
              className="flex gap-4 mb-8 justify-between items-start"
              data-aos="fade-top-down"
              data-aos-delay={250 + 100 * i}
              data-aos-anchor-placement={i !== 0 ? "top-bottom" : undefined}
            >
              <h3 className="max-w-[170px] text-lg before:left-0 before:translate-x-0">
                {heading}
              </h3>
              <p className="texter max-w-xs">{desc}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="feature px-[50px] mt-32">
        <div
          data-aos="fade-right"
          data-aos-delay={500}
          data-aos-anchor-placement="top-center"
        >
          <Image
            alt="Possibility"
            src={Possibility}
            className=" w-full max-w-[550px] place-self-end scale-125 my-12"
          />
        </div>
        <div className="self-end mb-8 max-w-md z-10" data-aos="fade-in">
          <p className=" text-mainClrLighted">
            Request Early Access to Get Started
          </p>
          <h2 className="my-4 bg-linear-after after:bg-[#07325F]">
            The possibilities are beyond your imagination
          </h2>
          <p className="texter my-4">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <a
            href="#"
            aria-label="click!"
            className=" text-secondClr hover:opacity-80"
          >
            Request Early Access to Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
