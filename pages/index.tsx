import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <hr />
      <h2>
        Ir a <Link href={"/about"}>About</Link>
      </h2>
    </MainLayout>
  );
}
