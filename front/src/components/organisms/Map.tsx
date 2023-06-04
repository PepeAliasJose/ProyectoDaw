import { PersonPinCircle } from "@material-ui/icons";
import { MapContainer as Mapa, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  const iconMarkup = <PersonPinCircle />;

  return (
    <Mapa
      center={[36.9195, -6.0781]}
      zoom={10}
      style={{
        height: "490px",
        width: "full",
        margin: "auto",
        borderRadius: "14px",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker draggable={true} position={[36.9195, -6.0781]} />
    </Mapa>
  );
};

export default Map;
