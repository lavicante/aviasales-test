import { store } from "../../store";
import { Provider } from "react-redux";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const ReduxProvider = ({ children }: IProps) => {
  return <Provider store={store}>{children}</Provider>;
};
