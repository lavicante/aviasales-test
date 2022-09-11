import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import classes from "./DatePicket.module.scss";
import { DatePickerInputProps } from "./DatePickerInputProps";

import clns from "classnames";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);
setDefaultLocale("ru");

export const DatePickerInput = ({ styleBorder }: DatePickerInputProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  console.log(startDate);
  return (
    <div className={classes.root}>
      <DatePicker
        locale={ru}
        className={classes.datePickerInput}
        onChange={(date: Date) => setStartDate(date)}
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText={"Когда"}
      />
      <DatePicker
        locale={ru}
        className={clns(classes.datePickerInput, {
          [classes.borderRadius]: styleBorder === "border-radius",
        })}
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText={"Обратно"}
      />
    </div>
  );
};
