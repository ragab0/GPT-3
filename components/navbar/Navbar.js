"use client";
import "./Navbar.css";
import { useState } from "react";
import { links } from "@/assets/data/links";
import Logo from "@/assets/svgs/logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container text-lg flex items-center gap-16 mt-4 lg:mt-12 relative z-10">
      <a href="#" data-aos="zoom-down">
        <Logo width={100} />
      </a>
      <span
        className=" lg:hidden ms-auto p-2 hover:opacity-80 rotate-90"
        onClick={() => setIsOpen(true)}
      >
        <span data-aos="fade-in" data-aos-delay="300">
          |||
        </span>
      </span>
      <div
        className={`menu hidden lg:flex w-full justify-between items-center ${
          isOpen ? "opened" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        <nav>
          <ul className="btns flex items-center gap-4">
            {links.map(({ name, link }, i) => (
              <li key={i} data-aos="zoom-down" data-aos-delay={50 * i}>
                <a href={"#" + (link || name)} className="capitalize">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="user capitalize">
          <a
            href="#"
            className="btn-primary !bg-transparent hover:opacity-80"
            data-aos="zoom-down"
            data-aos-delay={350}
          >
            sign in
          </a>
          <a
            href="#"
            className="btn-primary rounded-2xl"
            data-aos="zoom-down"
            data-aos-delay={400}
          >
            sign up
          </a>
        </div>
      </div>
    </header>
  );
}
