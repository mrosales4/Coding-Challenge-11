// U22978120

// Define constants for margin, bar height, and data
const margin = 1;
const barHeight = 20;
const data = [100, 420, 230, 850, 560, 925];

// Select the SVG element with ID "bar-chart"
const svg = d3.select("#bar-chart");

// Calculate dynamic SVG height based on data length
const svgHeight = data.length * (barHeight + margin);

// Set SVG dimensions using D3.js
svg.attr("width", 500)
   .attr("height", svgHeight);
