const SelectComponent = ({ itemObject, ...props }) => {
  const {
    fieldLabel,
    fieldValue,
    onChangeFunction,
    options,
     className
  } = itemObject ?? props;

  return (
    <div className="select-componant">

      {fieldLabel && <label>{fieldLabel}</label>}

      <select
        value={fieldValue}
        onChange={(event) => onChangeFunction?.(event.target.value)}
        className={className}
      >
        {options?.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

    </div>
  );
};

export default SelectComponent;