/* eslint-disable react/prop-types */
import { useState } from "react";

const TextInput = ({
  label,
  id,
  name,
  type,
  required,
  autoComplete,
  onChange,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);

    if (onChange) onChange(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={handleChange}
          autoComplete={autoComplete ? "on" : "off"}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default TextInput;
