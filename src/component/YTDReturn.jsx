import React from "react";
import { Line } from "react-chartjs-2";

class YTDReturn extends React.Component {
  ytdReturn = [];
  month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  prevNav = "";
  render() {
    const { data, fund } = this.props;
    if (data.length) {
      this.ytdReturn = data.slice(1, 261);
      this.ytdReturn.reverse();
    }
    var lineChartData = {
      labels: this.ytdReturn.map(i => {
        const split = i.date.split("-");
        const format = split[1] + "/" + split[0] + "/" + split[2];
        const date = new Date(format);
        const getMonth = this.month[date.getMonth()];
        const getYear = date.getFullYear();
        return getMonth + " " + getYear;
      }),
      datasets: [
        {
          label: fund,
          borderColor: "#182145",
          backgroundColor: "#F8BBD0",
          borderWidth: 2,
          data: this.ytdReturn.map(i => {
            let calc = 0;
            if (this.prevNav) {
              calc = ((i.nav - this.prevNav) / this.prevNav) * 100;
            }
            this.prevNav = i.nav;
            return calc.toFixed(2);
          })
        }
      ]
    };
    return (
      <div className="ytd-return-chart box-container">
        <Line
          data={lineChartData}
          options={{
            title: {
              display: true,
              text: "YTD Return",
              fontSize: 16
            },
            legend: {
              display: false,
              position: "bottom"
            }
          }}
        />
      </div>
    );
  }
}

export { YTDReturn };
export default { YTDReturn };
