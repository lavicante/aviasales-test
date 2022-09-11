import { Arrow } from "./Arrow";
import classes from "./BtnRevers.module.scss";

export const BtnRevers = () => {
  return (
    <button className={classes.btnRevers}>
      <Arrow direction={"right"} />
      <Arrow direction={"left"} />
    </button>
  );
};
