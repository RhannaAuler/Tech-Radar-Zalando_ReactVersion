# Getting Started with a React version of the Technology Radar from Zalando

This project was created as an exercise to add the original technology radar from Zalando. A initial React app was created with [Create React App](https://github.com/facebook/create-react-app), and adapted to incorporate the Zalando original code. The original project description can be read in the section below *Zalando original description*.

## Getting started

Make sure you have npm inst

1. Make sure you have npm installed.

2. Install the dependencies:
   
```
npm i
```

3. Start both client and server

```
npm start
```

3. The server should be running on port 3001, while the client can be acessed through port 3000:
 
```
http://localhost:3000/
```

4. The radar entries are avaiable at `techData.json`, new technologies can be added by editting the `entries` object.

## Zalando original description

At [Zalando](http://zalando.de), we maintain a [public Tech
Radar](http://zalando.github.io/tech-radar/) to help our engineering teams
align on technology choices. It is based on the [pioneering work
by ThoughtWorks](https://www.thoughtworks.com/radar).

This repository contains the code to generate the visualization:
[`radar.js`](/docs/radar.js) (based on [d3.js v4](https://d3js.org)).
Feel free to use and adapt it for your own purposes.

## Learn more about Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Zalando Tech Radar License

```
The MIT License (MIT)

Copyright (c) 2017-2022 Zalando SE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```