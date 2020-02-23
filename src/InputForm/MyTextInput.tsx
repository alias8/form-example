import { useField } from "formik";
import {
  createStyles,
  TextField,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core";
import React, { HTMLProps } from "react";
import clsx from "clsx";

const styles = (theme: Theme) =>
  createStyles({
    inputBox: {
      backgroundColor: "white"
    },
    container: {
      display: "flex",
      flexDirection: "column"
    }
  });

interface IOwnProps {
  styles?: {};
}

type IProps = IOwnProps &
  WithStyles<typeof styles> &
  HTMLProps<HTMLInputElement>;

const MyTextInput = ({ label, ...props }: IProps) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const { classes, styles } = props;
  // @ts-ignore
  const [field, meta] = useField(props);
  return (
    <div className={clsx(classes.container, styles)}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <TextField
        {...field}
        {...props}
        variant="outlined"
        size="small"
        className={clsx(classes.inputBox)}
      />
      {meta.touched && meta.error ? (
        <div className={clsx("error")}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default withStyles(styles)(MyTextInput);
