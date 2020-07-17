import React, { FC } from "react";
import { Map as LeafletMap, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "./map.css";
import useDestinations from "../../hooks/useDestinations";

const position: LatLngTuple = [51.505, -0.09];
const Map: FC = () => {
  const { destinations } = useDestinations();
  if (typeof window !== "undefined") {
    return (
      <LeafletMap center={position} zoom={2}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {destinations.map((destination) => (
          <Marker
            key={destination.id}
            position={[
              destination.location.latitude,
              destination.location.longitude,
            ]}
          >
            <Popup>{destination.name}</Popup>
          </Marker>
        ))}
      </LeafletMap>
    );
  }
  return null;
};

export default Map;
