import React from 'react';
import { Bar } from 'react-chartjs-2';

class Last3MonthsReturnBarChart extends React.Component {
  threeMonthsData = [];
  prevNav = '';
  render() {
    const { data, fund } = this.props;
    if (data.length) {
      this.threeMonthsData = data.slice(1, 3);
      this.threeMonthsData.reverse();
    }
    const barChartData = {
      labels: this.threeMonthsData.map((i) => i.date),
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
      <div className="last-three-months-return-container box-container">
        <Bar data={barChartData}
          options={{
            title: {
              display: true, text: 'Last 3 Months Return', fontSize: 12
            },
            legend: {
              display: false, position: 'bottom'
            }
          }} />
      </div>
    )
  }
}
export { Last3MonthsReturnBarChart };
export default { Last3MonthsReturnBarChart };