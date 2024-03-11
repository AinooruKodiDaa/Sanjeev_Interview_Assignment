import { Box, Paper, Typography } from "@mui/material";
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import Searchbar from "../../ui/Searchbar";
import { useEffect, useState } from "react";
import { transformMarkersData } from "../../utils";
import markersData from "../../MOCK_DATA.json"

const DashboardTrackOnMap = (props:any)=>{
    const {} = props;
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
      });

    const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });
    const [activeMarker, setActiveMarker] = useState(null);
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

    }, [])
    
    const handleActiveMarker = (marker: any) => {
        if (marker === activeMarker) return;
    
        setActiveMarker(marker);
      };
    
      if (!isLoaded) {
        return <h1>Not Loaded</h1>;
      }

return(
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

            scaledSize: new google.maps.Size(30, 30),
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
  </Paper>)
};

export default DashboardTrackOnMap