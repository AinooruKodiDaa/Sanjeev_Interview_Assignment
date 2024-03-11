import {
  Box,
  Button,
  Paper,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import DashboardAnalyticsCard from "../DashboardAnalyticsCard";
import { drawerWidth } from "../../consts";
import Searchbar from "../../ui/Searchbar";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { Cancel } from "@mui/icons-material";
import markersData from "../../MOCK_DATA.json";
import { useEffect, useState } from "react";
import { InfoTrackIcon } from "../../ui/Icons/index";
import { MarkerType } from "../../types";
import { transformMarkersData } from "../../utils";
import { getAllProducts } from "../../api/handlers/products";
import { useProducts } from "../../api/hooks/products";
import DashboardTrackOnMap from "../DashboardTrackOnMap";
import BarChart from "../../ui/BarChart";
import RecordsTable from "../RecordsTable";

export const DashboardMainContent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });

  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });
  const [activeMarker, setActiveMarker] = useState(null);

  // type CustomMarker = MarkerType;

  const [markers, setMarkers] = useState<any[]>([]);
  const [apiData, setApiData] = useState<any>([]);
  const chartData = [
    { name: "Category 1", value: 20 },
    { name: "Category 2", value: 35 },
    { name: "Category 3", value: 40 },
    { name: "Category 4", value: 10 },
  ];

  const { allProductsQuery } = useProducts();
  useEffect(() => {
    setApiData(allProductsQuery.data);

    console.log("API", apiData);

    const vehicleMarkers = transformMarkersData(markersData);
    setMarkers(vehicleMarkers);

    // Get user's current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting current position:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleActiveMarker = (marker: any) => {
    if (marker === activeMarker) return;

    setActiveMarker(marker);
  };

  const theme = useTheme();

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
      <DashboardAnalyticsCard markersData={markersData} />
      <Typography variant="h6" fontWeight={600}>
        Track on map
      </Typography>
      <Box component="div" paddingBlock={3}>
        <DashboardTrackOnMap />
      </Box>
      <Typography variant="h6" fontWeight={600}>
        Selected records
      </Typography>
      <Box
        component="div"
        paddingBlock={3}
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",

          "@media (max-width: 600px)": {
            gridTemplateColumns: "1fr",
          },
        }}
      >
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "250px",
            borderRadius: "8px",
            color: "black",
          }}
        >
          No Selected records
        </Paper>
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "250px",
            borderRadius: "8px",
            color: "black",
          }}
        >
          <BarChart data={chartData} />
        </Paper>
      </Box>

   
      <Box component="div" paddingBlock={3}>
       
         <RecordsTable products={apiData}/>
      
      </Box>
    </Box>
  );
};

export default DashboardMainContent;
