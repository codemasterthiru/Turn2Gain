import React from 'react';
import { LogoIcon } from '../../Icons';
import './style.scss';

class Header extends React.Component {
  render() {
    return (
      <><LogoIcon className={"logo-image"} /></>
    )
  }
}

export { Header };
export default { Header };