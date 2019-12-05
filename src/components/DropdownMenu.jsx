import React from 'react';
import { Dropdown } from 'semantic-ui-react';
const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>;

const DropdownMenu = () => {
  return(
    <React.Fragment>
      <Dropdown text="OPTIONS">
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">OBSERVER</Dropdown.Item>
          <Dropdown.Item href="#/action-2">TESTING</Dropdown.Item>
          <Dropdown.Item href="#/action-3">PERFORMANCE</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  )
}

export default () => (<div className="header-item item1">{style}<DropdownMenu/></div>);
// export default DropdownMenu;


