import Head from "next/head";
import { Inter } from "next/font/google";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Head>
        <title>Home | NextApp</title>
        <meta name="description" content="HomePage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </div>
  );
};
