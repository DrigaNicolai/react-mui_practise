/*import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";*/

import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import {Box, Stack} from "@mui/material";

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
    <Box>
      {/*navbar*/}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
