import { aboutArticles } from "@/assets/data/aboutArticles";

export default function About() {
  return (
    <section
      id="GPT"
      className="about-section container !px-16 py-20 bg-mainSection text-center"
    >
      <div className="flex flex-col justify-center gap-4" data-aos="fade-in">
        <h3>What is GPT-3</h3>
        <p className=" max-w-2xl mx-auto text-mainClr leading-[2rem]">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className=" mt-32">
        <h2
          className=" max-w-md mx-auto mb-4"
          data-aos="fade-in"
          data-aos-delay="250"
        >
          The possibilities are beyond your imagination
        </h2>
        <a
          href="#"
          aria-label="click!"
          className="btn text-secondClr"
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          Explore The Library
        </a>
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {aboutArticles.map(({ title, desc }, i) => (
            <article data-aos="fade-up" data-aos-delay={250 + i * 100}>
              <h3>{title}</h3>
              <p className="texter">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
