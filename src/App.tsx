import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Place, TrendingUp } from "@mui/icons-material";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import Sidebar from "./ui/Sidebar";
import Navbar from "./ui/Navbar";
import ReportPage from "./pages/ReportPage";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
    {
      id: 1,
      title: "Dashboard",
      icon: <Dashboard />,
      linkTo: "/",
      component: DashboardPage,
    },
    {
      id: 2,
      title: "Track on map",
      icon: <Place />,
      linkTo: "/map",
      component: () => (
        <Box sx={{ background: "green" }}>
          <Toolbar />
          <h1>Map page</h1>
        </Box>
      ),
    },
    {
      id: 3,
      title: "Report",
      icon: <TrendingUp />,
      linkTo: "/report",
      component: ReportPage,
    },
  ];

  const drawerListItems = (
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
              component="a"
              href={item.linkTo}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <Navbar handleDrawerToggle={handleDrawerToggle} />

        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
          handleDrawerClose={handleDrawerClose}
          drawerListItems={drawerListItems}
        />

        <Routes>
          {navItems.map((item, index) => (
            <Route
              key={item.id}
              path={item.linkTo}
              element={<item.component />}
            />
          ))}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
