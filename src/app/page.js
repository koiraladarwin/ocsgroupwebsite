import CompanyPage from "./companies/page";
import HeroPage from "./hero/page";

    
export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">

      <section className="snap-start h-screen w-screen  bg-gray-700 ">
        <HeroPage/>
      </section>

      <section className="snap-start h-screen w-screen bg-gray-700">
        <CompanyPage/>
      </section>

    </main>
  );
}
