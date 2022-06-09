import React from "react";

export const Button = ({ clsName, label }) => {
  const handleOnClick = (value) => {
    console.log(value);
  };

  return (
    <div className={clsName} onClick={() => handleOnClick(label)}>
      {label}
    </div>
  );
};
