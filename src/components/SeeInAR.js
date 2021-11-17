import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
const useStyles = makeStyles({
  typo: {
    fontFamily: "Montserrat",
    color: "#000",
    transition: "all 1s ease",
    "&:hover": {
      textDecoration: "none",
      transform: "scale(1.2)",
    },
  },
});

export const SeeInAR = (props) => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container justify="center">
        <Link className={classes.typo} href="#" variant="body1">
          See in AR.
        </Link>
      </Grid>
    </Box>
  );
};
