import { Container } from "@/components/ui/Container";
import { DAILY_DEALS } from "@/constants/deals";
import { DealCard } from "./DealCard";

export function DealsOfTheDay() {
  return (
    <section className="py-8 md:py-16 bg-[#FCF5DC]">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">
              Deals of <span className="text-green-600">The Day</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Find deals of the day here & save money with offers and avail wide
              discounts on everything.
            </p>
          </div>
          <button className="bg-[#013D29] px-8 py-4 hover:bg-green-700 rounded-full text-white">
            Explore
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {DAILY_DEALS.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </Container>
    </section>
  );
}
