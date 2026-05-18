"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Runs all DOM-based initialization (Swiper, scrollCue, bg-images, masks) after
// every client-side route change, because main.js fires once on window.load and
// never re-runs when Next.js swaps page content.

type Win = typeof window & {
  scrollCue?: { init: (opts: Record<string, unknown>) => void };
  Swiper?: new (el: HTMLElement, opts: Record<string, unknown>) => unknown;
  jQuery?: {
    (selector: string): {
      counterUp(opts: Record<string, unknown>): unknown;
      magnificPopup(opts: Record<string, unknown>): unknown;
    };
  };
};

function initAllComponents() {
  const win = window as Win;

  // ── Background images ────────────────────────────────────────────────
  document.querySelectorAll<HTMLElement>("[data-bg-src]").forEach((el) => {
    const src = el.getAttribute("data-bg-src");
    if (src) {
      el.style.backgroundImage = `url(${src})`;
      el.classList.add("background-image");
    }
  });

  // ── Background colour ────────────────────────────────────────────────
  document.querySelectorAll<HTMLElement>("[data-bg-color]").forEach((el) => {
    const color = el.getAttribute("data-bg-color");
    if (color) el.style.backgroundColor = color;
  });

  // ── CSS mask images ──────────────────────────────────────────────────
  document.querySelectorAll<HTMLElement>("[data-mask-src]").forEach((el) => {
    const mask = el.getAttribute("data-mask-src");
    if (mask) {
      el.style.maskImage = `url(${mask})`;
      (el.style as unknown as Record<string, string>)["webkitMaskImage"] = `url(${mask})`;
      el.classList.add("bg-mask");
    }
  });

  // ── CSS animation entry classes ──────────────────────────────────────
  document.querySelectorAll<HTMLElement>("[data-ani]").forEach((el) => {
    const name = el.getAttribute("data-ani");
    if (name) el.classList.add(name);
  });
  document.querySelectorAll<HTMLElement>("[data-ani-delay]").forEach((el) => {
    const delay = el.getAttribute("data-ani-delay");
    if (delay) el.style.animationDelay = delay;
  });

  // ── Shape-mockup absolute positioning ───────────────────────────────
  document.querySelectorAll<HTMLElement>(".shape-mockup").forEach((el) => {
    const { top, right, bottom, left } = {
      top: el.getAttribute("data-top"),
      right: el.getAttribute("data-right"),
      bottom: el.getAttribute("data-bottom"),
      left: el.getAttribute("data-left"),
    };
    if (top !== null) el.style.top = top ?? "";
    if (right !== null) el.style.right = right ?? "";
    if (bottom !== null) el.style.bottom = bottom ?? "";
    if (left !== null) el.style.left = left ?? "";
    if (el.parentElement) el.parentElement.classList.add("shape-mockup-wrap");
  });

  // ── scrollCue — reset inline styles then re-init ────────────────────
  // scrollCue sets opacity:0 on [data-cue] elements. After a route change
  // the new elements are hidden and their observers never fire. We clear
  // the inline styles first so content is never permanently invisible.
  document.querySelectorAll<HTMLElement>("[data-cue]").forEach((el) => {
    el.style.opacity = "";
    el.style.transform = "";
    el.style.transition = "";
    el.style.visibility = "";
    el.removeAttribute("data-cue-status");
  });

  if (win.scrollCue) {
    try {
      win.scrollCue.init({ percentage: 0.99, duration: 900 });
      window.dispatchEvent(new Event("scroll"));
    } catch { /* scrollCue may not be ready on very first load */ }
  }

  // ── Swiper — initialise uninitialised sliders ────────────────────────
  if (win.Swiper) {
    const SwiperCls = win.Swiper;
    document
      .querySelectorAll<HTMLElement>(".th-slider:not(.swiper-initialized)")
      .forEach((el) => {
        let settings: Record<string, unknown> = {};
        try {
          const raw = el.getAttribute("data-slider-options");
          if (raw) settings = JSON.parse(raw);
        } catch { /* malformed JSON — use defaults */ }

        const prevEl = el.querySelector<HTMLElement>(".slider-prev") ?? undefined;
        const nextEl = el.querySelector<HTMLElement>(".slider-next") ?? undefined;
        const paginationEl = el.querySelector<HTMLElement>(".slider-pagination") ?? undefined;

        try {
          new SwiperCls(el, {
            slidesPerView: 1,
            spaceBetween: (settings.spaceBetween as number) ?? 24,
            loop: settings.loop !== false,
            speed: (settings.speed as number) ?? 1000,
            autoplay: settings.autoplay ?? { delay: 6000, disableOnInteraction: false },
            ...(prevEl || nextEl ? { navigation: { prevEl, nextEl } } : {}),
            ...(paginationEl
              ? { pagination: { el: paginationEl, type: (settings.paginationType as string) ?? "bullets", clickable: true } }
              : {}),
            ...settings,
          });
        } catch { /* Swiper may throw on invalid containers */ }
      });
  }

  // ── CounterUp ────────────────────────────────────────────────────────
  const $ = win.jQuery;
  if ($) {
    try { $(".counter-number").counterUp({ delay: 10, time: 1000 }); } catch { /**/ }

    // ── Magnific Popup ────────────────────────────────────────────────
    try {
      $(".th-popup-video").magnificPopup({ type: "iframe", mainClass: "mfp-zoom-in" });
      $(".th-popup-image").magnificPopup({
        type: "image",
        mainClass: "mfp-zoom-in",
        removalDelay: 260,
        gallery: { enabled: true },
      });
    } catch { /**/ }
  }
}

export default function RouteChangeHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Two-pass: fast for above-fold content, slow for deferred renders.
    const t1 = setTimeout(initAllComponents, 100);
    const t2 = setTimeout(initAllComponents, 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pathname]);

  return null;
}
