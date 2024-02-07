import { type ReactElement } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ConversationsList from "../components/ConversationsList/ConversationsList";

const Home = (): ReactElement => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
      </Head>

      <main className={styles.main}>
        <ConversationsList />
      </main>
    </div>
  );
};

export default Home;
