import React, { useState } from 'react';

import './graph.css';

import CanvasJSReact from './canvasjs-3.3.2/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Graph = () => {
  let [income, setIncome] = useState(0);
  let [expenditure, setexpenditure] = useState(0);
  let [showGraph, setShowGraph] = useState(false);
  let [options, setOptions] = useState({
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: 'Savings and Expenditure Of Farmer',
    },
  });

  const handleGraph = () => {
    let newData = [
      {
        type: 'pie',
        startAngle: 75,
        toolTipContent: '<b>{label}</b>: {y}%',
        showInLegend: 'true',
        legendText: '{label}',
        indexLabelFontSize: 16,
        indexLabel: '{label} - {y}%',
        dataPoints: [
          { y: (expenditure / income) * 100, label: 'Expenditure' },
          { y: ((income - expenditure) / income) * 100, label: 'Savings' },
        ],
      },
    ];

    setOptions(prevOptions => ({ ...prevOptions, data: newData }));
    setShowGraph(true);
    console.log(options);
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className='graph-container'>
        <div className='label'>
          Income :{' '}
          <input
            className='graph-input'
            placeholder='Your Income e.g 10000/-'
            type='number'
            // value={income}
            onChange={e => setIncome(e.target.value)}
          />
        </div>
        <div className='label'>
          Expenditure :{' '}
          <input
            placeholder='Your Expenditure e.g 500/-'
            className='graph-input'
            type='number'
            // value={expenditure}
            onChange={e => setexpenditure(e.target.value)}
          />
        </div>
        <div className='label'>
          <button className='show-graph' onClick={handleGraph}>
            Show Me Graph
          </button>
        </div>
        <div className='label'>
          <button className='show-graph' style={{ background: 'red', color: 'white' }} onClick={reset}>
            Reset
          </button>
        </div>
      </div>
      <div>{showGraph && <CanvasJSChart options={options} />}</div>
    </div>
  );
};

export default Graph;
