import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  navigate(){
    console.log(this.props.history);
    //this is not working
    // this.props.history.pushState(null,"/");
  }
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    console.log("layout");
    return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>

              {this.props.children}

              <Link to="archives" activeClassName="active"><button class="btn btn-primary">archives</button></Link>
              <Link to="featured" activeClassName="active"><button class="btn btn-primary">featured</button></Link>
              <Link to="settings" activeClassName="active"><button class="btn btn-primary">settings</button></Link>



            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
