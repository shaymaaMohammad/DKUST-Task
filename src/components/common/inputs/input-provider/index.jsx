import { InputTypes } from "../../../../constants/enums";
import CheckboxComponent from "../checkbox";
import InputComponent from "../input-component";
import SelectComponent from "../select";

const InputProvider = ({ itemObject, ...props }) => {
  const field = itemObject ?? props;
  const type = field?.type;

  if (
    type === InputTypes.CHECKBOX ||
    type === InputTypes.RADIO
  ) {
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