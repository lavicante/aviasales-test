import { TypographyProps } from "./TypographyProps";
import classes from "./Typography.module.scss";
import clns from "classnames";

export const Typography = ({ variant, children, color }: TypographyProps) => {
  switch (variant) {
    case "h3":
      return (
        <h3
          className={clns(classes.h3, {
            [classes.dark]: color === "dark",
            [classes.light]: color === "light",
            [classes.white]: color === "white",
          })}
        >
          {children}
        </h3>
      );
    case "h2":
      return (
        <h2
          className={clns(classes.h2, {
            [classes.dark]: color === "dark",
            [classes.light]: color === "light",
            [classes.white]: color === "white",
          })}
        >
          {children}
        </h2>
      );
    case "p":
      return (
        <p
          className={clns(classes.p, {
            [classes.dark]: color === "dark",
            [classes.light]: color === "light",
            [classes.white]: color === "white",
          })}
        >
          {children}
        </p>
      );
    case "span":
      return (
        <span
          className={clns(classes.span, {
            [classes.dark]: color === "dark",
            [classes.light]: color === "light",
            [classes.white]: color === "white",
          })}
        >
          {children}
        </span>
      );
    default:
      return null;
  }
};
