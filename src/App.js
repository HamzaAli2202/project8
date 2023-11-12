import React from "react";
import { Card, CardContent } from "@mui/material";
import { Home } from "./components/Home";
function App() {
  return (
    <Card sx={{ bgcolor: "#C0C0C0" }}>
      <CardContent>
        <Home />
      </CardContent>
    </Card>
  );
}

export default App;
