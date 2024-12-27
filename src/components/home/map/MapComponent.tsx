import { useEffect, useRef, useState } from "react";
import {
  MarkerClusterer,
  SuperClusterAlgorithm,
} from "@googlemaps/markerclusterer";
import { Button } from "@/components/ui/button";

interface Deal {
  id: number;
  latitude: number;
  longitude: number;
  title: string;
  discount: string;
  merchant: {
    name: string;
  };
}

interface MapProps {
  apiKey: string;
}

const CustomGoogleMap = ({ apiKey }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [deals, setDeals] = useState<Deal[]>([]);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [markerClusterer, setMarkerClusterer] =
    useState<MarkerClusterer | null>(null);

  const createCustomMarker = () => ({
    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
    fillColor: "#34D399",
    fillOpacity: 1,
    strokeWeight: 1,
    strokeColor: "#047857",
    scale: 1.5,
  });

  useEffect(() => {
    if (!apiKey) {
      console.error("Google Maps API key is required");
      return;
    }

    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, [apiKey]);

  const initMap = () => {
    if (!mapRef.current) return;

    const defaultCenter = { lat: 51.5074, lng: -0.1278 };
    const mapInstance = new google.maps.Map(mapRef.current, {
      zoom: 13,
      center: defaultCenter,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    });

    setMap(mapInstance);
    getUserLocation(mapInstance);
    fetchDeals();
  };

  const getUserLocation = (mapInstance: google.maps.Map) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userPos);
          mapInstance.setCenter(userPos);

          new google.maps.Marker({
            position: userPos,
            map: mapInstance,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 10,
              fillColor: "#4F46E5",
              fillOpacity: 1,
              strokeWeight: 2,
              strokeColor: "#ffffff",
            },
            title: "Your Location",
          });
        },
        () => {
          console.error("Error: The Geolocation service failed.");
        }
      );
    }
  };
  const fetchDeals = async () => {
    try {
      const response = await fetch("https://deelly.com/api/nearby_deals/");
      const data = await response.json();
      setDeals(data);
    } catch (error) {
      console.error("Error fetching deals:", error);

      setDeals([
        {
          id: 1,
          latitude: 51.5074,
          longitude: -0.1278,
          title: "50% Off at Restaurant A",
          discount: "50%",
          merchant: { name: "Restaurant A" },
        },
        {
          id: 2,
          latitude: 51.5154,
          longitude: -0.1258,
          title: "30% Off at Restaurant B",
          discount: "30%",
          merchant: { name: "Restaurant B" },
        },
      ]);
    }
  };

  useEffect(() => {
    if (!map || !deals.length) return;
    if (markerClusterer) {
      markerClusterer.clearMarkers();
    }
    markers.forEach((marker) => marker.setMap(null));

    const newMarkers: google.maps.Marker[] = [];

    deals.forEach((deal) => {
      const marker = new google.maps.Marker({
        position: { lat: deal.latitude, lng: deal.longitude },
        icon: createCustomMarker(),
        title: deal.title,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div class="p-4 max-w-xs">
            <h3 class="font-bold text-lg">${deal.title}</h3>
            <p class="text-green-600 font-medium">${deal.discount} off</p>
            <p class="text-gray-600">${deal.merchant.name}</p>
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });

      newMarkers.push(marker);
    });

    const newClusterer = new MarkerClusterer({
      map,
      markers: newMarkers,
      algorithm: new SuperClusterAlgorithm({
        radius: 60,
        maxZoom: 15,
      }),
      renderer: {
        render: ({ count, position }) =>
          new google.maps.Marker({
            position,
            label: {
              text: String(count),
              color: "white",
            },
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 20,
              fillColor: "#34D399",
              fillOpacity: 0.9,
              strokeWeight: 2,
              strokeColor: "#047857",
            },
            zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
          }),
      },
    });

    setMarkerClusterer(newClusterer);
    setMarkers(newMarkers);
  }, [map, deals]);

  const centerOnUser = () => {
    if (map && userLocation) {
      map.panTo(userLocation);
      map.setZoom(15);
    }
  };

  return (
    <div className="relative w-full h-[600px]">
      <div ref={mapRef} className="w-full h-full  shadow-lg" />
      {userLocation && (
        <Button
          onClick={centerOnUser}
          className="absolute top-4 right-4 bg-gray-600 shadow-lg hover:bg-gray-100"
        >
          Center on my location
        </Button>
      )}
    </div>
  );
};

export default CustomGoogleMap;
