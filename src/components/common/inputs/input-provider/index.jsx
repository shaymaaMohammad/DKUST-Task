import { InputTypes } from "../../../../constants/enums";
import CheckboxComponent from "../checkbox";
import InputComponent from "../input-component";
import SelectComponent from "../select";
import { useTranslation } from "react-i18next";

const InputProvider = ({ itemObject, ...props }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ar";

  const rawField = itemObject ?? props;
  const type = rawField?.type;

  const translatedFieldLabel =
    rawField?.fieldLabel && typeof rawField.fieldLabel === "object"
      ? rawField.fieldLabel[currentLang]
      : rawField?.fieldLabel;

  const field = {
    ...rawField,
    fieldLabel: translatedFieldLabel,
  };

  if (type === InputTypes.CHECKBOX || type === InputTypes.RADIO) {
    return <CheckboxComponent itemObject={field} />;
  }

  if (
    type === InputTypes.EMAIL ||
    type === InputTypes.PASSWORD ||
    type === InputTypes.TEXT
  ) {
    return <InputComponent itemObject={field} />;
  }

  if (type === InputTypes.SELECT) {
    return <SelectComponent itemObject={field} />;
  }

  return null;
};

export default InputProvider;
