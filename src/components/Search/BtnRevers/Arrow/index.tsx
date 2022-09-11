import { ArrowProps } from "./ArrowProps";
import clns from "classnames";
import classes from "./Arrow.module.scss";

export const Arrow = ({ direction }: ArrowProps) => {
  return (
    <svg
      width="13"
      height="6"
      viewBox="0 0 13 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clns({
        [classes.right]: direction === "right",
      })}
    >
      <path
        d="M3 3.5H2.5V4V4.79289L0.707107 3L2.5 1.20711V2V2.5H3H12.5V3.5H3Z"
        stroke="white"
      />
    </svg>
  );
};
