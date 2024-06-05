import 'leaflet/dist/leaflet.css';
import type { Place } from '../api/Place';
import type { Map as LeafletMap } from 'leaflet';
import { useEffect, useRef } from 'react';
import { MapContainer, Tilelayer, Marker } from 'react-leaflet';

interface MapProps {
  place: Place | null;
}

export default function Map({ place }: MapProps) {
  return <div>Map!!</div>
}