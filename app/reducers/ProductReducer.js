/* ===============================================
              PRODUCTS REDUCER
=============================================== */
import _  from 'lodash'
import * as types  from '../Constants/ActionTypes'


const initialState = {
  products: [],
  productProfile: {},
  productType: []
};

const productReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_ALL_PRODUCTS_SUCCESS:
      return Object.assign({}, state, { products: action.products });

    case types.GET_PRODUCT_CATEGORIES:
      return Object.assign({}, state, { productType: action.productType });


    case types.PRODUCT_PROFILE_SUCCESS:
      return Object.assign({}, state, { productProfile: action.productProfile });

  }

  return state;

}

export default productReducer;
