import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class CarousselPub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  //Liaison avec la abse de donnée MVC : Modèle carrousel

  componentDidMount() {
    fetch('http://localhost:8080/carrousel', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
    })
      .then((response) => response.json())
      .then(
        (data) => this.setState({ data }),
        (error) => console.log(error)
      );
  }

  //Mise à jour du carrousel publicitaire avec le back
  render() {
    return (
      <Carousel className="container-fluid">
        {this.state.data.map((item) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.imgCarroussel}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default CarousselPub;
