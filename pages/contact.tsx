import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <hr />
      <h2>
        Ir a <Link href="/">Home</Link>
      </h2>
    </MainLayout>
  );
}
