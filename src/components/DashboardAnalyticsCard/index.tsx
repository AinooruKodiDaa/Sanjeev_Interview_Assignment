import {
  Cancel,
  Key,
  MeetingRoom,
  SignalWifiOff,
  SwapHoriz,
} from "@mui/icons-material";
import { Box, Paper, Typography,  } from "@mui/material";
import {useTheme} from "@mui/material/styles";

import { Link } from "react-router-dom";


const DashboardAnalyticsCard = () => {

  const theme = useTheme();

  const analyticsItems = [
    {
      title: "Moving",
      count: "563",
      percentage: "50%",
      icon: (
        <SwapHoriz
          color="inherit"
          style={{ width: "40px", height: "40px" }}
          width={120}
          height={120}
        />
      ),
      background: "green",
    },

    {
      title: "Stopped",
      count: "114",
      percentage: "40%",
      icon: (
        <Cancel
          color="inherit"
          style={{ width: "40px", height: "40px" }}
          width={120}
          height={120}
        />
      ),
      background: "#D51524",
    },
    {
      title: "Idle",
      count: "345",
      percentage: "67%",
      icon: (
        <Key
          color="inherit"
          style={{ width: "40px", height: "40px" }}
          width={120}
          height={120}
        />
      ),
      background: "#f9882a",
    },
    {
      title: "Inactive",
      count: "124",
      percentage: "28%",
      icon: (
        <SignalWifiOff
          color="inherit"
          style={{ width: "40px", height: "40px" }}
          width={120}
          height={120}
        />
      ),
      background: "#929292",
    },
    {
      title: "Out of service",
      count: "264",
      percentage: "45%",
      icon: (
        <MeetingRoom
          color="inherit"
          style={{ width: "40px", height: "40px" }}
          width={120}
          height={120}
        />
      ),
      background: "#931152",
    },
  ];

  return (
    <Box
      paddingBlock={3}
      gap={2}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems:"center",
        "& > :not(style)": {
          borderRadius: "20px",
          width: "100%", // Default width for smaller screens
          height: 120,
          [theme.breakpoints.up("sm")]: {
            width: 230, // Set width for screens larger than or equal to "sm" breakpoint
          },
          "@media (max-width: 600px)": {
            width: 400, // Adjust width for screens smaller than or equal to 600px
          
          },
        },
      }}
    >
      {analyticsItems.map((item, index) => (
        <Paper
          key={index}
          elevation={6}
          sx={{
            position: "relative",
            display: "grid",
            padding: "0.75rem",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
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
              background: item.background,
              color: "#ffff",
            }}
            padding={1}
          >
            {item.icon}
          </Box>

          <Box
            sx={{
              display: "grid",
              alignContent: "end",
              textAlign: "center",
            }}
          >

            <Typography variant="h6" sx={{ color: item.background }}>{item.percentage}</Typography>
            <Typography component={Link} to="/about" fontSize={12} paragraph>View Details</Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              alignContent: "space-between",
              textAlign: "center",
            }}
          >
            <Typography paragraph sx={{ color: item.background }}>
              {item.title}
            </Typography>
            <Typography variant="h6">{item.count}</Typography>
            <Typography component={Link} to="/about" fontSize={12} paragraph>View on map</Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};
export default DashboardAnalyticsCard;
