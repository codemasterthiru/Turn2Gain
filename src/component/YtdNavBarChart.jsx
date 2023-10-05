import React from "react";
import { Bar } from "react-chartjs-2";

class YtdNavBarChart extends React.Component {
  oneYearData = [];
  render() {
    const { data, fund } = this.props;
    if (this.props.data) {
      this.oneYearData = data?.filter((i, idx) => {
        if (i?.date) {
          const split = i.date.split("-");
          const format = split[1] + "/" + split[0] + "/" + split[2];
          let dataDate = new Date(format), sysDate = new Date();
          if (dataDate.getFullYear() === sysDate.getFullYear()) {
            return i;
          }
        }
      });
      // this.ytdReturn.reverse();
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
        <div className="header-text">Year To Date NAV</div>
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
