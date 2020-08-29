import React from "react";

const Input = ({ id, className, value }) => {
  return (
    <React.Fragment>
      <label for={id}>
        <input
          className={className}
          type="text"
          id={id}
          name={id}
          value={value}
          placeholder={id}
          required
        />
      </label>
      <br />
    </React.Fragment>
  );
};

export default Input;
