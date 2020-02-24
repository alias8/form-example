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
  description: Yup.string().typeError("Enter a description")
});

interface IProps extends WithStyles<typeof styles> {
  formValid: () => void;
  updateLive: ({}: { description: string }) => void;
}

const DescriptionInformationForm = (props: IProps) => {
  const { classes, formValid, updateLive } = props;
  return (
    <>
      <Formik
        initialValues={{
          description: ""
        }}
        validationSchema={validationSchema}
        validate={values => {
          return validationSchema
            .validate(values)
            .then(result => {
              formValid();
              updateLive({
                description: result.description
              });
              return result;
            })
            .catch(error => {
              updateLive({
                description: error.value.description
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
          <h2 className={classes.heading}>Description Information</h2>
          <Grid container spacing={5} alignItems="flex-end">
            <Grid item xs={12}>
              <MyTextInput
                label="Description"
                name="description"
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

export default withStyles(styles)(DescriptionInformationForm);
