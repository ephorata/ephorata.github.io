import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import FadeInSection from "./FadeInSection";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 350,
    transition: "transform 0.15s ease-in-out",
    backgroundSize: "cover",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  root2: {
    height: "4em",
    transition: "transform 0.15s ease-in-out",
    border: "4px",
    borderRadius: 30,
    backgroundColor: "#ffab40",
    width: "100%",
    height: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
  },
  device: {
    paddingTop: 50,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontFamily: "Montserrat",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "1.3rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.8rem",
    },
  },
}));

export const Devices = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    raised: false,
    element: 0,
    shadow: 1,
  });

  return (
    <>
      <FadeInSection key={1}>
        <Grid container spacing={5} className={classes.device}>
          <Grid item xs={12} md={6}>
            <Box
              className={classes.root}
              classes={{
                root:
                  state.raised && state.element === 1
                    ? classes.cardHovered
                    : "",
              }}
              onMouseOver={() =>
                setState({ raised: true, element: 1, shadow: 3 })
              }
              onMouseOut={() =>
                setState({ raised: false, element: 0, shadow: 1 })
              }
              style={{
                backgroundImage:
                  "url(./assets/images/shutterstock_1638159181.jpg)",
              }}
            >
              <Typography className={classes.text}>
                Store your crypto on the X silicon, inside your card, secure and
                cold.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} align="center">
            <Box
              className={classes.root2}
              classes={{
                root:
                  state.raised && state.element === 2
                    ? classes.cardHovered
                    : "",
              }}
              onMouseOver={() =>
                setState({ raised: true, element: 2, shadow: 3 })
              }
              onMouseOut={() =>
                setState({ raised: false, element: 0, shadow: 1 })
              }
            >
              <Typography className={classes.text}>
                Your crypto gets converted into real world fiat. You can swipe
                it at any terminal that accepts a card.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </FadeInSection>

      <FadeInSection key={2}>
        <Grid container spacing={5} className={classes.device}>
          <Grid item xs={12} md={6} align="center">
            <Box
              className={classes.root2}
              classes={{
                root:
                  state.raised && state.element === 3
                    ? classes.cardHovered
                    : "",
              }}
              onMouseOver={() =>
                setState({ raised: true, element: 3, shadow: 3 })
              }
              onMouseOut={() =>
                setState({ raised: false, element: 0, shadow: 1 })
              }
            >
              <Typography className={classes.text}>
                Yes, you can use your Bitcoin investment backed fiat to buy your
                lunch, pay your rent, and much more.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} align="center">
            <Box
              className={classes.root}
              classes={{
                root:
                  state.raised && state.element === 4
                    ? classes.cardHovered
                    : "",
              }}
              onMouseOver={() =>
                setState({ raised: true, element: 4, shadow: 3 })
              }
              onMouseOut={() =>
                setState({ raised: false, element: 0, shadow: 1 })
              }
              style={{
                backgroundImage:
                  "url(./assets/images/shutterstock_1846425430.jpg)",
              }}
            >
              <Typography className={classes.text}>
                Flat 1% cashback on all your fiat spends. In the crypto of your
                choice.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </FadeInSection>

      <FadeInSection key={3}>
        <Grid container spacing={5} className={classes.device}>
          <Grid item xs={12} md={6} align="center">
            <Box
              className={classes.root}
              classes={{
                root:
                  state.raised && state.element === 5
                    ? classes.cardHovered
                    : "",
              }}
              onMouseOver={() =>
                setState({ raised: true, element: 5, shadow: 3 })
              }
              onMouseOut={() =>
                setState({ raised: false, element: 0, shadow: 1 })
              }
              style={{
                backgroundImage: "url(./assets/images/progress_bar.jpg)",
              }}
            >
              <Box>
                <img
                  alt=""
                  src="./assets/images/progress_bar.png"
                  width="100%"
                  height="350px"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} align="center">
            <Box
              className={classes.root2}
              classes={{
                root:
                  state.raised && state.element === 6
                    ? classes.cardHovered
                    : "",
              }}
              onMouseOver={() =>
                setState({ raised: true, element: 6, shadow: 3 })
              }
              onMouseOut={() =>
                setState({ raised: false, element: 0, shadow: 1 })
              }
            >
              <Typography className={classes.text}>
                Zero joining fees. Zero renewal fees, forever. 45 day interest
                free. Convert to EMI at 13%pa.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </FadeInSection>

      <FadeInSection key={4}>
        <Grid container spacing={5} className={classes.device}>
          <Grid item xs={12} md={6} align="center">
            <Box
              className={classes.root2}
              classes={{
                root:
                  state.raised && state.element === 7
                    ? classes.cardHovered
                    : "",
              }}
              onMouseOver={() =>
                setState({ raised: true, element: 7, shadow: 3 })
              }
              onMouseOut={() =>
                setState({ raised: false, element: 0, shadow: 1 })
              }
            >
              <Typography className={classes.text}>
                The X chip is for Rs 2,500.
              </Typography>
              <Typography className={classes.text}>
                Everything else is as close to free as possible.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} align="center">
            <Box
              className={classes.root}
              classes={{
                root:
                  state.raised && state.element === 8
                    ? classes.cardHovered
                    : "",
              }}
              onMouseOver={() =>
                setState({ raised: true, element: 8, shadow: 3 })
              }
              onMouseOut={() =>
                setState({ raised: false, element: 0, shadow: 1 })
              }
              style={{
                backgroundImage:
                  "url(./assets/images/shutterstock_1917989909.jpg)",
              }}
            >
              <Typography className={classes.text}>
                What will YOU do with you X card?
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </FadeInSection>
    </>
  );
};
