import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const About = (props) => {

  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>{props.isShow ? "非表示": "表示"}</button>
      {props.isShow ? <h2>{props.doubleCount}</h2>: null}
      <hr />
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ol>
        {props.array.map(item =>{
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

export default About;