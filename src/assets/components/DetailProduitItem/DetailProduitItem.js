import React, { Component } from 'react';
import { Row, Carousel, Col, ListGroup, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { addToCart } from '../actions/cartActions';
import { connect } from 'react-redux';


import './DetailProduitItem.css';

class DetailProduitItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  //Liaison avec la abse de donnée MVC : Modèle produit/Controleur/Produit
  componentDidMount() {
    fetch('http://localhost:8080/produits/detail', {
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

  handleClick = (id) => {
    this.props.addToCart(id);
  };
  /***********Filtre des produits Ordinateurs */
  render() {
    let itemList = this.state.data
    .filter((opt) => opt.id === parseInt(window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)) )
    .map((item) => {
        return (
          /******  Définition de l'affichage des composants du produit */

          <div className="container">

            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">
                  Accueil
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={(() => {
                  switch (item.category) {
                    case "phone": return "/produits/telephone/";
                    case "computer": return "/produits/ordinateur/";
                  }
                })()}
                >{(() => {
                  switch (item.category) {
                    case "phone": return "Telephone";
                    case "computer": return "Ordinateur";
                  }
                })()}
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                {item.title}
              </Breadcrumb.Item>
            </Breadcrumb>

            <Row>
              <Col sm={8}>
                <ListGroup.Item>
                  <Row>
                    <div>
                      <h4>{item.title}</h4>
                      <h6>{item.detail}</h6>
                    </div>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className='height-auto'>
                  <div className="displayflex">
                    <Col sm={10}>
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={item.srcimage1}
                            alt="First slide"
                          />
                          <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={item.srcimage2}
                            alt="Third slide"
                          />
                          <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src={item.srcimage3} alt="Third slide" />
                          <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>{' '}
                    </Col>
                    <Col sm={2}>
                      <img
                        className="d-block w-100"
                        src={item.logoattribut1}
                        alt="Third slide"
                      />
                      <img
                        className="d-block w-100"
                        src={item.logoattribut2}
                        alt="Third slide"
                      />
                    </Col>
                  </div>
                </ListGroup.Item>
              </Col>

              <Col sm={4}>
                <ListGroup.Item>
                  <h2 className="price-item">
                    {item.price}
                    <sup>€00</sup>
                  </h2>
                  <Button
                    className="position"
                    variant="info"
                    onClick={() => {
                      this.handleClick(item.id);
                    }}
                  >
                    Ajouter au panier
                </Button>
                </ListGroup.Item>
              </Col>
            </Row>
          </div>
        );
      });

    return (
      /******  Définition de l'affichage du produits en détail */
      <div className="container">
        <div>{itemList}</div>
        
      </div>
    );
  }
}

//Mise à jour du state Global pour mise au panier
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(DetailProduitItem);
