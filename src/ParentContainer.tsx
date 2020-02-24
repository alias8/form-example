import React, { useState } from "react";
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
import ContactInformationForm from "./InputForm/ContactInformationForm";
import logo from "./hero.png";
import { BLUE, ORANGE } from "./utils/constants";
import AddressInformationForm from "./InputForm/AddressInformation";
import DescriptionInformationForm from "./InputForm/DescriptionInformation";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from "@material-ui/core";

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
  },
  tableLabel: {
    width: 165
  }
}));

export function ParentContainer() {
  const [validObject, setValidObject] = useState({
    contact: false,
    address: false,
    description: false
  });

  const [allInfo, setAllInfo] = useState({
    contactOwner: "",
    honorific: "",
    firstName: "",
    lastName: "",
    accountName: "",
    companyName: "",
    phone: "",
    fax: "",
    title: "",
    email: "",
    emailOptOut: false,
    address: "",
    description: ""
  });

  const onCancel = () => {
    // todo: how to reset formik?
  };

  const onSubmit = () => {
    if (validObject.contact && validObject.address && validObject.description) {
      console.log(allInfo);
    }
  };

  const classes = useStyles();

  const rows = [
    {
      label: "Contact Owner",
      value: allInfo.contactOwner
    },
    {
      label: "Account Name",
      value: allInfo.accountName
    },
    {
      label: "Company Name",
      value: allInfo.companyName
    },
    {
      label: "Phone",
      value: allInfo.phone
    },
    {
      label: "Email",
      value: allInfo.email
    },
    {
      label: "Address",
      value: allInfo.address
    },
    {
      label: "Description",
      value: allInfo.description
    }
  ];

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
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.saveButton}
            onClick={onSubmit}
          >
            Save
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={6}>
            <ContactInformationForm
              formValid={() => {
                setValidObject(prevState => {
                  return { ...prevState, contact: true };
                });
              }}
              updateLive={values => {
                setAllInfo(prevState => {
                  return {
                    ...prevState,
                    ...values
                  };
                });
              }}
            />
            {validObject.contact && (
              <AddressInformationForm
                formValid={() => {
                  setValidObject(prevState => {
                    return { ...prevState, address: true };
                  });
                }}
                updateLive={values => {
                  setAllInfo(prevState => {
                    return {
                      ...prevState,
                      ...values
                    };
                  });
                }}
              />
            )}
            {validObject.contact && validObject.address && (
              <DescriptionInformationForm
                formValid={() => {
                  setValidObject(prevState => {
                    return { ...prevState, description: true };
                  });
                }}
                updateLive={values => {
                  setAllInfo(prevState => {
                    return {
                      ...prevState,
                      ...values
                    };
                  });
                }}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            <Card>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.label}>
                        <TableCell align="right" className={classes.tableLabel}>
                          {row.label}
                        </TableCell>
                        <TableCell align="left">{row.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
