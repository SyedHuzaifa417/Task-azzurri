import { CATEGORIES } from "@/constants/categories";
import { CreditCard, HandCoins, TicketPercent } from "lucide-react";

export function Categories() {
  return (
    <div className="py-1 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center p-6 cursor-pointer"
            >
              <div className="bg-gray-200 rounded-full px-4 py-2 flex items-center mb-4">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-12 h-12 mb-4"
                />
              </div>
              <h3 className="text-lg">{category.name}</h3>
            </div>
          ))}
        </div>

        <div>
          <div className="border border-gray-300 mt-8" />
          <div className="mt-16 mb-4 grid grid-cols-1 md:grid-cols-3 gap-0 text-center">
            <div className="flex flex-col items-center md:items-start relative">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 px-4">
                <TicketPercent className="size-16 text-green-600" />
                <div className="flex flex-col items-center md:items-start">
                  <h4 className="text-lg font-semibold mb-2 max-w-full lg:max-w-52 text-center md:text-start">
                    Amazing Last Minute Discounts
                  </h4>
                  <p className="text-gray-600 text-center md:text-start">
                    Get Amazing Last Minute Discounts on your favorite
                    categories: food, beauty, getaways & more.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-gray-300" />
              <div className="md:hidden w-full h-px bg-gray-300 mt-6" />
            </div>

            <div className="flex flex-col items-center md:items-start relative">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 px-4">
                <HandCoins className="size-12 text-green-600" />
                <div className="flex flex-col items-center md:items-start">
                  <h4 className="text-lg font-semibold mb-2 max-w-full lg:max-w-52 text-center md:text-start">
                    Save
                  </h4>
                  <p className="text-gray-600 text-center md:text-start">
                    Save Money with our deals & offers.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-gray-300" />
              <div className="md:hidden w-full h-px bg-gray-300 mt-6" />
            </div>

            <div className="flex flex-col items-center md:items-start relative">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 px-4">
                <CreditCard className="size-16 text-green-600" />
                <div className="flex flex-col items-center md:items-start">
                  <h4 className="text-lg font-semibold mb-2 max-w-full lg:max-w-52 text-center md:text-start">
                    Secure Payments
                  </h4>
                  <p className="text-gray-600 text-center md:text-start">
                    The secure payment methods throughout the checkout process
                    to keep your data secure & safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
