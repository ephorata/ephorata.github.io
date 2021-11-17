import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import FadeInSection from "./FadeInSection";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#ffab40",
  },
  typo: {
    textAlign: "center",
    fontFamily: "Montserrat",
    paddingBottom: "1.2rem",
    fontSize: "1.3rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  },
  desc: {
    textAlign: "center",
    fontFamily: "Montserrat",
    paddingTop: "2rem",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    paddingBottom: "3rem",
    fontSize: "1.1rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: "7rem",
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "7rem",
      fontSize: "1.5rem",
    },
  },
  typo1: {
    fontFamily: "Montserrat",
    textAlign: "center",
    padding: "1.5rem",
    fontSize: "1.3rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  },
  txField: {
    width: "100%",
    borderRadius: "1em",
    // paddingTop: "1rem",
    border: "none",
    outline: "none",
  },
  textBox: {
    width: "100%",
    // marginLeft: "10%",
    // padding: "5%",
  },
  txBoxField: {
    padding: "1em",
  },
  btn: {
    width: "80%",
    margin: "1em",
  },
  notchedOutline: {
    borderWidth: "5px",
    borderColor: "#f9aa46 !important",
    color: "rgb(61, 158, 116)",
  },
  boxes: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export const Invite = () => {
  const classes = useStyles();

  return (
    <>
      <FadeInSection key={1}>
        <Box mt={"5%"} mb={"5%"}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} sm={6}>
              <img
                src="./assets/images/shutterstock_1739241281.jpg"
                width={"100%"}
                height={"350"}
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.boxes}>
              <Typography
                variant="h5"
                textAlign="center"
                className={classes.typo1}
              >
                <strong>
                  Can connect to your personal devices which run our Android,
                  iOS, OSx, Linux or Android app.
                </strong>
              </Typography>
              <Typography
                variant="h5"
                textAlign="center"
                className={classes.typo1}
              >
                <strong>
                  The app is locked by 2fa, so dont worry if you lose your
                  phone.
                </strong>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </FadeInSection>

      <FadeInSection key={2}>
        <Box>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box textAlign="center" className={classes.descBox}>
                <Typography
                  textAlign="center"
                  variant="h5"
                  className={classes.desc}
                >
                  <strong>
                    And yeah, first 1L card holders will get upto 2500 XCoins in
                    ICO, which could be worth upwards of Rs 2.5L. Register to
                    get the white paper.
                  </strong>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box textAlign="center" className={classes.textBox}>
                <Typography variant="h4" className={classes.typo}>
                  <strong>We are taking invite only application now</strong>
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
                    InputProps={{
                      classes: {
                        root: classes.notchedOutline,
                        focused: classes.notchedOutline,
                        notchedOutline: classes.notchedOutline,
                      },
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
                    InputProps={{
                      classes: {
                        root: classes.notchedOutline,
                        focused: classes.notchedOutline,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                </Box>
                <Box className={classes.txBoxField}>
                  <TextField
                    className={classes.txField}
                    label="Invite code"
                    name="invite"
                    variant="outlined"
                    value={""}
                    placeholder="Invite code"
                    onChange={() => {
                      "";
                    }}
                    InputProps={{
                      classes: {
                        root: classes.notchedOutline,
                        focused: classes.notchedOutline,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                </Box>
                <Box className={classes.txBoxField}>
                  <Button
                    className={classes.btn}
                    style={{ backgroundColor: "#f9aa46", color: "#ffffff" }}
                  >
                    Get the x card
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </FadeInSection>
    </>
  );
};
