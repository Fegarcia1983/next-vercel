import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";
import { DarkLayout } from "@/components/layouts/DarkLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <DarkLayout>
        <h1>About Page</h1>
        <hr />
        <h2>
          Ir a <Link href="/">Home</Link>
        </h2>
      </DarkLayout>
    </MainLayout>
  );
}
