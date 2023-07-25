import React from 'react';
import { connect } from 'react-redux';

const RegionInfoCard = ({ selectedRegionData }) => {
  const { currencySymbol, speedUnits, distanceUnits, volumeUnits, timezones } = selectedRegionData;

  return (
    <div className="region-info-card">
      <h2>Region Information</h2>
      <p>Currency Symbol: {currencySymbol}</p>
      <p>Speed Units: {speedUnits}</p>
      <p>Distance Units: {distanceUnits}</p>
      <p>Volume Units: {volumeUnits}</p>
      <p>Timezones: {timezones.join(', ')}</p>
    </div>
  );
};

// Connect the component to Redux to access the selectedRegion state
const mapStateToProps = (state) => {
  return {
    selectedRegionData: state.region.selectedRegionData,
  };
};

export default connect(mapStateToProps)(RegionInfoCard);
