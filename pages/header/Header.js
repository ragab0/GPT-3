import "./Header.css";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import AI from "@/assets/imgs/ai2.webp";
import People from "@/assets/imgs/people.png";

const start = 700;

export default function Hero() {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero__body container bg-linear-before bg-linear-after">
        <div className="hero__body-content overflow-hidden flex flex-col-reverse lg:grid lg:grid-cols-2 items-center">
          <div>
            <h1 data-aos="fade-up" data-aos-delay={start + 50}>
              Let’s Build Something amazing with GPT-3 OpenAI
            </h1>
            <p
              className="my-12 text-xl texter"
              data-aos="fade-up"
              data-aos-delay={start + 100}
              data-aos-anchor-placement="top-bottom"
            >
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <div
              className="flex max-lg:flex-col mb-8"
              data-aos="fade-up"
              data-aos-delay={start + 150}
              data-aos-anchor-placement="top-bottom"
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="w-full px-8 py-6 text-xl bg-mainSectionDarked placeholder:opacity-50 outline-none"
              />
              <button aria-label="Subscribe now!" className="btn-primary">
                Get Started
              </button>
            </div>
            <div
              className="flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay={start + 200}
              data-aos-anchor-placement="top-bottom"
            >
              <Image alt="people" src={People} />
              <span className=" text-xs">
                1,600 people requested access a visit in last 24 hours
              </span>
            </div>
          </div>
          <div
            className="the-img z-50"
            data-aos="fade-in"
            data-aos-delay="1250"
          >
            <Image alt="ai-head" width="100%" src={AI} priority={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
