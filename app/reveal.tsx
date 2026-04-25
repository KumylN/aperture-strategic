"use client";

import { useEffect, useRef } from "react";

type AllowedTag = "div" | "section" | "article" | "h1" | "h2" | "h3" | "p";

type RevealProps = {
  as?: AllowedTag;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
  children: React.ReactNode;
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
};

/**
 * Observes itself with IntersectionObserver and adds the `in` class once the
 * element enters the viewport. Pairs with `.reveal` / `.in` in globals.css.
 */
export default function Reveal({
  as = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay ? ` d${delay}` : "";
  const combined = `reveal${delayClass}${className ? ` ${className}` : ""}`;
  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  switch (as) {
    case "h1":
      return (
        <h1 ref={setRef} className={combined} {...rest}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 ref={setRef} className={combined} {...rest}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 ref={setRef} className={combined} {...rest}>
          {children}
        </h3>
      );
    case "p":
      return (
        <p ref={setRef} className={combined} {...rest}>
          {children}
        </p>
      );
    case "section":
      return (
        <section ref={setRef} className={combined} {...rest}>
          {children}
        </section>
      );
    case "article":
      return (
        <article ref={setRef} className={combined} {...rest}>
          {children}
        </article>
      );
    case "div":
    default:
      return (
        <div ref={setRef} className={combined} {...rest}>
          {children}
        </div>
      );
  }
}
