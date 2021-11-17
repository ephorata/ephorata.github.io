import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Grid } from "@material-ui/core";

import MenuBar from "./components/Appbar/MenuBar";
import { ThreeDBanner } from "./components/ThreeDBanner.jsx";
import { Devices } from "./components/Devices";
import { HeaderText } from "./components/HeaderText";
import { SeeInAR } from "./components/SeeInAR";
import { DevicesHeaderText } from "./components/DevicesHeaderText";
// import the custom styles
import "./styles/FadeInsection.css";
import { theme } from "./styles/CustomStyles";
import { Footer } from "./components/Footer";
import { Invite } from "./components/Invite";

const useStyles = makeStyles({
  root: {},
});

function App(props) {
  const classes = useStyles();

  return (
    // <ThemeProvider theme={theme}>
    <>
      <Container>
        <Grid container className={classes.root}>
          <MenuBar />
          <HeaderText />
          <Grid item xs={12}>
            <ThreeDBanner />
          </Grid>
          <Grid item xs={12}>
            <SeeInAR />
          </Grid>
          <Grid item xs={12}>
            <DevicesHeaderText />
          </Grid>
          <Grid item xs={12}>
            <Devices />
          </Grid>

          <Grid item xs={12}>
            <Invite />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
    // </ThemeProvider>
  );
}

export default App;
