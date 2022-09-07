import { OptionsProps } from "./OptionsProps";
import { useState } from "react";
import { IOptions } from "../../types";
import classes from "./Options.module.scss";
import { Typography } from "../../UI/Typography";

export const Options = ({ options, title }: OptionsProps) => {
  const [ticketsOptions, setTicketsOptions] = useState<IOptions[]>(options);

  const handleChecked = (id: number) => {
    const updateOptions = ticketsOptions.map((opt) =>
      opt.id === id ? { ...opt, checked: !opt.checked } : { ...opt }
    );
    setTicketsOptions(updateOptions);
  };

  const renderOptions = (ticketsOptions: IOptions[]) => {
    return ticketsOptions.map((opt) => {
      return (
        <div key={opt.id} className={classes.formGroup}>
          <input type="checkbox" id={opt.name} />
          <label htmlFor={opt.name} onClick={() => handleChecked(opt.id)}>
            <Typography variant={"span"} color="dark">
              {opt.label}
            </Typography>
          </label>
        </div>
      );
    });
  };

  return (
    <section className={classes.root}>
      <Typography variant={"h2"}>{title}</Typography>
      <form>{renderOptions(ticketsOptions)}</form>
    </section>
  );
};
