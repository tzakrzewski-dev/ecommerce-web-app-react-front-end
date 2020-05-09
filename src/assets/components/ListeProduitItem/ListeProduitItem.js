import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { addToCart } from "../actions/cartActions";

import "./ListeProduitItem.css";

class ListeProduitItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    })
      .then((response) => response.json())
      .then(
        (data) => this.setState({ data }),
        (error) => console.log(error)
      );
  }
  /* sort = () => {
      let products = this.state.products;
  
      products.sort(
          (productA, productB) =>
              parseFloat(productA.price.replace("€", "")) -
              parseFloat(productB.price.replace("€", ""))
      );
  
      this.setState({ products: products });
  }; */

  handleClick = (id) => {
    this.props.addToCart(id);
  };

  /* sort = () => {
        let products = this.state.products;
    
        products.sort(
            (productA, productB) =>
                parseFloat(productA.price.replace("€", "")) -
                parseFloat(productB.price.replace("€", ""))
        );
    
        this.setState({ products: products });
    }; */

  /***********Filtre des produits Ordinateurs */
  render() {
    let itemList = this.state.data
      .filter((opt) => opt.filter === "home1")
      .map((item) => {
        return (
          /******  Définition de l'affichage des composants du produit */
          <Card className="card-ListeProduitItem">
            <Card.Img variant="top" src={item.img} alt={item.title} />
            <Card.Body>
              <Card.Title>
                <Link to={`/produits/detail/${item.title}/${item.id}`}>
                  <span className="text-center">{item.title}</span>
                </Link>
              </Card.Title>
              <Card.Text>
                <p>{item.detail}</p>
                <h5 className="card-subtitle pos-prix">Prix: {item.price}€</h5>
              </Card.Text>
              <div className="flex">
                <Button
                  className="pos"
                  variant="info"
                  onClick={() => {
                    this.handleClick(item.id);
                  }}
                >
                  Ajouter au panier
                </Button>
              </div>
            </Card.Body>
          </Card>
        );
      });

    return (
      /******  Définition de l'affichage des produits */
      <div className="container-fluid">
        <h2
          style={{
            "text-align": "center",
            "text-transform": "uppercase",
            margin: "4rem auto 1rem",
          }}
        >
          Les produits du moment
        </h2>
        <div className="cards-item align-items-sm-stretch">{itemList}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListeProduitItem);
