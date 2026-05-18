import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  items?: { label: string; href?: string }[];
  bgSrc?: string;
}

export default function Breadcrumb({
  title,
  items = [],
  bgSrc = "/assets/img/bg/breadcumb-bg.png",
}: BreadcrumbProps) {
  return (
    <div
      className="breadcumb-wrapper"
      data-bg-src={bgSrc}
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <div
        className="breadcumb-menu-bg-mask"
        data-mask-src="/assets/img/bg/breadcumb-menu-bg-mask.png"
        style={{
          maskImage: "url(/assets/img/bg/breadcumb-menu-bg-mask.png)",
          WebkitMaskImage: "url(/assets/img/bg/breadcumb-menu-bg-mask.png)",
        }}
      ></div>
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{title}</h1>
          {items.length > 0 && (
            <ul className="breadcumb-menu">
              {items.map((item, i) => (
                <li key={i}>
                  {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
