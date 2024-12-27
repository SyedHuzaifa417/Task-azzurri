import CustomGoogleMap from "./MapComponent";

export function MapSection() {
  // For Vite
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

  return <CustomGoogleMap apiKey={apiKey} />;
}
