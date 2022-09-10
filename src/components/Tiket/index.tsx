import { TiketProps } from "./TiketProps";
import classes from "./Tiket.module.scss";
import { ITikets } from "../../types";
import { Typography } from "../../UI/Typography";

export const Tiket = ({ tickets }: TiketProps) => {
  const renderTikets = (tickets: ITikets[]) => {
    return tickets.map((ticket) => {
      return (
        <article key={ticket.id} className={classes.ticket}>
          <div className={classes.top}>
            <Typography variant="h3">{ticket.price} P</Typography>
            <div className={classes.logo}>
              <img src={ticket.img} />
            </div>
          </div>

          <ul className={classes.listInfo}>
            {ticket.info.map((item) => {
              return (
                <li className={classes.itemInfo}>
                  <Typography variant={"span"} color={"light"}>
                    {item.name}
                  </Typography>
                  <Typography variant={"span"}>{item.value}</Typography>
                </li>
              );
            })}
          </ul>
        </article>
      );
    });
  };

  return <section className={classes.root}>{renderTikets(tickets)}</section>;
};
