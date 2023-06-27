"use client";

import Image from "next/image";
import styles from "./page.module.css";

import Header from "../component/Header/Header";
import Sports from "@/component/Sports/Sports";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <form action="/api/users" method="POST"> */}
      {/* <Header /> */}
      <Sports />
      {/* </form> */}
    </main>
  );
}
