import React from "react";
import { Line } from "react-chartjs-2";
import { dateToString } from "../utils";

class YTDReturn extends React.Component {
  ytdReturn = [];

  prevNav = "";

  render() {
    const { data, fund } = this.props;
    if (this.props.data) {
      this.ytdReturn = data?.filter((i, idx) => {
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

    var lineChartData = {
      labels: this.ytdReturn.map(i => dateToString(i?.date, "mmmyyyy")),
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
        <div className="header-text">Year To Date Returns</div>
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
