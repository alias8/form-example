import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputForm from "./InputForm";
import logo from "./hero.png";
import { BLUE, ORANGE } from "./utils/constants";
import classnames from "classnames";

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap",
    backgroundColor: BLUE,
    color: "white"
  },
  cancelButton: {
    backgroundColor: "white",
    color: ORANGE
  },
  saveButton: {
    backgroundColor: ORANGE,
    color: "white"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[700]
        : theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  },
  logo: {
    objectFit: "contain"
  }
}));

export function ParentContainer() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <img src={logo} alt="Logo" className={classes.logo} />
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Create Contact
          </Typography>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.cancelButton}
          >
            Cancel
          </Button>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.saveButton}
          >
            Save
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <InputForm />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>live data</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
