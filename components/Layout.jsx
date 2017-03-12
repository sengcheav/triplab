import React from 'react' ;
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Body from './Body.jsx'

class Layout extends React.Component{

  constructor() {
    super() ;
    this.state= {};

  }
  render(){
    let headername = "header name ";
    let footername = "footer name ";
    let bodyname = "bodyname";
    if(this.props.header){
      headername = this.props.header;
      footername = this.props.footer;
    }
    console.log(this.props);
    return(

      <div>
        <Header headername = {headername} />
        <Body bodyname = {bodyname}/>
        <Footer footername = {footername} />

      </div>


    )
  }

}
export default Layout ;
