import classes from "./LoadMore.module.scss";
import { Typography } from "../../UI/Typography";

export const LoadMoreButton = () => {
  return (
    <button className={classes.button}>
      <Typography variant={"span"}>Показать еще 5 билетов</Typography>
    </button>
  );
};
