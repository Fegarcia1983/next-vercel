import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | NextApp</title>
        <meta name="description" content="AboutPage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={`${styles.title}`}>
          Ir a <a href="/">Home</a>
        </h1>
      </main>
    </>
  );
}
