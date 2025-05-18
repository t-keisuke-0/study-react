import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCallback, useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState('')
  const [isShow, setIsShow] = useState(true)
  const [array, setArray] = useState([])

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count])

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow)
  }, [])

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert('5文字以内にしてください')
      return;
    }
    setText(e.target.value.trim())
  }, [])

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some(item => item === text)) {
        alert("同じ要素が既に存在します。")
        return prevArray
      }
      return [...prevArray, text]
    }) 
  }, [text])

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1>: null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示": "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item =>{
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
