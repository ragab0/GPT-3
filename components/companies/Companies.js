import Image from "next/image";
import { companies } from "@/assets/data/companies";

export default function Companies() {
  return (
    <section className="container my-32">
      <ul className="btns flex max-lg:flex-col max-lg:items-center gap-x-12 gap-y-4 justify-center">
        {companies.map(({ name, src }, i) => (
          <li
            key={i}
            aria-label={name}
            data-aos="fade-right"
            data-aos-delay={i * 100}
          >
            <Image alt={name} src={src} />
          </li>
        ))}
      </ul>
    </section>
  );
}
