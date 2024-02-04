/*import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";*/

import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import {Box, createTheme, Stack, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import {useState} from "react";

const App = () => {
/*  const BlueButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue"
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white"
    }
  }));*/

  const [mode, setMode] = useState("light");
  const mainTheme = createTheme({
    palette: {
      mode
    }
  });

  return (
    /*<div>
      Hello world!
      <Button variant="text" color="otherColor" endIcon={<Add />}>
        Add new
      </Button>
      <Button startIcon={<Settings />} variant="contained" color="secondary" size="small">Contained</Button>
      <Button variant="outlined" disabled>Outlined</Button>
      <Typography variant="h1">
        h1. Heading
      </Typography>
      <Typography variant="h1" component="h2">
        It's h1 font size but h2 component
      </Typography>
      {/!*<Button variant="contained" sx={{
        backgroundColor: "skyblue",
        color: "#888",
        m: 5,
        "&:hover": {
          backgroundColor: "lightblue"
        },
        "&:disabled": {
          backgroundColor: "gray",
          color: "white"
        }
      }}>
        My unique btn
      </Button>
      <Button variant="contained" sx={{
        backgroundColor: "skyblue",
        color: "#888",
        m: 5,
        "&:hover": {
          backgroundColor: "lightblue"
        },
        "&:disabled": {
          backgroundColor: "gray",
          color: "white"
        }
      }}>
        My unique btn
      </Button>*!/}
      <BlueButton>My btn</BlueButton>
      <BlueButton>Another btn</BlueButton>
    </div>*/
    <ThemeProvider theme={mainTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar
            mode={mode}
            setMode={setMode}
          />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
