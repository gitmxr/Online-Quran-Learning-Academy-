import { useEffect } from "react";
import { SITE_CONFIG } from "../config/siteConfig";

function setMeta(attr, key, value) {
  if (!value) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setCanonical(path) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", `${SITE_CONFIG.siteUrl}${path}`);
}

/**
 * Sets the document title and key meta tags for the current page.
 * Usage: useSeo({ title, description, path })
 */
export default function useSeo({ title, description, path = "/", image }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_CONFIG.name}`
      : `${SITE_CONFIG.name} | Learn Quran Online`;
    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", `${SITE_CONFIG.siteUrl}${path}`);
    if (image) setMeta("property", "og:image", image);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    setCanonical(path);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [title, description, path, image]);
}
