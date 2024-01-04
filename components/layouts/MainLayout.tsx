import Head from "next/head";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
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
