import React from 'react';
import Menu from './Menu';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Menu></Menu>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
