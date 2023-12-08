import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  GeoJSON,
} from "react-leaflet";
import { useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import geoJSONData from "../src/data/distritosCochabamba.json";
import { barrios } from "./data/barrios";
function App() {
  const position = [4.700974, -74.078125];
  // -17.450182, -66.123480
// bogota -> 4.700974, -74.078125

  const style = {
    fillColor: 'blue',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
  };



  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup className="data">desde aca</Popup>
      </Marker>
      <GeoJSON data={barrios} style={style} />
    </MapContainer>
  );
}

export default App;
