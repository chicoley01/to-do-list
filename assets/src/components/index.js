export { generateTask } from "./task.js";

export async function initComponents() {
  await preloadSVGs({
    kebab: "./assets/src/icons/kebab.svg",
    plus: "./assets/src/icons/plus.svg",
    close: "./assets/src/icons/close.svg",
    filter: "./assets/src/icons/filter.svg",
  });
}

const svgCache = {};

async function preloadSVGs(iconMap) {
  const entries = await Promise.all(
    Object.entries(iconMap).map(async ([key, path]) => {
      const res = await fetch(path);
      const svgText = await res.text();
      const container = document.createElement("div");
      container.innerHTML = svgText.trim();
      return [key, container.firstElementChild];
    })
  );

  for (const [key, svg] of entries) {
    svgCache[key] = svg;
  }
}

export function getSVG(iconName) {
  const svg = svgCache[iconName];
  if (!svg) {
    console.warn(`SVG "${iconName}" not found in cache.`);
    return document.createElement("span");
  }

  return svg.cloneNode(true);
}