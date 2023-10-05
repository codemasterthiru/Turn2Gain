import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

class Last3MonthsNavBarChart extends React.Component {
  threeMonthsData = [];
  render() {
    const { data, fund } = this.props;

    this.threeMonthsData = data?.filter((i, idx) => {
      if (i?.date) {
        const split = i.date.split("-");
        const format = split[1] + "/" + split[0] + "/" + split[2];
        let dataDate = new Date(format), sysDate = new Date();
        if ((dataDate.getFullYear() === sysDate.getFullYear()) &&
            ((dataDate.getMonth() === sysDate.getMonth()) ||
            (dataDate.getMonth() === sysDate?.getMonth() - 1) ||
            (dataDate.getMonth() === sysDate?.getMonth() - 2))) {
          return i;
        }
      }
    });

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
          return Number(i?.nav).toFixed(2);
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
          } }
        />
      </div>
    )
  }
}

export { Last3MonthsNavBarChart };
export default { Last3MonthsNavBarChart };