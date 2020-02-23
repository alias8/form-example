import React, { Component, useState } from "react";
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
import { MySelect } from "./MySelectInput";

const styles = (theme: Theme) =>
  createStyles({
    heading: {
      color: ORANGE
    },
    firstName: {
      flexBasis: "70%"
    },
    honorific: {
      flexBasis: "30%"
    },
    firstNameContainer: {
      display: "flex",
      alignItems: "center"
    }
  });

const validationSchema = Yup.object().shape({
  contactName: Yup.string()
    .typeError("Enter a contact name")
    .required("Contact name is required"),
  honorific: Yup.string()
    .typeError("Select an honorific")
    .required("An honorific is required"),
  firstName: Yup.string()
    .typeError("Enter a first name")
    .required("First name is required"),
  lastName: Yup.string()
    .typeError("Enter a last name")
    .required("Last name is required"),
  accountName: Yup.string()
    .typeError("Enter an account name")
    .required("Account name is required"),
  companyName: Yup.string(),
  phone: Yup.string()
    .typeError("Enter a phone number")
    .required("Phone number is required")
    .matches(/\d{8,10}/),
  fax: Yup.string()
    .typeError("Enter a valid fax number")
    .matches(/\d{8,10}/),
  title: Yup.string()
    .typeError("Select a title")
    .required("A title is required"),
  email: Yup.string()
    .typeError("Enter a valid email")
    .required("Email is required")
    .email(),
  emailOptOut: Yup.boolean().typeError("Select a valid emailOptOut option")
});

interface IProps extends WithStyles<typeof styles> {
  formValid: () => void;
}

const ContactInformationForm = (props: IProps) => {
  const { classes, formValid } = props;
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
          email: "",
          emailOptOut: false
        }}
        validationSchema={validationSchema}
        validate={values => {
          const valid = validationSchema.isValidSync(values);
          if (valid) {
            formValid();
            return {};
          }
        }}
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
              <div className={classes.firstNameContainer}>
                <MySelect
                  styles={classes.honorific}
                  label="First Name"
                  name="honorific"
                  type="text"
                  placeholder=""
                />
                <MyTextInput
                  styles={classes.firstName}
                  label=""
                  name="firstName"
                  type="text"
                  placeholder=""
                />
              </div>
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
          <MyCheckbox name="emailOptOut" type="checkbox">
            Email opt out
          </MyCheckbox>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default withStyles(styles)(ContactInformationForm);