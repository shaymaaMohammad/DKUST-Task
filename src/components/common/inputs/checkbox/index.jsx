import { Form } from "react-bootstrap";

const CheckboxComponent = ({
  itemObject,
  ...props
}) => {

  const {
    type,
    id,
    name,
    fieldLabel,
    fieldValue,
    onChangeFunction,
    value,
    feedbackState,
    isAnswered,
  } = itemObject ?? props;

  return (
    <div
      className={`answerOption ${feedbackState}`}
    >

      <Form.Check
        type={type}
        id={id || name}
        name={name}
        label={fieldLabel}
        value={value}

        checked={
          type === "radio"
            ? fieldValue === value
            : Boolean(fieldValue)
        }

        disabled={
          type === "radio" && isAnswered
        }

        onChange={(event) =>
          onChangeFunction?.(
            type === "radio"
              ? event.target.value
              : event.target.checked
          )
        }
      />

      {feedbackState === "correct" && (
        <span className="answerStatus">
          Correct
        </span>
      )}

    </div>
  );
};

export default CheckboxComponent;