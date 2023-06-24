// import logo from './logo.svg';
import './App.css'
import React, { useEffect, useRef } from 'react';
import radar_visualization from './radar';
import * as d3  from 'd3';
import config from './techData';
import InformationTable from './infoTable';

function App() {
  const svgRef = useRef();
  const containerRef = useRef();

  // // Get the page dimensions and change in the config object (currently not being used)
  const pageWidth = document.documentElement.clientWidth;
  const pageHeight = document.documentElement.clientHeight;

  // config.height = pageHeight*0.7;
  // config.width = pageWidth*0.9;

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .style("background-color", config.colors.background)
      .attr("width", config.width)
      .attr("height", config.height);

    radar_visualization(svg, svgRef, config);
  }, [])


  return (
    <div className="App">
        <title>Zalando Tech Radar</title>
        {/* <link rel="shortcut icon" href="https://www.zalando.de/favicon.ico"> */}

        {/* <script src="https://d3js.org/d3.v4.min.js"></script>
        <script src="radar.js"></script> */}

        <svg ref={svgRef}></svg>

        <InformationTable />

    </div>
  );
}

export default App;
