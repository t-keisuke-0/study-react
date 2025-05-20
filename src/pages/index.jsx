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

const Home = (props) => {

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      {props.isShow ? <h1>{props.count}</h1>: null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>{props.isShow ? "非表示": "表示"}</button>

      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map(item =>{
          return (
            <div key={item}>{item}</div>
          )
        })}
      </ul>
  
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Main page="index" />
        <Footer />
      </div>
    </div>
  )
}

export default Home;