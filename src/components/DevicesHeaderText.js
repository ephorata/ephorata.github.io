import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  deviceHeader: {
    fontFamily: "Montserrat",
    paddingTop: "1em",
    textAlign: "center",
    fontSize: "1.5rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.125rem",
    },
  },
}));

export const DevicesHeaderText = (props) => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container justify="center">
        <Typography className={classes.deviceHeader}>
          <strong>The crypto device you NEED to possess.</strong>
        </Typography>
      </Grid>
    </Box>
  );
};
