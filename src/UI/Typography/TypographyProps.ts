import React, { ReactNode } from "react";

export interface TypographyProps {
  variant: "h2" | "h3" | "p" | "span";
  children: ReactNode;
  styleProps?: Record<string, string>;
}
