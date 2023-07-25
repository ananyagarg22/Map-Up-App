import React from 'react';
import { connect } from 'react-redux';
import { toggleNightMode } from '../Actions/nightModeActions';

const NightModeToggle = ({ nightMode, toggleNightMode }) => {
  return (
    <div className="night-mode-toggle">
      <label>
        Night Mode
        <input type="checkbox" checked={nightMode} onChange={toggleNightMode} />
      </label>
    </div>
  );
};

// Connect the component to Redux to access the nightMode state
const mapStateToProps = (state) => {
  return {
    nightMode: state.nightMode.nightMode,
  };
};

// Connect the component to Redux to dispatch the toggleNightMode action
const mapDispatchToProps = (dispatch) => {
  return {
    toggleNightMode: () => dispatch(toggleNightMode()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NightModeToggle);
