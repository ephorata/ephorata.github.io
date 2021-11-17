import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBarCollapse from "./AppBarCollapse";
import { Box, Container } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navigation: {
    backgroundColor: "#fff",
    color: "#000",
  },
  toggleDrawer: {},
  appTitle: {},
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <AppBar position="fixed" className={classes.navigation} elevation={1}>
      <Container>
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            className={classes.appTitle}
          >
            <Box className={classes.logo}>
              <img
                alt=""
                src="/assets/images/logo.png"
                width="55px"
                height="55px"
              />
            </Box>
          </Typography>
          <AppBarCollapse />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
