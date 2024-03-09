import React, { ReactNode } from 'react';
import Navbar from '../../ui/Navbar';
import Sidebar from '../../ui/Sidebar';

interface LayoutTwoProps {
  children: ReactNode;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  handleDrawerTransitionEnd: () => void;
  handleDrawerClose: () => void;
  drawerListItems: any[]; // Adjust the type according to your drawerListItems
}

const LayoutTwo: React.FC<LayoutTwoProps> = ({
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

export default LayoutTwo;
