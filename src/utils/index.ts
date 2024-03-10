import { MarkerType } from "../types";

export const transformMarkersData = (markers: MarkerType[]) => {
    let iconUrl: string;
    return markers.map((marker: MarkerType) => {
      switch (marker.status) {
        case "Moving":
          iconUrl = "/images/Moving.svg";
          break;

        case "Stopped":
          iconUrl = "/images/Stopped.svg";
          break;

        case "Idle":
          iconUrl = "/images/Idle.svg";
          break;

        case "Inactive":
          iconUrl = "/images/Inactive.svg";
          break;

        case "Out of service":
          iconUrl = "/images/OutOfService.svg";
          break;

        default:
          break;
      }

      return { ...marker, iconUrl };
    });
  };
