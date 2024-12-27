import { useState } from "react";
import { BadgePercent, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import { LocationIcon } from "@/components/ui/icons";

export interface Deal {
  id: number;
  title: string;
  image: string;
  rating: number;
  discount: string;
  locations: string[];
  merchant: {
    name: string;
    avatar: string;
  };
}

interface DealCardProps {
  deal: Deal;
}

export function DealCard({ deal }: DealCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={deal.image}
          alt={deal.title}
          className="w-full h-48 object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
          onClick={toggleFavorite}
        >
          <Heart
            className={`h-4 w-4 ${
              isFavorited ? "fill-red-500 text-red-500" : "text-gray-500"
            }`}
          />
        </Button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <StarRating rating={deal.rating} />
          <div className="flex items-center gap-1 text-green-600">
            <BadgePercent className="h-4 w-4 fill-green-700/20 " />
            <p>{deal.discount}</p>
          </div>
        </div>

        <h3 className="text-base md:text-lg font-semibold mb-2">
          {deal.title}
        </h3>

        {deal.locations.length > 2 ? (
          <div className="flex items-end gap-4 justify-start ">
            <div>
              {deal.locations.slice(0, 2).map((location, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <LocationIcon className="w-4 h-4 mr-1" />
                  <span className="text-sm truncate">{location}</span>
                </div>
              ))}
            </div>
            <div className="text-sm text-green-700 hover:text-green-800 underline cursor-pointer group relative">
              +{deal.locations.length - 2} more
              <div className="hidden group-hover:block absolute -left-44 md:-left-20 bottom-full text-gray-700 outline -outline-offset-0 outline-green-700 z-50 bg-white shadow-lg rounded-lg p-2 min-w-[200px]">
                <div>
                  <h1 className="font-bold text-xl mb-2">Locations</h1>
                  {deal.locations.slice(2).map((location, index) => (
                    <div key={index} className="flex items-start py-1 ">
                      <LocationIcon className="w-4 h-4 mr-1" />
                      <span>{location}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          deal.locations.map((location, index) => (
            <div key={index} className="flex items-center text-gray-600">
              <LocationIcon className="w-4 h-4 mr-1" />
              <span className="text-sm truncate">{location}</span>
            </div>
          ))
        )}

        <div className="flex items-center justify-between mx-4 mt-5 border-t border-gray-200 pt-4">
          <div className="flex items-center">
            <img
              src={deal.merchant.avatar}
              alt={deal.merchant.name}
              className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-2"
            />
            <span className="text-xs md:text-sm font-medium truncate">
              {deal.merchant.name}
            </span>
          </div>
          <Button
            size="sm"
            className="bg-green-700 hover:bg-green-800 rounded-full"
          >
            Get Offer
          </Button>
        </div>
      </div>
    </div>
  );
}
