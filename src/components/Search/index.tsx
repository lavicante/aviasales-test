import { InputBase } from "./InputBase";
import classes from "./Search.module.scss";
import { BtnRevers } from "./BtnRevers";
import { DatePickerInput } from "./DatePicker";

export const Search = () => {
  return (
    <section className={classes.root}>
      <form className={classes.form}>
        <fieldset className={classes.formGroup}>
          <InputBase placeholder={"Откуда"} />
          <InputBase placeholder={"Куда"} />
          <BtnRevers />
        </fieldset>
        <DatePickerInput styleBorder={"border-radius"} />
      </form>
    </section>
  );
};
