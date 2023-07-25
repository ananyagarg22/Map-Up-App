import React from 'react';
import { Collapse, Switch } from 'antd';

const { Panel } = Collapse;

const Sidebar = ({ nightMode, toggleNightMode }) => {
  return (
    <aside>
      <Collapse defaultActiveKey={['1']} ghost>
        <Panel header="Sidebar" key="1">
          {/* Sidebar content with icon + text label */}
          <p>Some sidebar content here</p>
          {/* Night mode toggle switch */}
          <Switch checked={nightMode} onChange={toggleNightMode} />
        </Panel>
      </Collapse>
    </aside>
  );
};

export default Sidebar;
