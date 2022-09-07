import { SortsProps } from "./SortsProps";
import { useState } from "react";
import { ISorts } from "../../types";
import classes from "./Sorts.module.scss";
import { Typography } from "../../UI/Typography";
import clns from "classnames";

export const Sorts = ({ sorts }: SortsProps) => {
  const [sortsList, setSortsList] = useState<ISorts[]>(sorts);
  const [activeSort, setActiveSort] = useState<number | null>(null);

  const handleSort = (index: number) => {
    setActiveSort(index);
  };

  const renderSorts = (sortsList: ISorts[]) => {
    return sortsList.map((sort, index) => {
      return (
        <div
          key={sort.id}
          className={clns(classes.item, {
            [classes.active]: index === activeSort,
          })}
          onClick={() => handleSort(index)}
        >
          <Typography variant={"p"}>{sort.label}</Typography>
        </div>
      );
    });
  };

  return <section className={classes.root}>{renderSorts(sortsList)}</section>;
};
