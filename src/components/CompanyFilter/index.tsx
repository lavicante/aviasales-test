import { CompanyFilterProps } from "./CompanyFilterProps";
import { useState } from "react";
import classes from "./CompanyFilter.module.scss";
import { Typography } from "../../UI/Typography";
import clns from "classnames";
import { IFiltersTypes } from "../../types";

export const CompanyFilter = ({ filters, title }: CompanyFilterProps) => {
  const [filtersCompany, setFiltersCompany] =
    useState<IFiltersTypes[]>(filters);

  //TODO: условный хендел на клик
  // const handleChecked = (id: number) => {
  //   const updateOptions = ticketsOptions.map((opt) =>
  //     opt.id === id ? { ...opt, checked: !opt.checked } : { ...opt }
  //   );
  //   setTicketsOptions(updateOptions);
  // };

  const renderFilters = (filters: IFiltersTypes[]) => {
    return filters.map((opt) => {
      return (
        <div key={opt.id} className={classes.formGroup}>
          <input type="radio" id={opt.name} name="radio" />
          <label htmlFor={opt.name}>
            <Typography variant={"span"}>{opt.label}</Typography>
          </label>
        </div>
      );
    });
  };

  return (
    <section className={classes.root}>
      <Typography variant={"h2"}>{title}</Typography>
      <form>{renderFilters(filtersCompany)}</form>
    </section>
  );
};
