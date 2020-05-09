import React, { Component } from 'react';

import { Tabs, Tab } from 'react-bootstrap';

class DetailProduitItemDescriptif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  //Liaison avec la abse de donnée MVC : Modèle produit/Controleur/Produit
  componentDidMount() {
    fetch('http://localhost:8080/produits/telephone/iphone-11-pro', {
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

  /***********Rendu des produits téléphone depuis le state Data du component */
  render() {
    let itemList = this.state.data
      .filter(
        (opt) =>
          opt.id ===
          parseInt(
            window.location.pathname.substring(
              window.location.pathname.lastIndexOf('/') + 1
            )
          )
      )
      .map((item) => {
        return (
          /******  Définition de l'affichage des composants du produit */
          <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="description" title="DESCRIPTION">
                <h5 className="margintopbottom">Description - {item.title} </h5>
                <h6>{item.descriptif[1].guaranty} </h6>
                <img src={item.descriptif[2].guarantyimg} alt="image"></img>
                <h4 className="text-center font-weight-bold margintopbottom">
                  {item.descriptif[3].texte1}
                </h4>
                <h6>{item.descriptif[0].description} </h6>

                <img src={item.descriptif[4].img} alt="image"></img>

                <h4 className="text-center margintopbottom">
                  {item.descriptif[6].titlefunctionality}
                </h4>

                <h4 className="text-center font-weight-bold margintopbottom">
                  {item.descriptif[5].titlefunctionality}
                </h4>
                <h6 className="margintopbottom">
                  {item.descriptif[6].functionality}
                </h6>

                <img
                  src={item.descriptif[7].functionalityimg}
                  alt="image"
                ></img>

                <h4 className="text-center font-weight-bold margintopbottom">
                  {item.descriptif[8].titlecaracteristiques}
                </h4>

                <h6 className="margintopbottom">
                  {item.descriptif[9].caracteristiques}
                </h6>
              </Tab>
              <Tab eventKey="description2" title="FICHE TECHNIQUE">
                <h5 className="margintopbottom">
                  Fiche technique - {item.title}{' '}
                </h5>

                <h6 className="  margintopbottom color-fiche-tech">
                  {item.fichetechnique[0].coul}
                </h6>
                <h6 className="  margintopbottom color-fiche-tech">
                  {item.fichetechnique[1].charge}
                </h6>
              </Tab>
              <Tab eventKey="avis" title="AVIS"></Tab>
              <Tab eventKey="faq" title="QUESTIONS/REPONSES"></Tab>
            </Tabs>
          </div>
        );
      });

    return (
      /******  Définition de l'affichage des produits */
      <div className="container-fluid">
        <div className="cards-item ">{itemList}</div>
      </div>
    );
  }
}

export default DetailProduitItemDescriptif;
