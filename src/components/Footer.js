import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#ffab40",
  },
  typo: {
    textAlign: "center",
    fontFamily: "cursive",
    fontSize: "1.2rem",
    color: "#FFFFFF",
    padding: "1.3rem",

    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.3rem",
    },
  },
  txField: {
    width: "100%",
    backgroundColor: "#fbe5cd",
    border: "1em",
    borderRadius: "0.5em",
    borderColor: "#ffab40",
  },
  textBox: {
    width: "90%",
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
    // marginLeft: "10%",
    // padding: "5%",
  },
  txBoxField: {
    padding: "1em",
  },
  btn: {
    width: "100%",

    "&:hover": {
      backgroundColor: "#ffffff",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#ffffff",
    },
  },
  btcolor: {
    color: "red",
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.bg} justify="center">
      <Grid item className={classes.textBox}>
        <Typography variant="h4" className={classes.typo}>
          Don't have an invite, don't worry, you can still request one here. We
          will try to cover you.
        </Typography>
        <Box className={classes.txBoxField}>
          <TextField
            className={classes.txField}
            label="Name"
            name="name"
            variant="outlined"
            value={""}
            placeholder="Name"
            onChange={() => {
              "";
            }}
          />
        </Box>

        <Box className={classes.txBoxField}>
          <TextField
            className={classes.txField}
            label="Phone number"
            name="phone"
            variant="outlined"
            value={""}
            placeholder="Phone number"
            onChange={() => {
              "";
            }}
          />
        </Box>
        <Box className={classes.txBoxField}>
          <TextField
            className={classes.txField}
            label="Wallet public address"
            name="invite"
            variant="outlined"
            value={""}
            placeholder="Wallet Public Address"
            onChange={() => {
              "";
            }}
          />
        </Box>
        <Box className={classes.txBoxField}>
          <Button
            className={classes.btn}
            style={{ backgroundColor: "#ffffff", color: "#f9aa46" }}
          >
            Request Invite
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
