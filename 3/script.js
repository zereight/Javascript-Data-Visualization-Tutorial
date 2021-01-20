const svgHeight = 235;
const dataSet = [120, 70, 175, 80, 220];
let barElements, textElements;

//그래프 그리기
barElements = d3.select("#myGraph").selectAll("rect").data(dataSet);

barElements
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("height", (value) => value)
  .attr("width", "20")
  .attr("x", (_, index) => index * 30)
  .attr("y", (value) => svgHeight - value)

    //    .exit()
textElements = d3.select("#myGraph").selectAll("#barNum").data(dataSet);

textElements
  .enter()
  .append("text")
  .attr("x", (_, i) => i * 30)
  .attr("y", svgHeight - 5)
  .text((v) => v); // text 값 넣기
//        .exit()
