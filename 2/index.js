const svg = d3.select("svg");
const width = parseInt(svg.attr("width"));
const height = parseInt(svg.attr("height"));

const g = svg
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2})`);

const circle = g.append("circle");
circle.attr("r", height / 2);
circle.attr("fill", "yellow");
circle.attr("stroke", "black");

const eyeGroup = g.append("g").attr("transform", `translate(0, ${89})`);
const leftEye = eyeGroup
  .append("circle")
  .attr("r", 40)
  .attr("cx", -101)
  .attr("cy", -150);
const rightEye = eyeGroup
  .append("circle")
  .attr("r", 40)
  .attr("cx", 101)
  .attr("cy", -150);

const eyeBrowG = g.append("g").attr("transform", `translate(0, ${-150})`);
eyeBrowG
  .transition()
  .duration(2000)
  .attr("transform", `translate(0, ${-100})`)
  .transition()
  .duration(2000)
  .attr("transform", `translate(0, ${-150})`);

const leftEyeBrow = eyeBrowG
  .append("rect")
  .attr("x", -101 - 70 / 2)
  .attr("width", 70)
  .attr("height", 20);

const rightEyeBrow = eyeBrowG
  .append("rect")
  .attr("x", 101 - 70 / 2)
  .attr("width", 70)
  .attr("height", 20);

const mouth = g.append("path").attr(
  "d",
  d3.arc()({
    innerRadius: 150,
    outerRadius: 170,
    startAngle: Math.PI / 2,
    endAngle: (Math.PI * 3) / 2,
  })
);
