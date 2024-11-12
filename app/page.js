import Header from "@/pages/header/Header";
import Footer from "@/components/footer/Footer";
import Companies from "@/components/companies/Companies";
import About from "@/pages/about/About";
import OpenAI from "@/pages/open_ai/OpenAI";
import Cta from "@/components/cta/Cta";
import Studies from "@/pages/studies/Studies";

export default function Home() {
  return (
    <main id="home" className=" overflow-hidden">
      <Header />
      <Companies />
      <About />
      <OpenAI />
      <Cta />
      <Studies />
      <Footer />
    </main>
  );
}

// `The chance to work on a platform that manages over 30K restaurants (maybe I'll get some discount vouchers? 😄) while tackling interesting technical challenges in performance and scalability perfectly matches my experience and what I'm looking for in my next role.`;
