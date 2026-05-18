import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = { title: "FAQs - BitwiseMinds IT Solutions" };

export default function FaqPage() {
  return (
    <main>
      <Breadcrumb title="Frequently Asked Questions" items={[{ label: "Home", href: "/" }, { label: "FAQs" }]} />
      <FaqSection />
    </main>
  );
}
