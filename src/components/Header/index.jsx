import Link from "next/link"
import classes from "./Header.module.css";

const NAV_ITEMS = [
  {href: '/', label: 'Index'},
  {href: '/about', label: 'About'}
]

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} className={classes.anchor} href={item.href}>{item.label}</Link>
        )
      })}
    </header>
  );
}
