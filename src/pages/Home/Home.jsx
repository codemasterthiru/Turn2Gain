import React from 'react';
import './style.scss';
import { SearchIcon } from '../../Icons';
import { Header } from '../Header';
import { FundSearch } from '../../component';

class Home extends React.Component {
  render() {
    return (
      <div className={"container"}>
        <Header />
        <FundSearch />
      </div>
    )
  }
}
export { Home };
export default { Home };