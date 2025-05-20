import Image from "next/image";
import classes from "./Headline.module.css";


export const Headline = (props) => {
  return (
    <div>
      <h1 className={classes.title}>{props.page} page</h1>
      <Image
          className={classes.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
      />
      <ol>
          <li>
              アイテムの数は {props.children} 個です
          </li>
          <li>Save and see your changes instantly.</li>
      </ol>

      <button onClick={props.handleReduce}>減らす</button>
    </div>
  )
}