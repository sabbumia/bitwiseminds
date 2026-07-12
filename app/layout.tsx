import type { Metadata } from "next";
import "./globals.css";
import ClientInit from "@/components/layout/ClientInit";
import Preloader from "@/components/layout/Preloader";
import ColorScheme from "@/components/layout/ColorScheme";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollTop from "@/components/layout/ScrollTop";
import RouteChangeHandler from "@/components/layout/RouteChangeHandler";

export const metadata: Metadata = {
  title: "BitwiseMinds - IT Support & Software Solutions",
  description:
    "BitwiseMinds delivers premium IT support, custom software development, web design, cloud solutions, and business automation for modern businesses.",
  keywords:
    "BitwiseMinds, IT support, software development, web design, cloud solutions, business automation, custom software, IT company",
  authors: [{ name: "BitwiseMinds" }],
  robots: "INDEX,FOLLOW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="no-js">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Onest:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* CSS Libraries — loaded at runtime from public/assets */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/assets/img/favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/img/favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/img/favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/img/favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/img/favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/img/favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/img/favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/img/favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/img/favicons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/img/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicons/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/assets/img/favicons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {/*
          All shared layout components live here in the ROOT LAYOUT.
          In Next.js App Router, layout.tsx persists across route changes —
          these components mount ONCE and never re-mount on navigation.
          This fixes:
            • Preloader re-showing on every page (was hiding content for 2.5s)
            • Header/Footer being recreated and losing event listeners
            • Duplicate ClientInit script loads
        */}
        <ClientInit />
        <div className="cursor-follower"></div>
        <Preloader />
        <ColorScheme />

        {/* Reinitializes scrollCue, Swiper, bg images, masks after every route change */}
        <RouteChangeHandler />

        <Header />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
