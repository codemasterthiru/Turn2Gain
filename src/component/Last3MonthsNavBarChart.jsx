import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

class Last3MonthsNavBarChart extends React.Component {
  threeMonthsData = [];
  render() {
    const { data, fund } = this.props;
    if (data.length) {
      this.threeMonthsData = data.slice(1, 66);
      this.threeMonthsData.reverse();
    }
    if (data.length) data.reverse();
    const barChartData = {
      labels: this.threeMonthsData.map((i) => {
        return i.date
      }),
      datasets: [{
        label: fund,
        borderColor: '#182145',
        backgroundColor: '#CE93D8',
        borderWidth: 2,
        data: this.threeMonthsData.map((i) => {
          let calc = 0;
          if (this.prevNav) {
            calc = ((i.nav - this.prevNav) / this.prevNav) * 100;
          }
          this.prevNav = i.nav;
          return calc.toFixed(2);
        })
      }]
    }
    return (
      <div className="nav-line-chart box-container">
        <div className="header-text">Last 3 Months of Nav</div>
        <Bar data={barChartData}
          options={{
            title: {
              display: true, text: 'Last 3 Months of Nav', fontSize: 16
            },
            legend: {
              display: true, position: 'top'
            }
          }}
        />
      </div>
    )
  }
}

export { Last3MonthsNavBarChart };
export default { Last3MonthsNavBarChart };