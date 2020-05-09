import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { addToCart } from '../../assets/components/actions/cartActions';
import Title from '../../assets/components/Title/Title';

import './Ordinateur.css';

class Ordinateur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  //Liaison avec la base de donnée MVC : Modèle produit/Controleur/Produit
  componentDidMount() {
    fetch('http://localhost:8080/produits/ordinateur', {
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

  /***********Appel des produitdepuis le state Data du component */
  render() {
    let itemList = this.state.data.map((item) => {
      return (
        /******  Définition de l'affichage des composants du produit */
        <Card className="card-product">
          <Card.Img
            className="my-auto"
            variant="top"
            src={item.img}
            alt={item.title}
          />
          <Card.Body>
            <Card.Title className="font-size-title">
              <Link to={`/produits/detail/${item.title}/${item.id}`}>
                <span className="text-center ">{item.title}</span>
              </Link>
            </Card.Title>
            <Card.Text>
              <p>{item.detail}</p>
              <h5 className="card-subtitle text-center pos-prix">
                Prix: {item.price}€
              </h5>
            </Card.Text>
            <Button
              className="pos"
              variant="info"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              Ajouter au panier
            </Button>
          </Card.Body>
        </Card>
      );
    });

    return (
      /******  Définition de l'affichage des produits */
      <div className="container-fluid">
        <Breadcrumb className="container">
          <Breadcrumb.Item>
            <Link to="/">Accueil</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Ordinateur</Breadcrumb.Item>
        </Breadcrumb>
        <Title name="Nos" title="Ordinateurs"></Title>
        <div className="cards-item ">{itemList}</div>
      </div>
    );
  }
}

//Mise à jour du state Global

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

export default connect(mapStateToProps, mapDispatchToProps)(Ordinateur);
