import './App.css'
import React, { useEffect, useRef, useState } from 'react';
import radar_visualization from './radar';
import * as d3 from 'd3';
import techData from './techData.json';
import InformationTable from './components/infoTable';
import { Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NewTechDialog from './components/newTechDialog';

function App() {
  const svgRef = useRef();
  const containerRef = useRef();

  // the tech data used to create the radar blips
  const [config, setConfig] = useState(techData);

  // new tech dialog and confirmation
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // get the page dimensions and change in the config object (currently not being used)
  const pageWidth = document.documentElement.clientWidth;
  const pageHeight = document.documentElement.clientHeight;

  // once the new tech button is pressed a dialog is open
  // when confirmed, a request to the server to add a new technology is sent
  const handleClick = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleDialogConfirm = (type, semantics, label) => {
    console.log(type, semantics, label, type!=='' && semantics!=='' && label!=='')
    if (type!=='' && semantics!=='' && label!==''){
      let newEntry = {
        "quadrant": type,
        "ring": semantics,
        "label": label,
        "active": true,
        "moved": 0
      }
      console.log(newEntry)

      fetch('http://localhost:3001/update-json', { // future fuctionality is to check if the label already exists
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry), // convert the object to a JSON string
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
        .catch(error => { // handles the error
          console.error(error);
        })
        .finally(() => {
          setIsDialogOpen(false); // close the dialog
        });
    }

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
    <div id={'#main'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
            <NewTechDialog isOpen={isDialogOpen} onClose={handleDialogClose} onConfirm={handleDialogConfirm} />
          </div>
        </div>

        <InformationTable />

      </Grid>
    </div>
  );
}

export default App;
