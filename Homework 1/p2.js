d3.csv("./temperature.csv", function (data) {
    console.log(data);
    console.log(data["Unc."]);
});
//
// const width = 800;
// const height = 400;
//
// const svg = d3
//     .select("div")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .attr("id", "p1");
//
// svg
//     .append("rect")
//     .attr("width", width)
//     .attr("height", height)
//     .attr("fill", "white")
//     .attr("stroke", "black")
//     .attr("stroke-width", "3")
//
// const margin = {top: 80, right: 30, bottom: 50, left: 50};
// const g = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);
//
// const gW = width - margin.left - margin.right;
// const gH = height - margin.top - margin.bottom;
//
// // Title
// svg.append("text")
//     .attr("transform", `translate(${margin.left + gW / 2}, ${margin.top / 2})`)
//     .style("font-family", "sans-serif")
//     .style("font-size", "28px")
//     .style("fill", "brown")
//     .style("text-anchor", "middle")
//     .style("font-weight", "bold")
//     .text("Month - Baseline")
//
// // X axis
// const xScale = d3.scaleBand().range([0, gW]);
// xScale.domain(dataBaseLine.map(item => item.month));
// g.append("g")
//     .attr("transform", `translate(0, ${gH})`)
//     .call(d3.axisBottom(xScale).ticks())
//     .attr("stroke", "darkred");
// svg.append("text")
//     .attr("transform", `translate(${margin.left + gW / 2}, ${height - margin.bottom / 4})`)
//     .style("font-family", "sans-serif")
//     .style("font-size", "14px")
//     .style("fill", "brown")
//     .style("text-anchor", "middle")
//     .style("font-weight", "bold")
//     .text("Month")
//
// // Y axis
// const yScale = d3.scaleLinear().range([gH, 0]);
// yScale.domain([0, Math.ceil(d3.max(dataBaseLine, item => item.baseline))]);
// g.append("g")
//     .call(d3.axisLeft(yScale))
//     .attr("stroke", "darkred");
// svg.append("text")
//     .attr("transform", `translate(${margin.left}, ${margin.top * 3 / 4})`)
//     .style("font-family", "sans-serif")
//     .style("font-size", "14px")
//     .style("fill", "brown")
//     .style("text-anchor", "middle")
//     .style("font-weight", "bold")
//     .text("Baseline")
//
// console.log(g.selectAll(".group-circle-text"));
// const symbols = g
//     .selectAll(".group-circle-text")
//     .data(dataBaseLine)
//     .join("g")
//     .attr("class", "group-circle-text");
//
// symbols
//     .selectAll("circle")
//     .data(dataBaseLine)
//     .join("circle")
//     .attr("cx", d => xScale(d.month) + xScale.bandwidth() / 2)
//     .attr("cy", d => yScale(d.baseline))
//     .attr("r", 3)
//     .attr("fill", "red");
//
// symbols
//     .selectAll("text")
//     .data(dataBaseLine)
//     .join("text")
//     .style("font-family", "Arial")
//     .style("font-size", "14px")
//     .attr("x", d => xScale(d.month) + xScale.bandwidth() / 2 - 13)
//     .attr("y", d => yScale(d.baseline) + 20)
//     .text(d => d.baseline);
//
// const line = d3.line()
//     .x(d => xScale(d.month) + xScale.bandwidth() / 2)
//     .y(d => yScale(d.baseline))
//     .curve(d3.curveCatmullRom);
//
// g.append("path")
//     .attr("d", line(dataBaseLine))
//     .attr("fill", "none")
//     .attr("stroke", "coral")
//     .attr("stroke-width", "2");