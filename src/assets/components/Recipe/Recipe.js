import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Card } from 'react-bootstrap';

import './Recipe.css';

//import { addShipping } from './actions/cartActions'

/*****Composants qui sert à calculer les frais d'expéditions  */
class Recipe extends Component {
  //Méthode qui vérifie ka présence du bouton check sur l'expédition
  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.substractShipping();
  }

  /****Méthode qui vérifie si lon a coché la cache d'expédition ou non  */
  handleChecked = (e) => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  ///Gestion du rendu de l'affichage de la zone d'expédition dans le panier
  render() {
    return (
      <div className="container-fluid">
        <div>
          <Card>
            <Card.Header>
              <h3 className='text-center'>Total commande</h3>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <h5 className="price-total">Total: {this.props.total} €</h5>
              </Card.Text>
            </Card.Body>
            <Card.Text>
              <label className='label-expedition'>
                <input
                  type="checkbox"
                  ref="shipping"
                  onChange={this.handleChecked}
                />
                <span>Expédition(+6€)</span>
              </label>
            </Card.Text>
            <Card.Body>
              <Button className="my-auto" variant="info">
                Passer la commande
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

///Méthode qui set le state le montant global de la commande
const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: 'ADD_SHIPPING' });
    },
    substractShipping: () => {
      dispatch({ type: 'SUB_SHIPPING' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
