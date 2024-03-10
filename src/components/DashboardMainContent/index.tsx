import { Box, Button, Paper, Toolbar, Typography } from "@mui/material";
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

export const DashboardMainContent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });

  
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });
  const [activeMarker, setActiveMarker] = useState(null);

  // type CustomMarker = MarkerType;

  const [markers, setMarkers] = useState<any[]>([]);

  useEffect(() => {
    const vehicleMarkers = transformMarkersData(markersData);
    setMarkers(vehicleMarkers);
  
   // Get user's current position
   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
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

  if (!isLoaded) {
    return <h1>Not Loaded</h1>;
  }

  const center = { lat: 48.8584, lng: 2.29845 };
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

      <Box component="div" paddingBlock={3}>
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            height: "350px",
            borderRadius: "8px",
            color: "black",
          }}
        >
          <GoogleMap
            center={currentPosition}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{}}
            onClick={() => {
              setActiveMarker(null);
            }}
          >
            {markers.map(({ id, name, status, position, iconUrl }: any) => (
              <MarkerF
                key={id}
                position={position}
                onClick={() => {
                  handleActiveMarker(id);
                }}
                icon={{
                  url: iconUrl,

                  scaledSize: new google.maps.Size(30,30)
                }}
              >
                {activeMarker === id ? (
                  <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                    <Box component="div">
                      <Typography paragraph>{name}</Typography>
                      <Typography paragraph>{status}</Typography>
                    </Box>
                  </InfoWindowF>
                ) : null}
              </MarkerF>
            ))}
          </GoogleMap>
          <Searchbar
            sx={{
              position: "absolute",
              right: "5%",
              top: "2.5%",
              p: "0rem 0.75rem",
              display: "flex",
              alignItems: "center",
              width: 250,
              borderRadius: "20px",
            }}
          />
        </Paper>
      </Box>
      <Typography variant="h6" fontWeight={600}>
        Selected records
      </Typography>
      <Box component="div" paddingBlock={3}>
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
          Selected records table
        </Paper>
      </Box>

      <Typography variant="h6" fontWeight={600}>
        Records
      </Typography>
      <Box component="div" paddingBlock={3}>
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
          Records table
        </Paper>
      </Box>
    </Box>
  );
};

export default DashboardMainContent;
