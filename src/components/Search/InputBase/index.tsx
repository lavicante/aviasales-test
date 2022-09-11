import React, { ChangeEvent, useState } from "react";
import classes from "./InputBase.module.scss";
import { InputBaseProps } from "./InputBaseProps";

export const InputBase = ({ placeholder = "Откуда" }: InputBaseProps) => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <input
      className={classes.inputBase}
      type="text"
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
    />
  );
};
