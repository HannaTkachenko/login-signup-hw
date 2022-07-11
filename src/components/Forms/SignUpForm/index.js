import React from "react";
import { Formik, Form, Field } from "formik";
import WrappedInput from "../WrappedInput";
import WrappedRadioInput from "./../WrappedRadioInput/index";
import { SCHEMA_LOGIN } from "../../../utils/schemaValidation";
import styles from "./SignUpForm.module.scss";

const initialValues = {
  fname: "",
  lname: "",
  displayName: "",
  email: "",
  password: "",
  passconfirm: "",
};
const SignUpForm = (props) => {
  const onSubmit = (value, formikBag) => {
    console.log("value: ", value);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SCHEMA_LOGIN}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        console.log("formikProps:", formikProps);
        return (
          <Form className={styles.form}>
            <label className={styles.inputs}>
              <WrappedInput name="fname" placeholder="First name" />
              <WrappedInput name="lname" placeholder="Last name" />
              <WrappedInput name="displayName" placeholder="Display name" />
              <WrappedInput name="email" placeholder="Email address" />
              <WrappedInput
                name="password"
                type="password"
                placeholder="Password"
              />
              <WrappedInput
                name="passconfirm"
                type="password"
                placeholder="Password confirmation"
              />
            </label>
            <WrappedRadioInput />

            <input
              type="submit"
              value="Create account"
              className={styles.input}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
