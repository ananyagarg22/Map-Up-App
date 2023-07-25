import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';

const OSMMap = ({ selectedRegion }) => {
  const center = [0, 0]; // Default center
  let zoom = 2; // Default zoom level

  // Calculate the center and zoom level based on the selected region
  if (selectedRegion === 'United States') {
    center = [37.0902, -95.7129];
    zoom = 4;
  } else if (selectedRegion === 'India') {
    center = [20.5937, 78.9629];
    zoom = 5;
  } else if (selectedRegion === 'United Kingdom') {
    center = [55.3781, -3.4360];
    zoom = 6;
  }

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

// Connect the component to Redux to access the selectedRegion state
const mapStateToProps = (state) => {
  return {
    selectedRegion: state.region.selectedRegion,
  };
};

export default connect(mapStateToProps)(OSMMap);
