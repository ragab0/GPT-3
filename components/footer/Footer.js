import { contactInfo } from "@/assets/data/contactInfo";
import Logo from "@/assets/svgs/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="library" className=" bg-[#031B34] mt-[150px]">
      <div className="container pt-[150px] pb-[75px]">
        <header className="text-center">
          <h2 className="mx-auto max-w-4xl text-4xl lg:text-6xl ">
            Do you want to step in to the future before others
          </h2>
          <a
            href="#"
            aria-label="Click!"
            className="p-5 border-2 inline-block mt-[75px] mb-[40px] hover:opacity-80"
          >
            Request Early Access
          </a>
          <div className=" w-fit mx-auto text-center">
            <h3 className=" before:w-full before:h-5 before:opacity-80">
              <Logo width={160} className="mx-auto" />
            </h3>
          </div>
        </header>
        <div className="content grid sm:grid-cols-2 md:grid-cols-4 gap-y-8 mt-[150px]">
          {contactInfo.map(({ heading, items }, i) => (
            <div className={heading}>
              <h4 key={i} className=" before:left-0 before:translate-x-0">
                {heading}
              </h4>
              <ul className="">
                {items.map((item, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      aria-label="click!"
                      className=" hover:opacity-80"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p
        className=" bg-mainSectionDarked text-center p-4 py-16"
        data-aos="zoom-in-up"
        data-aos-anchor-placement="top-bottom"
      >
        &copy; 2023 - made with &hearts; by{" "}
        <Link href="https://ragab.vercel.app" className="font-bold">
          Ragab
        </Link>
      </p>
    </footer>
  );
}
