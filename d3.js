// Set up the width and height for the SVG canvas
const width = 1000;
const height = 500;
const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

// Tooltip to show data details when hovering over bars
const tooltip = d3.select("#tooltip");

// To store the loaded data
let data = [];

// Load the CSV data
d3.csv("processed_data.csv").then(loadedData => {
    data = loadedData;

    // Parse numeric fields, ensuring fallback values for missing data
    data.forEach(d => {
        d.year = +d.year;
        d.new_sp_coh = +d.new_sp_coh || 1;
        d.completion_rate = +d.completion_rate || 0;
        d.failure_rate = +d.failure_rate || 0;
    });

    // Set the slider's min and max values based on the data
    const minYear = d3.min(data, d => d.year);
    const maxYear = d3.max(data, d => d.year);

    // Set the initial value of the slider and its range
    d3.select("#yearSlider")
        .attr("min", minYear)
        .attr("max", maxYear)
        .attr("value", minYear);

    // Initialize the timeline with the first year
    updateTimeline(minYear);
}).catch(error => {
    console.error("Error loading data:", error);
});

// Play/Pause Button State
let isPlaying = false;

d3.select("#playPauseButton").on("click", function() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        this.textContent = "Pause";
        playAnimation();  // Start the animation when the button is clicked
    } else {
        this.textContent = "Play";
    }
});

// Function to animate the timeline
function playAnimation() {
    let currentYear = +d3.select("#yearSlider").property("value");
    const maxYear = d3.select("#yearSlider").attr("max");

    const interval = setInterval(() => {
        if (currentYear <= maxYear && isPlaying) {
            d3.select("#yearSlider").property("value", currentYear);
            updateTimeline(currentYear);
            currentYear++;
        } else {
            clearInterval(interval);
            d3.select("#playPauseButton").text("Play");
        }
    }, 500);  // Animation step every 500ms (adjust speed as needed)
}

// Function to update the timeline based on the selected year
function updateTimeline(year) {
    // Filter the data for the selected year
    const filteredData = data.filter(d => d.year === year);

    // Set up scales for positioning and coloring
    const xScale = d3.scaleBand()
        .domain(filteredData.map(d => d.country))
        .range([0, width])
        .padding(0.1);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(filteredData, d => d.new_sp_coh)])
        .range([height, 0]);

    // Select and update the bars for the timeline
    const bars = svg.selectAll(".bar")
        .data(filteredData);

    // Enter new bars for the timeline
    bars.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.country))
        .attr("y", height)
        .attr("width", xScale.bandwidth())
        .attr("height", 0)
        .attr("fill", d => d3.interpolateBlues(d.completion_rate))
        .on("mouseover", (event, d) => {
            tooltip.style("opacity", 1)
                .style("left", `${event.pageX + 10}px`)
                .style("top", `${event.pageY + 10}px`)
                .html(`
                    <strong>Country:</strong> ${d.country}<br>
                    <strong>Year:</strong> ${d.year}<br>
                    <strong>Cohort Size:</strong> ${d.new_sp_coh}<br>
                    <strong>Completion Rate:</strong> ${d.completion_rate}<br>
                    <strong>Failure Rate:</strong> ${d.failure_rate}
                `);
        })
        .on("mouseout", () => tooltip.style("opacity", 0));

    // Transition to animate the bars for the selected year
    bars.transition()
        .duration(500)
        .attr("y", d => yScale(d.new_sp_coh))
        .attr("height", d => height - yScale(d.new_sp_coh));

    // Remove exited bars
    bars.exit().remove();
}

// Update timeline when the slider value changes
d3.select("#yearSlider").on("input", function() {
    const selectedYear = +this.value;
    updateTimeline(selectedYear);
});
