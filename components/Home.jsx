import React from 'react';
import Layout from './Layout.jsx';

class Home extends React.Component{

  constructor() {
    super() ;
    this.state = {
      post =[];
    }
  }

  _getPost(){
    //call on db to get all the post
  }

  render() {
    return(
      <div>
        <Layout header = {"HomePage header"} footer = {"Homepage footer"}></Layout>

      </div>
    )  
  }


}
