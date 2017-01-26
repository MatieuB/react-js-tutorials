import React from "react";



export default class Title extends React.Component {
  render() {
    const styles = {border:'5px solid green'}
    return (
      <div style={styles} >
        <h1>{this.props.title}</h1>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
