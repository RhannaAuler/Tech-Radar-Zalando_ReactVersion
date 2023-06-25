import './App.css'
import React, { useEffect, useRef, useState } from 'react';
import radar_visualization from './radar';
import * as d3 from 'd3';
import techData from './techData.json';
import InformationTable from './infoTable';
import { Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function App() {
  const svgRef = useRef();
  const containerRef = useRef();

  const [config, setConfig] = useState(techData);

  // get the page dimensions and change in the config object (currently not being used)
  const pageWidth = document.documentElement.clientWidth;
  const pageHeight = document.documentElement.clientHeight;


  // makes a request to the server to add a new technology
  const handleClick = () => {
    fetch('http://localhost:3001/update-json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(config),
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // parse the response as JSON
        } else {
          throw new Error('Failed to update JSON file.');
        }
      })
      .then((data) => { // to get the modified file sent from the server
        setConfig(data);  // update the config to add the new tech
        console.log('JSON file updated successfully.', data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // remove the old SVG if it exists
    svg.selectAll("*").remove();

    // set the attributes for the new SVG
    svg.attr("width", config.width)
      .attr("height", config.height);

    // call the function to create the radar
    radar_visualization(svg, svgRef, config);
  }, [config])


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid className="App"
        container
        direction="column"
        width={1500}
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={0}
      >

        <title>Zalando Tech Radar</title>
        {/* <link rel="shortcut icon" href="https://www.zalando.de/favicon.ico"> */}

        {/* <script src="https://d3js.org/d3.v4.min.js"></script>
        <script src="radar.js"></script> */}


        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <div style={{ position: 'relative' }}>
            <svg id={'#radar'} ref={svgRef}></svg>
            <Button
              variant="contained"
              style={{
                position: 'absolute',
                top: '20px',
                right: '10px',
                backgroundColor: '#009eb0',
                color: '#fff',
                fontWeight: 'bold'
              }}
              startIcon={<AddIcon />}
              onClick={handleClick}
            >
              Add Tech
            </Button>

          </div>
        </div>


        <InformationTable />

      </Grid>
    </div>
  );
}

export default App;
