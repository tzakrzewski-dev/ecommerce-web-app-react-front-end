import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import { addToCart } from '../../assets/components/actions/cartActions';

import DetailProduitItem from '../../assets/components/DetailProduitItem/DetailProduitItem';

import DetailProduitItemDescriptif from '../../assets/components/DetailProduitItem/DetailProduitItemDescriptif/DetailProduitItemDescriptif';

class DetailProduit extends Component {
  render() {
    return (
      <div>
        <Container>
          <DetailProduitItem />
          <DetailProduitItemDescriptif />
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduit);
