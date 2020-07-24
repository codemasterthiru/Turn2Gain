import React from 'react';
import { SearchIcon } from '../Icons';
import './style.scss';
import { Header } from '../pages';

class FundSearch extends React.Component {
  state = {
    searchData: [],
    isClicked: false,
  }
  onChange = (event) => {
    const value = event.target.value, _self = this;
    this.clearTime = 0;
    setTimeout(function () {
      if (value) {
        fetch("https://api.mfapi.in/mf/search?q=" + value)
          .then(response => response.json())
          .then((response) => {
            _self.setState({ searchData: response, isClicked: false });
          });
      }
    }, 1000)
  }
  onClick = (i) => {
    this.setState({ isClicked: true });
    window.location.href = "#/dashboard/" + i.schemeCode;
  }
  render() {
    const { searchData, isClicked } = this.state;
    const { isLogo = false } = this.props;
    return (
      <>
        <div className={"search-container"}>
          {isLogo ? <Header /> : ""}
          <input type="text" onChange={this.onChange} className={"fund-search-input " + (isLogo ? "extra-padding" : "")}
            placeholder={"Search your mutual fund"}
            onFocus={() => this.setState({ isClicked: false })}
          />
          <SearchIcon className={"search-icon"} />
        </div>
        {!isClicked && searchData.length ? <div className={"picker"}>
          {searchData.map((i) =>
            <div className={"picker-inner"} onClick={() => this.onClick(i)}>{i.schemeName}</div>
          )}
        </div> : ""}
      </>
    )
  }
}

export { FundSearch };
export default { FundSearch };