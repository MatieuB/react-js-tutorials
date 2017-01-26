import React from "react";

import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
export default class Layout extends React.Component {
  constructor(){
    super()
    this.state = {title:"welcome mateos",
     name:"matty"
    }
  }
  changeTitle(title){
    this.setState({title})
  }
  render(){

    setTimeout(()=>{this.setState({name:"mataytoe"})},5000)
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>

        <h1> It's {this.state.name}! </h1>
        <Footer/>
      </div>
    );
  }
}
