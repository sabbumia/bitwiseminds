// MaskedIcon renders SVG icons that use CSS masking.
//
// Many icons in this template have stroke="white" / fill="none" — they are
// transparent shapes, not self-colored icons. The original template uses
// data-mask-src so main.js applies a CSS mask, making the element's background
// color show through the SVG shape.
//
// This component replicates that behaviour inline so the icon is visible
// immediately without waiting for any JS initialization.

interface MaskedIconProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function MaskedIcon({
  src,
  alt = "",
  width = 24,
  height = 24,
  className = "",
}: MaskedIconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      data-mask-src={src}
      className={`bg-mask${className ? ` ${className}` : ""}`}
      style={{
        width,
        height,
        display: "inline-block",
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    />
  );
}
