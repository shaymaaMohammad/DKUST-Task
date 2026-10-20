import * as Yup from "yup";

import i18next from "i18next";

export const loginSchema = () =>
  Yup.object({
    email: Yup.string()
      .trim()
      .required(() => i18next.t("err_email_required"))
      .email(() => i18next.t("err_email_invalid")),
    password: Yup.string()
      .trim()
      .required(() => i18next.t("err_password_required"))
      .min(6, () => i18next.t("err_password_min")),
  });
