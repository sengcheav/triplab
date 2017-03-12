import React from 'react';

class Footer extends React.Component{
  render(){
    const footername = this.props.footername;
    return (
      <footer>
        {footername}
      </footer>

    )


  }


}
export default Footer ;
