import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import TestimonialSection from "@/components/sections/TestimonialSection";

export const metadata: Metadata = { title: "Client Testimonials - BitwiseMinds IT Solutions" };

export default function TestimonialPage() {
  return (
    <main>
      <Breadcrumb title="Client Testimonials" items={[{ label: "Home", href: "/" }, { label: "Testimonials" }]} />
      <TestimonialSection />
    </main>
  );
}
