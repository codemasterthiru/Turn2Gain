import React from "react";
import "./style.scss";
import {
  FundSearch,
  NavLineChart,
  YtdNavBarChart,
  Last3MonthsReturnBarChart,
  YTDReturn,
  Last3MonthsNavBarChart
} from "../../component";

class Dashboard extends React.Component {
  state = {
    fund: {},
    id: ""
  };
  componentDidMount() {
    const pathArray = window?.location?.search?.split("=");
    this.id = pathArray[pathArray.length - 1];
    this.api(this.id);
  }
  UNSAFE_componentWillReceiveProps() {
    const findId = window?.location?.search?.split("=");
    const id = findId[findId.length - 1];
    if (id !== this.id) {
      this.api(id);
      this.id = id;
    }
  }
  api = id => {
    fetch("https://api.mfapi.in/mf/" + id)
      .then(response => response.json())
      .then(response => {
        if (response.status === "SUCCESS") {
          this.setState({ fund: response });
        }
      });
  };

  render() {
    const { fund = {} } = this.state;
    const { meta = {}, data = [] } = fund;
    const prevCurrData = { prev: data[ 0 ], to: data[ 1 ] };

    return (
      <div className={"container"}>
        <FundSearch isLogo={true} />
        <div className={"info-container"}>
          <div className={"fund-container"}>
            {Object.keys(meta).map((i, idx) => {
              return (
                <div className={ "fund" } key={ idx }>
                  <div className={"label"}>{i.split("_")[1]}</div>
                  <div
                    className={
                      i.split("_")[1] === "house" ? "fund-content" : "content"
                    }
                  >
                    {meta[i]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={"fund-container"}>
          {Object.keys(prevCurrData).map((i, idx) => {
            return (
              <div className={ "fund" } key={ idx }>
                <div className={"label"}>{i + "Day Nav"}</div>
                <div className={"fund-content"} >
                  {prevCurrData[i]?.nav}
                </div>
              </div>
            );
          })}
        </div>
        <Last3MonthsReturnBarChart data={data} fund={meta.scheme_name} />
        <Last3MonthsNavBarChart data={data} fund={meta.scheme_name} />
        <YTDReturn data={data} fund={meta.scheme_name} />
        <YtdNavBarChart data={data} fund={meta.scheme_name} />
        <NavLineChart data={data} fund={meta.scheme_name} />
      </div>
    );
  }
}

export { Dashboard };
export default { Dashboard };
