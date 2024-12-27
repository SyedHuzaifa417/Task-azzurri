import {
  Search,
  ShoppingCart,
  User,
  Bell,
  ChevronDown,
  Settings2,
  UserRoundCheck,
  UserRoundCog,
  Menu,
} from "lucide-react";
import logo from "@/assets/logo.png";
import flag from "@/assets/flag.png";
import home from "@/assets/home.png";
import service from "@/assets/service.png";
import entertainment from "@/assets/entertainment.png";
import salon from "@/assets/salon.png";
import dine from "@/assets/dine.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 shadow-lg shadow-gray-200">
      <div className="w-full bg-[#013D29] text-white px-4 md:px-8 py-2 text-sm hidden md:block">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
          <div className="flex items-center">
            <Bell className="mr-2 text-green-700" />
            <span className="text-xs md:text-sm">
              Delivery lead time will be impacted due to COVID-19. Stay safe!
            </span>
          </div>
          <div className="flex items-center space-x-4 text-[#669082] text-xs md:text-sm">
            <p>Select Language:</p>
            <p>
              <span className="text-white mx-3">English</span> |
              <span className="mx-2">العربية</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white pt-4  z-50">
        <div>
          <div className="flex items-center justify-between px-4 md:hidden mx-3">
            <div className="flex items-center space-x-7">
              <Button
                variant="ghost"
                className="text-[#219653] p-0"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
              <div className="flex items-center space-x-1">
                <img src={logo} alt="Logo" className="h-8 w-8" />
                <h1 className="text-2xl text-[#013D29] mt-2 font-semibold">
                  deelly
                </h1>
              </div>
            </div>
            <div className="relative bg-[#E9E9E9] rounded-full">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-4 w-4 text-gray-900" />
                <span className="absolute -top-2 -right-3 outline outline-white bg-yellow-400 text-sm rounded-full h-6 w-6 flex items-center justify-center">
                  03
                </span>
              </Button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-between px-4 md:px-8 lg:mx-20">
            <div className="flex items-center space-x-2 md:space-x-6">
              <div className="flex items-center space-x-1">
                <img src={logo} alt="Logo" className="h-10 w-10" />
                <h1 className="text-4xl text-[#013D29] mt-2 font-semibold">
                  deelly
                </h1>
              </div>
              <Button
                variant="outline"
                className="hidden md:flex items-center space-x-2 text-gray-700 border rounded-full px-4 py-2 outline outline-1 outline-green-700"
              >
                <img src={flag} alt="Pakistan flag" className="w-6 h-6" />
                <span>Pakistan</span>
                <ChevronDown className="pl-1 size-5 mt-1" />
              </Button>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex max-w-md mx-4 space-x-6 items-center">
                <div className="relative space-x-4">
                  <Search className="h-5 w-8 mx-3 text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-9 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <Button
                  variant="ghost"
                  className="bg-gradient-to-r from-[#5ACD84] to-[#56AEFF] rounded-xl w-[44px] h-[44px]"
                >
                  <Settings2 className="text-white size-4 scale-150" />
                </Button>
              </div>

              <div className="relative bg-[#E9E9E9] rounded-full">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-4 w-4 text-gray-900" />
                  <span className="absolute -top-2 -right-3 outline outline-white bg-yellow-400 text-sm rounded-full h-6 w-6 flex items-center justify-center">
                    03
                  </span>
                </Button>
              </div>
              <div className="relative group bg-[#E9E9E9] rounded-full">
                <Button variant="ghost" size="icon">
                  <User className="h-4 w-4 text-gray-900" />
                </Button>

                <div className="absolute right-0 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
                  <div className="py-2">
                    <a
                      href="#"
                      className="flex px-4 py-2 text-gray-800 hover:bg-gray-100 items-center"
                    >
                      <UserRoundCheck className="size-4 mr-2" />
                      Customer Login
                    </a>
                    <a
                      href="#"
                      className="flex px-4 py-2 text-gray-800 hover:bg-gray-100 items-center"
                    >
                      <UserRoundCog className="size-4 mr-2" />
                      Merchant Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 px-4 py-2 bg-white">
              <div className="space-y-4">
                <p className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer whitespace-nowrap">
                  <img src={home} alt="home" className="h-7 w-7 mx-2" />
                  HOME
                </p>
                <p className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer whitespace-nowrap">
                  <img src={dine} alt="dine" className="h-7 w-7 mx-2" />
                  DINNING
                </p>
                <p className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer whitespace-nowrap">
                  <img src={salon} alt="spa" className="h-7 w-7 mx-2" />
                  SALON/SPA
                </p>
                <p className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer whitespace-nowrap">
                  <img
                    src={entertainment}
                    alt="entertainment"
                    className="h-7 w-7 mx-2"
                  />
                  ENTERTAINMENT
                </p>
                <p className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer whitespace-nowrap">
                  <img src={service} alt="services" className="h-7 w-7 mx-2" />
                  HOME SERVICES
                </p>
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg"
                  />
                </div>
                <button className="w-full bg-[#013D29] text-white py-3 rounded-lg">
                  Search
                </button>
              </div>
            </div>
          )}

          <div className="border-b py-2 max-w-full"></div>

          <div className="hidden md:flex pb-4  justify-between items-center mt-6 mx-4 lg:mx-20">
            <nav className="flex flex-wrap md:space-x-2 lg:space-x-10 xl:space-x-28 2xl:space-x-48 font-semibold">
              <p className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer whitespace-nowrap">
                <img src={home} alt="home" className="h-7 w-7 mx-2" />
                HOME
              </p>
              <p className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer whitespace-nowrap">
                <img src={dine} alt="dine" className="h-7 w-7 mx-2" />
                DINNING
              </p>
              <p className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer whitespace-nowrap">
                <img src={salon} alt="spa" className="h-7 w-7 mx-2" />
                SALON/SPA
              </p>
              <p className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer whitespace-nowrap">
                <img
                  src={entertainment}
                  alt="entertainment"
                  className="h-7 w-7 mx-2"
                />
                ENTERTAINMENT
              </p>
              <p className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer whitespace-nowrap">
                <img src={service} alt="services" className="h-7 w-7 mx-2" />
                HOME SERVICES
              </p>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
