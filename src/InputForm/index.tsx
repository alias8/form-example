import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik, useField } from "formik";
import * as Yup from "yup";
import MyTextInput from "./MyTextInput";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import { ORANGE } from "../utils/constants";
import MyCheckbox from "./MyCheckbox";

const styles = (theme: Theme) =>
  createStyles({
    heading: {
      color: ORANGE
    },
    firstName: {
      flexBasis: "80%"
    },
    honorific: {
      flexBasis: "20%"
    },
    firstNameContainer: {
      display: "flex",
      alignItems: "center"
    }
  });

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .typeError("Enter a name")
    .required("Name is required"),
  lastName: Yup.string()
    .typeError("Enter a name")
    .required("Name is required")
});

interface IProps extends WithStyles<typeof styles> {}

const InputForm = (props: IProps) => {
  const { classes } = props;
  return (
    <>
      <Formik
        initialValues={{
          contactOwner: "",
          honorific: "",
          firstName: "",
          lastName: "",
          accountName: "",
          companyName: "",
          phone: "",
          fax: "",
          title: "",
          email: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <h2 className={classes.heading}>Contact information</h2>
          <Grid container spacing={5} alignItems="flex-end">
            <Grid item xs={6}>
              <MyTextInput
                label="Contact Owner"
                name="contactOwner"
                type="text"
                placeholder=""
              />
            </Grid>
          </Grid>
          <Grid container spacing={5} alignItems="flex-end">
            <Grid item xs={6}>
              <MyTextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder=""
              />
              <MyTextInput
                label="Account Name"
                name="accountName"
                type="text"
                placeholder=""
              />
              <MyTextInput
                label="Phone"
                name="phone"
                type="text"
                placeholder=""
              />
              <MyTextInput
                label="Title"
                name="title"
                type="text"
                placeholder=""
              />
            </Grid>
            <Grid item xs={6}>
              <MyTextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder=""
              />
              <MyTextInput
                label="Company Name"
                name="companyName"
                type="text"
                placeholder=""
              />
              <MyTextInput
                label="Fax (optional)"
                name="fax"
                type="text"
                placeholder=""
              />
              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder=""
              />
            </Grid>
          </Grid>
          <MyCheckbox name="acceptedTerms">Email opt out</MyCheckbox>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default withStyles(styles)(InputForm);
