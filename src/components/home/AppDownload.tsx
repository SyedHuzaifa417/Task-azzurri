import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "../ui/button";
import appD from "@/assets/download.png";

interface Stats {
  deals: number;
  retailers: number;
  activeUsers: number;
  downloads: number;
}

export function AppDownload() {
  const [stats, setStats] = useState<Stats>({
    deals: 75000,
    retailers: 6000,
    activeUsers: 2000000,
    downloads: 1300000,
  });

  const incrementStats = () => {
    setStats((prev) => ({
      deals: prev.deals + 1,
      retailers: prev.retailers + 1,
      activeUsers: prev.activeUsers + 1,
      downloads: prev.downloads + 1,
    }));
  };

  return (
    <>
      <section className="bg-white px-14 pt-14 overflow-hidden">
        <Container className="bg-[#F0FFF8] rounded-2xl mx-auto p-9 border border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative order-1">
              <img
                src={appD}
                alt="Mobile app preview"
                className="relative z-10 max-w-[180px] md:max-w-xs mx-auto"
              />
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Download Our App To Get Amazing{" "}
                <span className="text-green-600">Deals</span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-8">
                Get new deals every day. Top deals have the best offers and
                share them with you. To avail of offers, find our app in the
                play store
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={incrementStats}
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-10 md:h-12 mx-auto"
                  />
                </button>
                <button
                  onClick={incrementStats}
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    className="h-10 md:h-12 mx-auto"
                  />
                </button>
              </div>
            </div>
          </div>
        </Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-gray-200 mt-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-600">
              {stats.deals.toLocaleString()}+
            </div>
            <div className="text-sm text-gray-600">Deals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-600">
              {stats.retailers.toLocaleString()}+
            </div>
            <div className="text-sm text-gray-600">Retailers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-600">
              {stats.activeUsers.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-600">
              {stats.downloads.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">App Downloads</div>
          </div>
        </div>
      </section>
      <div className="bg-[#FCF5DC] gap-8 py-14 flex items-center justify-center">
        <h1 className="text-lg font-semibold">
          For inquires and more information
        </h1>
        <Button
          variant="outline"
          className="bg-[#013D29] px-4 py-3 hover:bg-green-700 rounded-3xl text-white"
        >
          Get in Touch
        </Button>
      </div>
    </>
  );
}
