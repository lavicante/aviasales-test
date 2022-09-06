import { LayoutProps } from "./LayoutProps";
import { ReactComponent as Logo } from "./images/Logo.svg";
import classes from "./Layout.module.scss";
import { Options } from "../Options";
import { options } from "../../mocks/options";
import { TITLE_FILTER_COMPANY, TITLE_OPTIONS } from "../../mocks/constants";
import { CompanyFilter } from "../CompanyFilter";
import { filtersCompany } from "../../mocks/filtersCompany";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={classes.root}>
      <header className={classes.logo}>
        <Logo />
      </header>
      <main className={classes.main}>
        <aside className={classes.aside}>
          <Options options={options} title={TITLE_OPTIONS} />
          <CompanyFilter
            filters={filtersCompany}
            title={TITLE_FILTER_COMPANY}
          />
        </aside>
        <div className={classes.wrapper}>
          <section>tabs</section>
          <section>tickets</section>
        </div>
      </main>
    </div>
  );
};
