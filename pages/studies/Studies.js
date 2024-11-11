import React from "react";
import Image from "next/image";
import Blog1 from "@/assets/imgs/blog01.webp";
import Blog2 from "@/assets/imgs/blog02.webp";
import Blog3 from "@/assets/imgs/blog03.webp";
import Blog4 from "@/assets/imgs/blog04.webp";
import Blog5 from "@/assets/imgs/blog05.webp";
import "./Studies.css";

const data = [Blog1, Blog2, Blog3, Blog4, Blog5];

export default function Studies() {
  return (
    <section id="studies" className="studies-section container">
      <h2 className=" text-center my-[150px] text-4xl lg:text-6xl max-w-[700px] mx-auto">
        A lot is happening, We are blogging about it.
      </h2>
      <div className="flex flex-wrap justify-center ">
        {data.map((b, i) => (
          <div className=" md:w-1/2 lg:w-1/3 p-3">
            <figure
              key={i}
              className=" !shadow-mainSectionDarked hover:shadow-[0_0_0_10px]"
            >
              <a
                href="#"
                aria-label="click!"
                className=" overflow-hidden block"
              >
                <Image
                  alt={`Blog${i + 1}`}
                  src={b}
                  className="min-w-[300px] h-[300px] object-cover hover:scale-110 hover:rotate-2"
                />
              </a>
              <figcaption className="p-5">
                <div>
                  <time className="text-mainClrLighted text-xs">
                    Sep 26, 2021
                  </time>
                  <h3 className="my-4 before:left-0 before:translate-x-0">
                    GPT-3 and Open AI is the future. Let us explore how it is?
                  </h3>
                </div>
                <a
                  href="#"
                  aria-label="click!"
                  className="place-self-start text-secondClr hover:opacity-80"
                >
                  Read Full Article
                </a>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
