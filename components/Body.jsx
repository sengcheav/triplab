import React from 'react';

class Body extends React.Component{
  constructor() {
    super() ;
    this.state ={};
  }


  render(){
    const bodyName = this.props.bodyname ;
    return(
      <div className = "body">
        {bodyName}
      </div>
    )


  }



}
export default Body ;
