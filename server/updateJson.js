const fs = require('fs');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());

// configure body-parser to parse JSON bodies
app.use(bodyParser.json());

app.post('/update-json', (req, res) => {
  // read the JSON file
  console.log('here')
  const filePath = path.resolve(__dirname, '../src/techData.json'); // in case directory name is different
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const newTech = req.body;

  console.log(newTech)

  // modify the JSON object
  // const newTech = {
  //   "quadrant": 0,
  //   "ring": 2,
  //   "label": "Julia",
  //   "active": true,
  //   "moved": 0
  // };
  jsonData.entries.push(newTech);

  // write the modified JSON object back to the file
  fs.writeFileSync(filePath, JSON.stringify(jsonData));

  // send the updated data as the response
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


