export function createKebabIcon() {
  const svgNS = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "16");
  svg.setAttribute("height", "16");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.classList.add("kebab-icon");

  const dot1 = document.createElementNS(svgNS, "circle");
  dot1.setAttribute("cx", "12");
  dot1.setAttribute("cy", "5");
  dot1.setAttribute("r", "2");

  const dot2 = document.createElementNS(svgNS, "circle");
  dot2.setAttribute("cx", "12");
  dot2.setAttribute("cy", "12");
  dot2.setAttribute("r", "2");

  const dot3 = document.createElementNS(svgNS, "circle");
  dot3.setAttribute("cx", "12");
  dot3.setAttribute("cy", "19");
  dot3.setAttribute("r", "2");

  svg.appendChild(dot1);
  svg.appendChild(dot2);
  svg.appendChild(dot3);

  return svg;
}
