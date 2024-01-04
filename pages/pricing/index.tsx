import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <hr />
      <h2>
        Ir a <Link href="/">Home</Link>
      </h2>
    </MainLayout>
  );
}
