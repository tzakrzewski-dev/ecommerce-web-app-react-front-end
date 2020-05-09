/***Import de la base de données */
import data from '../../data/data.json';

import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from '../actions/action-types/cart-actions';


const initState = data;


//Initialisation des valeurs du state glogal en fonction de l'action selectionnée
const cartReducer = (state = initState, action) => {
  //Sur page d'acueil
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: Math.round( state.total + addedItem.price * 100) / 100,
      };
    } else {
      addedItem.quantity = 1;
      //Calcul du prix total
      let newTotal = state.total + addedItem.price;


      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: Math.round(newTotal* 100) / 100,
        
      };
    }
  }

  /**************Lorsque l'on retire un article du panier */
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //ReCalcul du prix total  lorsque'un article est retiré
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: Math.round(newTotal* 100) / 100,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: Math.round(newTotal* 100) / 100,
    };
  }

  //Vérification si la quantité de produit à changé
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: Math.round(newTotal* 100) / 100,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: Math.round(newTotal* 100) / 100,
      };
    }
  }

  //Ajout du prix du transport lorsque la case expédition est cochée
  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  //Retrait du prix du transport lorsque la case expédition est décochée
  if (action.type === 'SUB_SHIPPING') {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;
