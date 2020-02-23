import React, { HTMLProps } from "react";
import { useField } from "formik";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core";

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

type IProps = WithStyles<typeof styles> & HTMLProps<HTMLInputElement>;

const MyCheckbox = ({ children, ...props }: IProps) => {
  // We need to tell useField what type of input this is
  // since React treats radios and checkboxes differently
  // than inputs/select/textarea.
  // @ts-ignore
  const [field, meta] = useField({ ...props });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default withStyles(styles)(MyCheckbox);
