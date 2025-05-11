import Image from "next/image";
import styles from "@/styles/Home.module.css";


export function Headline(props) {
  return (
    <div>
        <h1 className={styles.title}>{props.page} page</h1>
        <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
        />
        <ol>
            <li>
                Get started by editing {props.children}
            </li>
            <li>Save and see your changes instantly.</li>
        </ol>
    </div>
  )
}