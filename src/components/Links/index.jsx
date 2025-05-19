// import Image from "next/image";
import classes from "./Links.module.css";

export function Links({ items }) {

  return (
    <div className={classes.ctas}>
      {items.map((item) => {
        return (
          <a
            key={item.id}
            className={classes.primary}
            href={item.href}
            target={item.target}
            rel={item.rel}
          >
            {item.description}
          </a>
        )
      })}
    </div>
  );
}
