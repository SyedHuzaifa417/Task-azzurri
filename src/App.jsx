import { Header } from "@/components/layout/Header";
import { Categories } from "@/components/home/Categories";
import Hero from "@/components/home/hero/Hero";
import { DealsList } from "@/components/home/deals/DealsList";
import { DealsOfTheDay } from "@/components/home/deals/DealsOfTheDay";
import { AppDownload } from "@/components/home/AppDownload";
import { Footer } from "@/components/layout/Footer";
import { MapSection } from "@/components/home/map/Map";
function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main>
        <Hero />
        <Categories />
        <DealsList />
        <DealsOfTheDay />
        <AppDownload />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
