import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoieW91c3NlZmFpdGFsaSIsImEiOiJjazlidG1sN24wOTZ3M2xteDRqMDAyMnFpIn0.mJtJsexH-FgfIXOu6Mjsag";

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <Container
      maxWidth="100vw"
      disableGutters
      sx={{ height: "100vh", margin: "0" }}
    >
      <nav>NAVBAR</nav>
      <main>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={2}>
              <aside>ASIDE</aside>
            </Grid>
            <Grid item xs={10}>
              <div ref={mapContainer} className="map-container"></div>
            </Grid>
          </Grid>
        </Box>
      </main>
      <footer>
        <Button variant="text" size="large" startIcon={<LayersOutlinedIcon />}>
          Layers
        </Button>
      </footer>
    </Container>
  );
}

export default App;
