import React from 'react';
import ReactDOM from 'react-dom';

import {range} from "d3"

import { Face } from './Face';
const width = 150;
const height =150;

const array  = range(18)

        


const App = () => (
  array.map(()=><Face
    width={width}
    height={height}
    centerX={width / 2}
    centerY={height / 2}
    strokeWidth={2}
    eyeOffsetX={30}
    eyeOffsetY={30}
    eyeRadius={15 + Math.random()*5}
    mouthWidth={5}
    mouthRadius={35}
    fill={"#"+(0x1000000 + Math.random() * 0xffffff) .toString(16)
        .substr(1, 6)}
  />)
  
);

const rootElement = document.getElementById(
  'root'
);
ReactDOM.render(<App />, rootElement);
