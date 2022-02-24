import { ThemeProvider } from "@emotion/react";
import { Button, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme.theme}>
      <Paper>
        <BrowserRouter>
          <NavBar></NavBar>
          <Button variant="contained">Hello World</Button>
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
