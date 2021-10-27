import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/About">
        About
      </a>

      <a className="menu-item" href="/Contact">
        Contact
      </a>

      {/* <a className="menu-item" href="/desserts">
        Desserts
      </a> */}
    </Menu>
  );
};


//https://codesandbox.io/s/nmy6x9wrj?file=/src/index.js:241-387
//https://www.npmjs.com/package/react-burger-menu
