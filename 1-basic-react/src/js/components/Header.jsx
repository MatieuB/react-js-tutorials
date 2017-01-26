import React from "react";

import Title from "./Header/Title.jsx";

export default class Header extends React.Component {
  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title)
  }
  render(){
    console.log(this.props)
    return (
      <div>
        <Title title={this.props.title} name={this.props.name}/>
        <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
