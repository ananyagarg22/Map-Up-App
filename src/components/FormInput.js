import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const FormInput = ({ selectedRegion, handleRegionChange }) => {
  return (
    <div>
      <Select
        defaultValue={selectedRegion}
        style={{ width: 200 }}
        onChange={handleRegionChange}
      >
        <Option value="United States">United States</Option>
        <Option value="India">India</Option>
        <Option value="United Kingdom">United Kingdom</Option>
      </Select>
    </div>
  );
};

export default FormInput;
