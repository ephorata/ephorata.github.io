import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  typo: {
    fontFamily: "Montserrat",
    textAlign: "center",
    fontSize: "1.5rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.125rem",
    },
  },
  outerContainer: {
    width: "100%",
  },
}));

export const HeaderText = (props) => {
  const classes = useStyles();
  return (
    <Box mt={15} mb={5} className={classes.outerContainer}>
      <Grid container justify="center" xs={12}>
        <Typography variant="h4" className={classes.typo}>
          <strong>Introducing the X card. Store and unlock</strong>
        </Typography>
      </Grid>
      <Grid container justify="center" xs={12}>
        <Typography variant="h4" className={classes.typo}>
          <strong>your crypto. Works everywhere.</strong>
        </Typography>
      </Grid>
    </Box>
  );
};
