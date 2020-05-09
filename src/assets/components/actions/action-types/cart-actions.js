/**
 *
 * flux d'informations que l'on souhaite envoyer à notre state global.
 */

//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const ADD_SHIPPING = 'ADD_SHIPPING';




//*****Solutions restant à implémenter */
export const SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS'; //Visualiser le produit

//Test de source
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

//test pour filtrer les produits
export const FILTER_PRODUCTS_BY_SIZE = 'FILTER_PRODUCTS_BY_SIZE';
export const ORDER_PRODUCTS_BY_PRICE = 'ORDER_PRODUCTS_BY_PRICE';

