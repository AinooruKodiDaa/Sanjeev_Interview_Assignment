import { useState } from "react";
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
import Navbar from "../../ui/Navbar";
import Sidebar from "../../ui/Sidebar";
import DashboardMainContent from "../../components/DashboardMainContent";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardPage(props: Props) {
  const { window } = props;
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
              onClick={() => {
                alert(`Navigate to ${item.linkTo}`);
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
    <>
      <DashboardMainContent />
    </>
  );
}
