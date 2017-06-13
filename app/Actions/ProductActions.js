/* ===============================================
              PRODUCT ACTIONS
=============================================== */
import * as types  from '../Constants/ActionTypes'

// On AJAX Success =>
// Update Product List Local State From Remote Via GET
export function getAllProductsSuccess(products) {
  return {
    type: types.GET_ALL_PRODUCTS_SUCCESS,
    products
  };
}

// On AJAX Success =>
// Update Product List Local State From Remote Via GET
// export function getProductsSuccess(products) {
//   return {
//     type: types.GET_PRODUCTS_SUCCESS,
//     products
//   };
// }


// On AJAX Success =>
// Update Product List Local State From Remote Via GET
export function getProductCategoriesSuccess(productType) {
  return {
    type: types.GET_PRODUCT_CATEGORIES,
    productType
  };
}



// On AJAX Success =>
// Update Product Profile Local State From Remote Via GET
export function productProfileSuccess(productProfile) {
  return {
    type: types.PRODUCT_PROFILE_SUCCESS,
    productProfile
  };
}
