import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['9월 1일', '9월 8일', '9월 15일', '9월 22일', '9월 28일', '10월 5일', '10월 12일'],
  datasets: [
    {
      label: 'Total View',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class InfluencerChart extends Component {

  render() {
    return (
      <div>
        <h2>예콩이 - 2017년 10월 통계</h2>
        <Line data={data} />
      </div>
    );
  }
}

export default InfluencerChart;
