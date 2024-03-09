import {
  Cancel,
  Key,
  MeetingRoom,
  SignalWifiOff,
  SwapHoriz,
} from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";

const DashboardAnalyticsCard = () => {
  const analyticsItems = [
    {
      title: "Title",
      count: "200",
      percentage: "60%",
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
      title: "Title",
      count: "200",
      percentage: "60%",
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
      title: "Title",
      count: "200",
      percentage: "60%",
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
      title: "Title",
      count: "200",
      percentage: "60%",
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
      title: "Title",
      count: "200",
      percentage: "60%",
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
        "& > :not(style)": {
          borderRadius: "20px",
          width: 220,
          height: 120,
        },
      }}
    >
      {analyticsItems.map((item, index) => (
        <Paper key={index} elevation={6} sx={{ position: "relative" }}>
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
            <Typography paragraph>{item.percentage}</Typography>
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
            <Typography paragraph>View Details</Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};
export default DashboardAnalyticsCard;
