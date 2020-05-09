import React, { Component } from "react";

import CarousselPub from "../../assets/components/CarousselPub/CarousselPub";

import ListeProduitItem from "../../assets/components/ListeProduitItem/ListeProduitItem";
import ListeProduitItem2 from "../../assets/components/ListeProduitItem/ListeProduitItem2";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <CarousselPub />
        </div>
        <div className="row">
          <ListeProduitItem />
        </div>
        <div className="row">
          <ListeProduitItem2 />
        </div>
        <div className="row"></div>
      </div>
    );
  }
}

export default Home;
