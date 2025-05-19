import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCounter } from "@/src/hooks/useCounter";
import { useInputArray } from "@/src/hooks/useInputArray";
import { useBgLightBlue } from "@/src/hooks/useBgLightBlue";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter()
  const { text, array, handleChange, handleAdd } = useInputArray()
  useBgLightBlue()

  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示": "表示"}</button>
      {isShow ? <h2>{count}</h2>: null}
      <hr />
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ol>
        {array.map(item =>{
          return (
            <div key={item}>{item}</div>
          )
        })}
      </ol>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Main page="about" />
        <Footer />
      </div>
    </div>
  )
}
