import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

// Ensure L is globally available for Routing Machine
window.L = L;

// Component to draw highlighted path
function RoutingPath({ from, to }) {
  const map = useMap();

  useEffect(() => {
    if (!from || !to) return;

    const control = L.Routing.control({
      waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
      createMarker: () => null, // hide default markers
      addWaypoints: false,
      routeWhileDragging: false,
      show: false,
      lineOptions: {
        styles: [{ color: "blue", weight: 4, opacity: 0.7 }],
      },
      router: L.Routing.osrmv1({ serviceUrl: "https://router.project-osrm.org/route/v1" }),
    }).addTo(map);

    return () => map.removeControl(control);
  }, [from, to, map]);

  return null;
}

export default function MechanicMap() {
  const [customerLocation, setCustomerLocation] = useState(null);
  const [mechanicLocation, setMechanicLocation] = useState(null);
  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setCustomerLocation([latitude, longitude]);

          // Simulate mechanic nearby
          const mechanicLat = latitude + (Math.random() - 0.5) * 0.01;
          const mechanicLon = longitude + (Math.random() - 0.5) * 0.01;
          setMechanicLocation([mechanicLat, mechanicLon]);
        },
        (err) => console.error("Error getting location:", err)
      );
    }
  }, []);

  useEffect(() => {
    if (customerLocation && mechanicLocation && !alertShown) {
      // Calculate ETA based on distance
      const R = 6371; // km
      const [lat1, lon1] = customerLocation;
      const [lat2, lon2] = mechanicLocation;
      const dLat = ((lat2 - lat1) * Math.PI) / 180;
      const dLon = ((lon2 - lon1) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos((lat1 * Math.PI) / 180) *
          Math.cos((lat2 * Math.PI) / 180) *
          Math.sin(dLon / 2) ** 2;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distanceKm = R * c;

      const avgSpeedKmh = 30;
      const etaMinutes = Math.max(1, Math.round((distanceKm / avgSpeedKmh) * 60));

      alert(`Your mechanic is ${etaMinutes} minutes away.`);
      setAlertShown(true);
    }
  }, [customerLocation, mechanicLocation, alertShown]);

  if (!customerLocation) {
    return (
      <div className="flex items-center justify-center h-screen text-[rgb(139,0,0)] font-semibold">Fetching your location...</div>
    );
  }

  return (
    <div className="w-full h-screen">
      <MapContainer center={customerLocation} zoom={14} className="h-full w-full" scrollWheelZoom={true}><TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'/>

        {/* Customer Marker */}
        <Marker position={customerLocation}><Popup>You are here</Popup></Marker>

        {/* Mechanic Marker */}
        {mechanicLocation && (
          <Marker position={mechanicLocation}>
            <Popup>
              Mechanic is{" "}
              {Math.max(
                1,
                Math.round(
                  ((Math.sqrt(
                    (mechanicLocation[0] - customerLocation[0]) ** 2 +
                      (mechanicLocation[1] - customerLocation[1]) ** 2
                  ) *
                    111) /
                    30) *
                    60
                )
              )}{" "}
              minutes out
            </Popup>
          </Marker>
        )}

        {/* Highlighted path */}
        {mechanicLocation && <RoutingPath from={mechanicLocation} to={customerLocation} />}</MapContainer>       
    </div>
  );
}
