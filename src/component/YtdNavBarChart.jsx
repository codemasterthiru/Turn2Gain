import React from "react";
import { Bar } from "react-chartjs-2";

class YtdNavBarChart extends React.Component {
  oneYearData = [];
  render() {
    const { data, fund } = this.props;
    if (data.length) {
      this.oneYearData = data.slice(1, 261);
      this.oneYearData.reverse();
    }
    const barChartData = {
      labels: this.oneYearData.map(i => i.date),
      datasets: [
        {
          label: fund,
          borderColor: "#182145",
          backgroundColor: "#FFF9C4",
          borderWidth: 3,
          data: this.oneYearData.map(i => i.nav)
        }
      ]
    };
    return (
      <div className="ytd-nav-bar-chart box-container">
        <Bar
          data={barChartData}
          options={{
            title: {
              display: true,
              text: "YTD NAV",
              fontSize: 16
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
        />
      </div>
    );
  }
}

export { YtdNavBarChart };
export default { YtdNavBarChart };
