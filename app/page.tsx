import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServiceSection from "@/components/sections/ServiceSection";
import WhySection from "@/components/sections/WhySection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ProcessSection from "@/components/sections/ProcessSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import TeamSection from "@/components/sections/TeamSection";
import PriceSection from "@/components/sections/PriceSection";
import FaqSection from "@/components/sections/FaqSection";
import AppointmentSection from "@/components/sections/AppointmentSection";
import BlogSection from "@/components/sections/BlogSection";

export const metadata: Metadata = {
  title: "BitwiseMinds - IT Support & Software Solutions Company",
  description:
    "BitwiseMinds is a premium IT company delivering custom software, web development, cloud solutions, IT support, and business automation for modern businesses worldwide.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhySection />
      <MarqueeSection />
      <ProcessSection />
      <GallerySection />
      <TestimonialSection />
      <TeamSection />
      <PriceSection />
      <FaqSection />
      <AppointmentSection />
      <BlogSection />
    </main>
  );
}
