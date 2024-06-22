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

//configure linear scale for bar widths.
const xScale = d3.scaleLinear()
  .domain([0, d3.max(data)]) 
  .range([50, 500]);  
// Creating G element 
const barGroups = svg.selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", (d, i) => `translate(0, ${i * 22})`); // 20px height + 1px margin

// Append Rect for the bar
barGroups.append("rect")
  .attr("width", d => xScale(d) - 50) // Adjust for left padding
  .attr("height", 20)
  .attr("fill", "#ccc")
  .attr("opacity", 0.8)
  .transition()
    .duration(1000)
    .attr("width", d => xScale(d) - 50); // Animate bar growth

// Commit: Add text labels to bars
barGroups.append("text")
  .attr("x", d => xScale(d) - 50) // Align text with bar end
  .attr("y", 14) // Center text vertically
  .attr("text-anchor", "end")
  .text(d => d);
