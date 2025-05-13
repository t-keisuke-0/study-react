import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCallback } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const handleClick = (e) => {
//   console.log(e.target.href)
//   e.preventDefault()
    // alert(foo)
// }


export default function Home() {
  const foo = 1

  const handleClick = useCallback((e) => {
    console.log(e.target.href)
    e.preventDefault()
    alert(foo)
  }, [])

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Main page="index" />
        <Footer />
      </div>
    </div>
  )
}
