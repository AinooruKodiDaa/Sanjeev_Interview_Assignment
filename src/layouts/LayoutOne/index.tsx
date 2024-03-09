import React, { ReactNode } from 'react';
import Navbar from '../../ui/Navbar';
import Sidebar from '../../ui/Sidebar';
import { Toolbar } from '@mui/material';

interface LayoutOneProps {
  children: ReactNode;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  handleDrawerTransitionEnd: () => void;
  handleDrawerClose: () => void;
  drawerListItems: any[] | React.ReactElement; // Adjust the type according to your drawerListItems
}

const LayoutOne: React.FC<LayoutOneProps> = ({
  children,
  handleDrawerToggle,
  mobileOpen,
  handleDrawerTransitionEnd,
  handleDrawerClose,
  drawerListItems,
}) => {
  return (
    <>
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        handleDrawerClose={handleDrawerClose}
        drawerListItems={drawerListItems}
      />
      
      {children}
    </>
  );
};

export default LayoutOne;
