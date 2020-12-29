import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="heading">
        <Link to="/">Authors List</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
