import classes from "./Main.module.css";
import { Links } from "@/src/components/Links";
import { Headline } from "@/src/components/Headline";
import { useState, useCallback } from "react";

export const ITEMS = [
  {
    id: 1,
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    description: "Deploy now"
  },
  {
    id: 2,
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    description: "Read our docs"
  }
]

export const Main = (props) => {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems(prevItems => {
      return prevItems.slice(0, prevItems.length - 1)
    })
  }, [])
  
  return (
    <main className={classes.main}>
      <Headline page={props.page} handleReduce={handleReduce}>
        <code>{items.length}</code>
      </Headline>
      <Links items={items} />
    </main>
  )
}
