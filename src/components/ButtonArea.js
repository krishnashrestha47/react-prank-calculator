import React from "react";
import { Button } from "./Button";

export const ButtonArea = () => {
  const buttons = [
    {
      label: "AC",
      clsName: "box box-AC",
    },
    {
      label: "C",
      clsName: "box pdm",
    },
    {
      label: "%",
      clsName: "box box-percent",
    },
    {
      label: "/",
      clsName: "box box-divide",
    },
    {
      label: "7",
      clsName: "box box-7",
    },
    {
      label: "8",
      clsName: "box box-8",
    },
    {
      label: "9",
      clsName: "box box-9",
    },
    {
      label: "*",
      clsName: "box box-x",
    },
    {
      label: "4",
      clsName: "box box-4",
    },
    {
      label: "5",
      clsName: "box box-5",
    },
    {
      label: "6",
      clsName: "box box-6",
    },
    {
      label: "-",
      clsName: "box box-minus",
    },
    {
      label: "1",
      clsName: "box box-1",
    },
    {
      label: "2",
      clsName: "box box-2",
    },
    {
      label: "3",
      clsName: "box box-3",
    },
    {
      label: "+",
      clsName: "box box-plus",
    },
    {
      label: "0",
      clsName: "box box-zero",
    },
    {
      label: ".",
      clsName: "box box-dot",
    },
    {
      label: "=",
      clsName: "box box-equals",
    },
  ];

  return (
    <>
      {buttons.map((item, i) => {
        // return <Button key={i} clsName={item.clsName} label={item.label} />;
        return <Button key={i} {...item} />;
      })}
    </>
  );
};
