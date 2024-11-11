import React from "react";
import Image from "next/image";
import Possibility from "@/assets/imgs/possibility.webp";
import "./OpenAI.css";

const articles = [
  {
    heading: "Improving end distrusts instantly ",
    desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    heading: "Become the tended active",
    desc: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    heading: "Message or am nothing",
    desc: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    heading: "Really boy law county",
    desc: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];

export default function OpenAI() {
  return (
    <section id="open_ai" className="openai-section container pt-[200px]">
      <div className="feature">
        <div>
          <h2 className=" max-w-md mb-4">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h2>
          <a
            href="#"
            aria-label="click!"
            className="text-secondClr hover:opacity-80"
          >
            Request Early Access to Get Started
          </a>
        </div>
        <div className="articles">
          {articles.map(({ heading, desc }, i) => (
            <article
              key={i}
              className="flex gap-4 mb-8 justify-between items-start"
            >
              <h3 className="max-w-[170px] text-lg before:left-0 before:translate-x-0">
                {heading}
              </h3>
              <p className="texter max-w-xs">{desc}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="feature px-[50px]">
        <Image
          alt="Possibility"
          src={Possibility}
          className=" w-full max-w-[550px] place-self-end"
        />
        <div className="self-end mb-8 max-w-md">
          <p className=" text-mainClrLighted">
            Request Early Access to Get Started
          </p>
          <h2 className=" my-4">
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
