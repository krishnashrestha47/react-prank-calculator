import React from "react";

export const Display = ({ str, isPrank }) => {
  const clsName = isPrank ? "display prank" : "display";
  return <div className={clsName}>{str || "0.0"}</div>;
};
