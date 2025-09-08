"use-client";
import CompanyPage from "./companies/page";
import HeroPage from "./hero/page";
import  HeroPage2  from "./hero2/page";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen w-screen overflow-hidden">
      <section className="snap-start h-screen w-screen bg-gray-700">
        <HeroPage2 />
      </section>
      <section className="snap-start h-screen w-screen bg-gray-800">
        <CompanyPage />
      </section>
    </main>
  );
}

