import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { dateToString, objectCompare } from "../utils";
import { Dropdown } from "primereact/dropdown";
import {
  fiveYearsDataCalc, oneDayDataCalc, oneMonthDataCalc, oneWeekDataCalc, oneYearDataCalc,
  sixMonthDataCalc, tenYearsDataCalc, threeMonthDataCalc, threeYearsDataCalc
} from "./dataCalc";

const NewYTDNAV = (props) => {
  const { data, fund } = props;
  const [ chartData, setChartData ] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState({ name: 'Last 3 Months', code: '3m' });
  const [selectedChart, setSelectedChart] = useState({ name: 'Line', code: 'line' });
  const periods = [
    { name: '1 Day', code: '1d' },
    { name: 'Last 1 Week', code: '1w' },
    { name: 'Last 1 Month', code: '1m' },
    { name: 'Last 3 Months', code: '3m' },
    { name: 'Last 6 Months', code: '6m' },
    { name: 'Last 1 Year', code: '1y' },
    { name: 'Last 3 Years', code: '3y' },
    { name: 'Last 5 Years', code: '5y' },
    { name: 'Last 10 Years', code: '10y' },
  ];
  const charts = [
    { name: 'Line', code: 'line' },
    { name: 'Bar', code: 'bar' },
  ];

  useEffect(() => {
    setChartData(threeMonthDataCalc(data));
  }, [data]);

  const onPeriodChange = (e) => {
    setSelectedPeriod(e?.value);

    switch (e?.value?.code) {
      case "1d":
        setChartData(oneDayDataCalc(data)); break;
      case "1w":
        setChartData(oneWeekDataCalc(data)); break;
      case "1m":
        setChartData(oneMonthDataCalc(data)); break;
      case "3m":
        setChartData(threeMonthDataCalc(data)); break;
      case "6m":
        setChartData(sixMonthDataCalc(data)); break;
      case "1y":
        setChartData(oneYearDataCalc(data)); break;
      case "3y":
        setChartData(threeYearsDataCalc(data)); break;
      case "5y":
        setChartData(fiveYearsDataCalc(data)); break;
      case "10y":
        setChartData(tenYearsDataCalc(data)); break;
    };
  };

  let lineChartData = {
    labels: chartData?.map(i => dateToString(i?.date, "ddmmyyyy")),
    datasets: [
      {
        label: fund,
        borderColor: "#182145",
        backgroundColor: "#FFF9C4",
        borderWidth: 2,
        data: chartData?.map(i => i.nav)
      }
    ]
  };

  let barChartData = {
      labels: chartData?.map(i => i.date),
      datasets: [
        {
          label: fund,
          borderColor: "#182145",
          backgroundColor: "#FFF9C4",
          borderWidth: 3,
          data: chartData?.map(i =>  i.nav)
        }
      ]
    };

  return (
    <div className="ytd-return-chart box-container">
      <div className="header-section">
        <div className="header-text" title={"NAV - " + (fund ? fund : "")}>{"NAV - " + (fund ? fund : "")}</div>
        <Dropdown className="ytd-dd" value={ selectedPeriod }
          onChange={ onPeriodChange } options={ periods } optionLabel="name" />
        <Dropdown className="ytd-dd" value={ selectedChart }
          onChange={(e) => setSelectedChart(e.value)} options={ charts } optionLabel="name" />
      </div>
      { selectedChart?.code === "line" ? <Line
        data={ lineChartData }
        options={ {
          title: {
            display: true,
            text: "NAV - " + fund,
            fontSize: 16
          },
          legend: {
            display: false,
            position: "bottom"
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  return "NAV: " + context?.formattedValue;
                }
              }
            }
          }
        } }
      /> : <Bar data={ barChartData }
        options={ {
          title: {
            display: true, text: 'NAV', fontSize: 16
          },
          legend: {
            display: true, position: 'top'
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  return "NAV: " + context?.formattedValue;
                }
              }
            }
          }
        } }
      /> }
    </div>
  );
}

export { NewYTDNAV };
export default { NewYTDNAV };
