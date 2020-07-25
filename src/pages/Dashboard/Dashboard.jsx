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
    const pathArray = this.props.location.pathname.split("/");
    this.id = pathArray[pathArray.length - 1];
    this.api(this.id);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { location } = nextProps;
    const { pathname } = location;
    const findId = pathname.split("/");
    const id = findId[findId.length - 1];
    if (id !== this.id) {
      this.api(id);
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

    return (
      <div className={"container"}>
        <FundSearch isLogo={true} />
        <div className={"info-container"}>
          <div className={"fund-container"}>
            {Object.keys(meta).map(i => {
              return (
                <div className={"fund"}>
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
        <Last3MonthsReturnBarChart data={data} fund={meta.scheme_name} />
        <YTDReturn data={data} fund={meta.scheme_name} />
        <Last3MonthsNavBarChart data={data} fund={meta.scheme_name} />
        <YtdNavBarChart data={data} fund={meta.scheme_name} />
        <NavLineChart data={data} fund={meta.scheme_name} />
      </div>
    );
  }
}

export { Dashboard };
export default { Dashboard };
