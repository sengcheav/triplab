import React from 'react';

class Header extends React.Component{
  render() {
    const header = this.props.headername ;
    return (
      <header>
        {header} 
      </header>


    )
  }


}

export default Header ;
