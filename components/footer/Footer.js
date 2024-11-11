import Logo from "@/assets/svgs/logo";

const datas = [
  {
    heading: "Links",
    items: ["Overons", "Social Media", "Counters", "Contact"],
  },
  {
    heading: "Company",
    items: ["Terms & Conditions", "Privacy Policy", "Contact"],
  },
  {
    heading: "Get in touch",
    items: [
      "Crechterwoord K12 182 DK Alknjkcb",
      "085-132567",
      "info@payme.net",
    ],
  },
  {
    heading: "Info",
    items: ["https://ragab.vercel.app", ""],
  },
];

export default function Footer() {
  return (
    <footer id="library" className=" bg-mainSection mt-[150px]">
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
          {datas.map(({ heading, items }, i) => (
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
      <p className=" bg-mainSectionDarked font-bold text-center p-4">
        &copy; 2023 - made with &hearts; by Ragab
      </p>
    </footer>
  );
}
