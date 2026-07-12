"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface SubMenuItem {
  label: string;
  href: string;
  children?: SubMenuItem[];
}

interface MenuItem {
  label: string;
  href: string;
  children?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/service",
    children: [
      { label: "All Services", href: "/service" },
      { label: "Service Details", href: "/service-details" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "Digital Store", href: "/shop" },
      { label: "Product Details", href: "/shop-details" },
      { label: "Cart", href: "/cart" },
      { label: "Checkout", href: "/checkout" },
      { label: "Saved Items", href: "/wishlist" },
      { label: "Our Team", href: "/team" },
      { label: "Team Details", href: "/team-details" },
      { label: "Portfolio", href: "/gallery" },
      { label: "Testimonials", href: "/testimonial" },
      { label: "FAQ's", href: "/faq" },
      { label: "Pricing Plans", href: "/price" },
      { label: "404 Error", href: "/error" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    children: [
      { label: "Blog Standard", href: "/blog" },
      { label: "Blog with Sidebar", href: "/blog-2" },
      { label: "Blog without Sidebar", href: "/blog-3" },
      { label: "Blog Details", href: "/blog-details" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

interface MobileMenuItemProps {
  item: MenuItem | SubMenuItem;
  level?: number;
}

function MobileMenuItem({ item, level = 0 }: MobileMenuItemProps) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li
      className={
        hasChildren
          ? "menu-item-has-children th-item-has-children" + (open ? " th-active" : "")
          : ""
      }
    >
      <a
        href={item.href}
        onClick={
          hasChildren
            ? (e) => {
                e.preventDefault();
                setOpen(!open);
              }
            : undefined
        }
      >
        {item.label}
        {hasChildren && <span className="th-mean-expand"></span>}
      </a>
      {hasChildren && item.children && (
        <ul
          className={"th-submenu" + (open ? " th-open" : "")}
          style={{ display: open ? "block" : "none" }}
        >
          {item.children.map((child, i) => (
            <MobileMenuItem key={i} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={"th-menu-wrapper allow-natural-scroll" + (isOpen ? " th-body-visible" : "")}
      onClick={onClose}
    >
      <div className="th-menu-area text-center" onClick={(e) => e.stopPropagation()}>
        <button className="th-menu-toggle" onClick={onClose}>
          <i className="fal fa-times"></i>
        </button>
        <div className="mobile-logo">
          <Link href="/">
            <Image src="/assets/img/logo3.svg" alt="BitwiseMinds" width={160} height={45} />
          </Link>
        </div>
        <div className="th-mobile-menu">
          <ul>
            {menuItems.map((item, i) => (
              <MobileMenuItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
