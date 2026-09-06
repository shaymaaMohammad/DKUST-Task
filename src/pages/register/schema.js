import * as Yup from "yup";

export const signupSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .required("First name is required."),
  lastName: Yup.string()
    .trim()
    .required("Last name is required."),
  email: Yup.string()
    .trim()
    .required("Email is required.")
    .email("Please enter a valid email address."),
  password: Yup.string()
    .trim()
    .required("Password is required.")
    .min(6, "Password must be at least 6 characters."),
  confirmPassword: Yup.string()
    .required("Please confirm your password.")
    .oneOf([Yup.ref("password")], "Password and confirm password must match."),
  agreeTerms: Yup.boolean()
    .oneOf([true], "You must agree to the terms before continuing.")
});
