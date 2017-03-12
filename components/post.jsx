import React from 'react';
import Photo from './Photo.jsx';


class Post extends React.Component{

  constructor() {
    super();
    this.state ={

    }
  }

  render() {
    return(
      <div>
        <Photo title = {this.props.phototitle} link = this.props.photolink/>
      </div>

    )
  }

}
