import React from "react";

export const Button = ({ clsName, label, handleOnClick }) => {
  return (
    <div className={clsName} onClick={() => handleOnClick(label)}>
      {label}
    </div>
  );
};
