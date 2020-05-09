import React, { Component } from 'react';

import { Button, Card,Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from '../actions/cartActions';

/*import css'*/ import './Cart.css';

/*********Composant  */
import Recipe from '../Recipe/Recipe';


/******Composant Panier**************** */
class Cart extends Component {

  
  /***
   * Liste des actions à gérér au sein du panier
   */

  //Pour effacer complètement le panier
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //Moduler les quantités
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //Pour oter des quantités
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };



  // Détail des rendus des différentes actions dans le panier
  render() {
    /*****Affichage des informations lorsque l'on ajoute un éléments au panier  */
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          /******  Définition de l'affichage des composants du panier */

          <div className="container-fluid">
            <div className="row ">
              <div className="col-3 ">
                <img className="card-img-bottom" src={item.img} alt="" />
              </div>
              <div className="col-9">
                <div className="row">
                  <h4>{item.title}</h4>
                  <p className="card-text">{item.detail} </p>
                  <h5 className="card-title">Prix: {item.price} €</h5>
                </div>
                <div className="row">
                  <div className="col-6">
                    <Link to="/panier">
                      <i
                        className="material-icons inline-flex  "
                        onClick={() => {
                          this.handleAddQuantity(item.id);
                        }}
                      >
                        add_circle_outline
                      </i>
                    </Link>
                    <h3 className="inline-flex">{item.quantity}</h3>
                    <Link to="/panier">
                      <i
                        className="material-icons inline-flex  "
                        onClick={() => {
                          this.handleSubtractQuantity(item.id);
                        }}
                      >
                        remove_circle_outline
                      </i>
                    </Link>
                  </div>
                  <div className="col-6">
                    <Button
                      className="my-auto "
                      variant="info"
                      onClick={() => {
                        this.handleRemove(item.id);
                      }}
                    >
                      Supprimer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <h5>Panier vide</h5>
    );

    return (
      /******  Définition de l'affichage du panier */
      <div className="container-fluid ">
        <div className="row margin-top ">
          <div className="col-8">
            <Card className="panier">
              <Card.Header>
                <h3>Vous avez commandé</h3>
              </Card.Header>
              <Card.Body >
                <Card.Text>
                  <ul>{addedItems}</ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Recipe />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    //addedItems: state.addedItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
