import { Box, Drawer } from "@mui/material";
import { drawerWidth } from "../../consts";

const Sidebar: React.FC<any> = (props) => {
  
  const { mobileOpen,handleDrawerTransitionEnd ,handleDrawerClose ,drawerListItems } = props;


  return (

    
    <Box
    component="nav"
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    aria-label="navbar items"
  >
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onTransitionEnd={handleDrawerTransitionEnd}
      onClose={handleDrawerClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      {drawerListItems}
    </Drawer>
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          border: "none",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        },
      }}
      open
    >
      {drawerListItems}
    </Drawer>
  </Box>



  );
};

export default Sidebar;
