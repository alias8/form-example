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
import { IContactInfo } from "./ContactInformationForm";

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
  street: Yup.string()
    .typeError("Enter street number and name")
    .required("Street number and name is required"),
  city: Yup.string()
    .typeError("Enter city")
    .required("City is required"),
  state: Yup.string()
    .typeError("Enter a state")
    .required("State is required"),
  postcode: Yup.string()
    .typeError("Enter a postcode")
    .required("Postcode is required")
    .matches(/\d{4}/, { excludeEmptyString: true })
});

interface IProps extends WithStyles<typeof styles> {
  formValid: () => void;
  updateLive: ({}: { address: string }) => void;
}

const AddressInformationForm = (props: IProps) => {
  const { classes, formValid, updateLive } = props;
  return (
    <>
      <Formik
        initialValues={{
          street: "",
          city: "",
          state: "",
          postcode: ""
        }}
        validationSchema={validationSchema}
        validate={values => {
          return validationSchema
            .validate(values)
            .then(result => {
              formValid();
              updateLive({
                address: `${result.street} ${result.city} ${result.state} ${result.postcode}`
              });
              return result;
            })
            .catch(error => {
              updateLive({
                address: `${error.value.street} ${error.value.city} ${error.value.state} ${error.value.postcode}`
              });
              return error;
            });
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <h2 className={classes.heading}>Address Information</h2>
          <Grid container spacing={5} alignItems="flex-end">
            <Grid item xs={6}>
              <MyTextInput
                label="Street No. & Street"
                name="street"
                type="text"
                placeholder=""
              />
              <MyTextInput
                label="State"
                name="state"
                type="text"
                placeholder=""
              />
            </Grid>
            <Grid item xs={6}>
              <MyTextInput
                label="City"
                name="city"
                type="text"
                placeholder=""
              />
              <MyTextInput
                label="Postcode"
                name="postcode"
                type="text"
                placeholder=""
              />
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </>
  );
};

export default withStyles(styles)(AddressInformationForm);
