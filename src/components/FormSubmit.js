import React from 'react';
import { connect } from 'react-redux';
import { loadRegionData } from '../Actions/regionActions'; // Assuming you have an action for fetching region data

const FormSubmit = ({ handleLoadClick }) => {
  const handleLoadButton = () => {
    // Call the handleLoadClick function from props (if needed)
    handleLoadClick();
    // Dispatch an action to load region data based on the selected region
    // Assuming you have an action (e.g., loadRegionData) to fetch region data
    // Pass the selectedRegion as the parameter to the action
    // The action should handle fetching the data and updating the selectedRegionData state
    // dispatch(loadRegionData(selectedRegion));
  };

  return (
    <div className="form-submit">
      <button onClick={handleLoadButton}>Load</button>
    </div>
  );
};

// Connect the component to Redux to access the selectedRegion state
const mapStateToProps = (state) => {
  return {
    selectedRegion: state.region.selectedRegion,
  };
};

export default connect(mapStateToProps)(FormSubmit);
