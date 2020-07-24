import React from 'react';
import { Line } from 'react-chartjs-2';

class NavLineChart extends React.Component {
  render() {
    const { data, fund } = this.props;
    if (data.length) data.reverse();
    var lineChartData = {
      labels: data.map((i) => i.date),
      datasets: [{
        label: fund,
        backgroundColor: '#B3E5FC',
        borderColor: '#182145',
        borderWidth: 2,
        data: data.map((i) => i.nav)
      }]
    }
    return (
      <div className="nav-line-chart box-container">
        <Line data={lineChartData}
          options={{
            title: {
              display: true, text: 'Performance of NAV', fontSize: 16
            },
            legend: {
              display: true, position: 'bottom'
            }
          }}
        />
      </div>
    )
  }
}

export { NavLineChart };
export default { NavLineChart };