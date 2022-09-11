import { LayoutProps } from "./LayoutProps";
import { ReactComponent as Logo } from "./images/Logo.svg";
import classes from "./Layout.module.scss";
import { Options } from "../Options";
import { options } from "../../mocks/options";
import { TITLE_FILTER_COMPANY, TITLE_OPTIONS } from "../../mocks/constants";
import { CompanyFilter } from "../CompanyFilter";
import { filtersCompany } from "../../mocks/filtersCompany";
import { Sorts } from "../Sorts";
import { sorts } from "../../mocks/sorts";
import { LoadMoreButton } from "../LoadMoreButton";
import { Search } from "../Search";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={classes.root}>
      <header className={classes.logo}>
        <Logo />
      </header>
      <Search />
      <main className={classes.main}>
        <aside className={classes.aside}>
          <Options options={options} title={TITLE_OPTIONS} />
          <CompanyFilter
            filters={filtersCompany}
            title={TITLE_FILTER_COMPANY}
          />
        </aside>
        <div className={classes.wrapper}>
          <Sorts sorts={sorts} />
          {children}
          <LoadMoreButton />
        </div>
      </main>
    </div>
  );
};
