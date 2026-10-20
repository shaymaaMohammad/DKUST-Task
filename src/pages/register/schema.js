import * as Yup from "yup";
import i18next from "i18next";

export const signupSchema = () =>
  Yup.object({
    firstName: Yup.string()
      .trim()
      .required(() => i18next.t("err_firstname_required")),
    lastName: Yup.string()
      .trim()
      .required(() => i18next.t("err_lastname_required")),
    email: Yup.string()
      .trim()
      .required(() => i18next.t("err_email_required"))
      .email(() => i18next.t("err_email_invalid")),
    password: Yup.string()
      .trim()
      .required(() => i18next.t("err_password_required"))
      .min(6, () => i18next.t("err_password_min")),
    confirmPassword: Yup.string()
      .required(() => i18next.t("err_confirm_password_required"))
      .oneOf([Yup.ref("password")], () => i18next.t("err_password_match")),
    agreeTerms: Yup.boolean().oneOf([true], () => i18next.t("err_agree_terms")),
  });
