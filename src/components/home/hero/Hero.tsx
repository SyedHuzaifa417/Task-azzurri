import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoWithButton from "./video";

function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-green-50 to-green-100">
      <div className="flex lg:h-[600px] flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 container lg:pl-40 px-4 flex relative">
          <div className="w-full lg:max-w-md py-8 lg:py-20 z-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Get The Best <span className="text-green-600">Deals</span>
              <br />
              Near By You!
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8">
              Explore nearby deals on map and buy deals to enjoy quality food
              with your family
            </p>
            <Button className="bg-[#013D29] px-8 lg:px-12 py-4 lg:py-6 hover:bg-green-700 rounded-3xl w-max">
              Explore
            </Button>
          </div>
          <img
            src="/src/assets/hero.png"
            alt="house"
            className="w-96 absolute bottom-20 -right-24 z-0 lg:block hidden"
          />
        </div>

        <div className="w-full lg:w-1/2 h-[300px] lg:h-full">
          <VideoWithButton />
        </div>
      </div>

      <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-white rounded-lg shadow-lg p-4 lg:p-8 w-full lg:w-10/12 lg:max-w-6xl lg:bottom-[-80px] mx-auto">
        {/*sm */}
        <div className="flex flex-col space-y-4 lg:hidden ">
          <select className="bg-[#f7f3f3] border border-gray-300 rounded-lg p-3 w-full">
            <option value="" disabled selected>
              Dining
            </option>
          </select>
          <select className="bg-[#f7f3f3] border border-gray-300 rounded-lg p-3 w-full">
            <option value="" disabled selected>
              Select All
            </option>
          </select>
          <select className="bg-[#f7f3f3] border border-gray-300 rounded-lg p-3 w-full">
            <option value="" disabled selected>
              Select Sub Category
            </option>
          </select>
          <select className="bg-[#f7f3f3] border border-gray-300 rounded-lg p-3 w-full">
            <option value="" disabled selected>
              Lahore
            </option>
          </select>
          <select className="bg-[#f7f3f3] border border-gray-300 rounded-lg p-3 w-full">
            <option value="" disabled selected>
              Destination
            </option>
          </select>
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-3 bg-[#f7f3f3] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <Button className="w-full bg-[#013D29] py-3 hover:bg-green-700 rounded-3xl">
            Search
          </Button>
        </div>

        {/* //lg */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mb-6">
            <select className="bg-[#f7f3f3] border border-gray-300 rounded-lg p-3 w-full">
              <option value="" disabled selected>
                Dining
              </option>
            </select>
            <select className="bg-[#f7f3f3] border border-gray-300 rounded-lg p-3 w-full">
              <option value="" disabled selected>
                Select All
              </option>
            </select>
            <select className="bg-[#f7f3f3] border border-gray-300 rounded-lg p-3 w-full">
              <option value="" disabled selected>
                Select Sub Category
              </option>
            </select>
          </div>
          <div className="grid grid-cols-12 gap-6 items-center">
            <select className="col-span-3 bg-[#f7f3f3] border border-gray-300 rounded-lg p-3">
              <option value="" disabled selected>
                Lahore
              </option>
            </select>
            <select className="col-span-3 bg-[#f7f3f3] border border-gray-300 rounded-lg p-3">
              <option value="" disabled selected>
                Destination
              </option>
            </select>
            <div className="col-span-6 flex items-center gap-4">
              <div className="relative flex-grow">
                <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-3 bg-[#f7f3f3] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <Button className="bg-[#013D29] px-8 py-3 hover:bg-green-700 rounded-3xl">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
