import { Box, Button, Paper, Toolbar, Typography } from "@mui/material";
import DashboardAnalyticsCard from "../DashboardAnalyticsCard";
import { drawerWidth } from "../../consts";


export const DashboardMainContent = () => {
  return (
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

      <DashboardAnalyticsCard />

      <Typography variant="h6" fontWeight={600}>
        Track on map
      </Typography>
      <Box component="div" paddingBlock={3} >
      
      <Paper
        elevation={6}
        
        

        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height:"250px",
          borderRadius: "8px",
          color: "black",
          
        }}
      >
        Map component
      </Paper>



      </Box>

      <Typography variant="h6" fontWeight={600}>
        Selected records
      </Typography>
      <Box component="div" paddingBlock={3} >
      <Paper
        elevation={6}
        
        

        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height:"250px",
          borderRadius: "8px",
          color: "black",
          
        }}
      >
        Selected records table
      </Paper>



      </Box>
      

      <Typography variant="h6" fontWeight={600}>
        Records
      </Typography>
      <Box component="div" paddingBlock={3} >
      <Paper
        elevation={6}
        
        

        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height:"250px",
          borderRadius: "8px",
          color: "black",
          
        }}
      >
        Records table
      </Paper>



      </Box>

    </Box>
  );
};

export default DashboardMainContent;
