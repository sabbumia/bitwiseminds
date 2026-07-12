import Script from "next/script";

// Loads all legacy JS libraries from /public/assets/js in dependency order.
// All use afterInteractive so they run after the page is interactive.
// Next.js guarantees sequential loading within the same strategy, so
// jQuery loads before all dependent plugins.
export default function ClientInit() {
  return (
    <>
      <Script src="/assets/js/vendor/jquery-3.7.1.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.counterup.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery-ui.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/scrollCue.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/lenis.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/particles.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/particles-config.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
}
