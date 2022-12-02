
import React, { Component } from 'react';

import { Chart, registerables } from 'chart.js'
Chart.register(...registerables);

import {benfort_probs, benford_from_array} from '../../benford'


class Grafiek extends Component {
  constructor(props) {
    super(props);
    this.grafiek = null;
    this.state = {}
  }

  resetGrafiek(){
    this.grafiek.data.datasets = [{
      label: 'Benford theorie',
      data: benfort_probs.map(i => i.prob),
      borderWidth: 1
    }]
    this.grafiek.update();
  }

  addField(newData, name){
    this.grafiek.data.datasets.push({
      label: name,
      data: newData,
      borderWidth: 1,
      backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16)
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props === prevProps) return;
    if (!this.props.data.length) return;

    this.resetGrafiek();
    let firstRow  = this.props.data[0]
    let dataKeys = Object.keys(firstRow);
    dataKeys.forEach(key  =>{
      if(typeof firstRow[key] == 'number'){
          let arr= this.props.data.map(row => row[key]);
          let benford = benford_from_array(arr);
          this.addField( benford.map(i => i.prob) , key );
      }
    })
    this.grafiek.update();
  }

  componentDidMount(){
    const ctx = document.getElementById('Chart');
    this.grafiek = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [],
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
    this.resetGrafiek();
  }

  render()  {    
    return <>
        <canvas id="Chart"></canvas>
      </>
  }

}

export default Grafiek;
