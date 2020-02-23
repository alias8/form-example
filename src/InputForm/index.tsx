import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import * as yup from "yup";
import Paper from "@material-ui/core/Paper";
import {Form} from "./form";
import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme
            .spacing(5)}px`
    },
    container: {
        maxWidth: "200px"
    }
});

const validationSchema = yup.object().shape({
    name: yup.string()
        .typeError("Enter a name")
        .required("Name is required"),
    email: yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
});

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const classes = this.props;
        const values = { name: "", email: ""};
        return (
            <Formik
                render={props => <Form {...props} />}
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 1000);
                }}
            />
        );
    }
}

export default withStyles(styles)(InputForm);
