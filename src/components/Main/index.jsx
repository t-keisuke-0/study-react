import classes from "./Main.module.css";
import { Links } from "@/src/components/Links";
import { Headline } from "@/src/components/Headline";

export function Main(props) {
  return (
    <main className={classes.main}>
        <Headline page={props.page}>
            <code>pages/{props.page}.jsx</code>
        </Headline>
        <Links />
    </main>
  )
}
