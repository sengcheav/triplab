import React from 'react';

class Photo extends React.Component{
  constructor() {
    super();
    this.state = {
      title:"",
      link:""
    }

  }


  render() {
    this.setState({title:this.props.title, link:this.props.link});
    return (
      <div>
        <img src = {this.props.link} title= {this.props.title}/>


      </div>
    )

  }

}
