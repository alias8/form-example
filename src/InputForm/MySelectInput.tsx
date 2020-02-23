import { useField } from "formik";
import React, { HTMLProps } from "react";
import Select from "@material-ui/core/Select";
import clsx from "clsx";
import { MenuItem } from "@material-ui/core";

export const MySelect = ({ label, styles = {}, ...props }) => {
  // @ts-ignore
  const [field, meta] = useField(props);
  return (
    <div className={clsx(styles)}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Select {...field} {...props} variant="outlined">
        <MenuItem value={"Mr"}>Mr</MenuItem>
        <MenuItem value={"Mrs"}>Mrs</MenuItem>
      </Select>
      {meta.touched && meta.error ? (
        <div className={clsx("error")}>{meta.error}</div>
      ) : null}
    </div>
  );
};
