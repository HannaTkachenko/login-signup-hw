import * as Yup from "yup";

export const SCHEMA_NAME = Yup.string()
  .matches(/^[A-Z][a-z]{1,20}$/, "Must be latin letter")
  .required();

export const SCHEMA_EMAIL = Yup.string()
  .email("Enter correct email")
  .required();

export const SCHEMA_PASSWORD = Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,36}$/,
    "Enter correct password"
  )
  .required();

export const SCHEMA_LOGIN = Yup.object({
  email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD,
});

export const SCHEMA_SIGN_UP = Yup.object({
  fname: SCHEMA_NAME,
  lname: SCHEMA_NAME,
  displayName: SCHEMA_NAME,
  email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD,
  passconfirm:Yup.string().oneOf([Yup.ref('password')], 'Pass not equel')
});