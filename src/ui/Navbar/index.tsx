import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { drawerWidth } from "../../consts";
import MenuIcon from '@mui/icons-material/Menu';
import { Notifications, Person } from "@mui/icons-material";

const Navbar: React.FC<any> = (props) => {

  const {handleDrawerToggle} = props; 
    return (
      <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: "#ffff",
        border: "none",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          color="default"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          React.js Assignment by Sanjeev
        </Typography>
        <Box sx={{ display: "flex" }} gap={1}>
          <IconButton>
            <Notifications />
          </IconButton>
          <IconButton>
            <Person />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
    );
  };
  
  export default Navbar;
  