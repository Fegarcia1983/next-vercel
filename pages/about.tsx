import Link from "next/link";
import { ReactElement } from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { DarkLayout } from "@/components/layouts/DarkLayout";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <hr />
      <h2>
        Ir a <Link href="/">Home</Link>
      </h2>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
