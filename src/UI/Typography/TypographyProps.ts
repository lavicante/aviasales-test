import React, { ReactNode } from "react";

export interface TypographyProps {
  color?: "dark" | "light" | "white";
  variant: "h2" | "h3" | "p" | "span";
  children: ReactNode;
}
