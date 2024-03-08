import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { drawerWidth } from "../consts";
import {
  Cancel,
  Dashboard,
  Google,
  Key,
  LocationCityRounded,
  Map,
  MapRounded,
  MeetingRoom,
  Notifications,
  Person,
  Place,
  SignalWifiOff,
  SwapHoriz,
  TrendingUp,
} from "@mui/icons-material";
import { InfoTrackIcon } from "../ui/Icons";
import { Card, Paper } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const navItems = [
    { id: 1, title: "Dashboard", icon: <Dashboard />, linkTo: "/" },
    { id: 2, title: "Track on map", icon: <Place />, linkTo: "/map" },
    { id: 3, title: "Report", icon: <TrendingUp />, linkTo: "/report" },
  ];
  const drawer = (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Toolbar>
        <img
          width={125}
          height={50}
          src="/images/InfoTrack.svg"
          alt="InfoTrack Logo"
        />
      </Toolbar>

      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.id} sx={{ padding: "0.5rem" }}>
            <ListItemButton
              sx={{
                "&:hover": {
                  background: "#faeff5",
                  color: "rgba(100,50,50,1)",
                },

                borderRadius: "8px",
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  //   const container =
  //     window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
          {drawer}
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
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography variant="h6" fontWeight={600}>
          Dashboard
        </Typography>

        <Box
          paddingBlock={3}
          gap={3}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            "& > :not(style)": {
              m: 1,
              borderRadius: "20px",
              width: 200,
              height: 100,
            },
          }}
        >
          <Paper elevation={6} sx={{ position: "relative" }}>
            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "15%",
                top: "-10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                background: "green",
                color: "#ffff",
              }}
              padding={1}
            >
              <SwapHoriz color="inherit" width={120} height={120} />
            </Box>

            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "15%",
                top: "35%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                color: "green",
              }}
            >
              <Typography paragraph>70%</Typography>
            </Box>

            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "10%",
                bottom: "0%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                color: "#004e7b",
              }}
            >
              <Typography paragraph> View Details</Typography>
            </Box>
          </Paper>
          <Paper elevation={6} sx={{ position: "relative" }}>
            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "15%",
                top: "-10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                background: "#D51524",
                color: "#ffff",
              }}
              padding={1}
            >
              <Cancel color="inherit" width={120} height={120} />
            </Box>

            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "15%",
                top: "35%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                color: "green",
              }}
            >
              <Typography paragraph>70%</Typography>
            </Box>

            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "10%",
                bottom: "0%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                color: "#004e7b",
              }}
            >
              <Typography paragraph> View Details</Typography>
            </Box>
          </Paper>
          <Paper elevation={6} sx={{ position: "relative" }}>
            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "15%",
                top: "-10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                background: "#f9882a",
                color: "#ffff",
              }}
              padding={1}
            >
              <Key color="inherit" width={120} height={120} />
            </Box>

            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "15%",
                top: "35%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                color: "green",
              }}
            >
              <Typography paragraph>70%</Typography>
            </Box>

            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "10%",
                bottom: "0%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                color: "#004e7b",
              }}
            >
              <Typography paragraph> View Details</Typography>
            </Box>
          </Paper>
          <Paper elevation={6} sx={{ position: "relative" }}>
            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "15%",
                top: "-10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                background: "#929292",
                color: "#ffff",
              }}
              padding={1}
            >
              <SignalWifiOff color="inherit" width={120} height={120} />
            </Box>
            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "15%",
                top: "35%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                color: "green",
              }}
            >
              <Typography paragraph>70%</Typography>
            </Box>

            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "10%",
                bottom: "0%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                color: "#004e7b",
              }}
            >
              <Typography paragraph> View Details</Typography>
            </Box>
          </Paper>
          <Paper elevation={6} sx={{ position: "relative" }}>
            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "15%",
                top: "-10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                background: "#931152",
                color: "#ffff",
              }}
              padding={1}
            >
              <MeetingRoom color="inherit" width={120} height={120} />
            </Box>
            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "15%",
                top: "35%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                color: "#931152",
              }}
            >
              <Typography paragraph>70%</Typography>
            </Box>

            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "10%",
                bottom: "0%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                color: "#004e7b",
              }}
            >
              <Typography paragraph> View Details</Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
