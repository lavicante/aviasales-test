import { TypographyProps } from "./TypographyProps";
import classes from "./Typography.module.scss";

export const Typography = ({
  variant,
  children,
  styleProps,
}: TypographyProps) => {
  switch (variant) {
    case "h3":
      return <h3 className={classes.h3}>{children}</h3>;
    case "h2":
      return <h2 className={classes.h2}>{children}</h2>;
    case "p":
      return <p className={classes.p}>{children}</p>;
    case "span":
      return (
        <span style={styleProps} className={classes.span}>
          {children}
        </span>
      );
    default:
      return null;
  }
};
