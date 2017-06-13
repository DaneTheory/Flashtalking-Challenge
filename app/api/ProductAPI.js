/* ===============================================
              PRODUCT ASYNC ACTIONS
=============================================== */
import axios  from 'axios'
import { getAllProductsSuccess, getProductCategoriesSuccess, productProfileSuccess } from '../Actions/ProductActions'
import store  from '../store'


// ASYNC =>
// Get All Products For Preview Display via GET From Remote API
export function getAllProducts() {
  let remoteURL = 'http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php';
  return axios.get(remoteURL).then(response => {
    let resMap = response.data.Data.map(function(object,index,arr) {
      return axios.get(arr[index].href).then(response => {
        return response.data.Data;
      })
    })
    return Promise.all(resMap).then(function(promiseVals) {
      let mergedVals = [].concat.apply([], promiseVals)
      return mergedVals;
    }).then(response => {
      store.dispatch(getAllProductsSuccess(response));
      return response;
    })
  })
}

// Main Filter Search Function For Products
export function searchProducts(query = '') {
  return axios.get('http://localhost:3001/data?q='+ query)
    .then(response => {
      store.dispatch(getAllProductsSuccess(response.data));
      return response;
    });
}


// ASYNC =>
// Filtering Search Form
export function getProductCategories(productType) {
  let remoteURL = 'http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php';
  return axios.get(remoteURL).then(response => {
    let productType = response.data.Data;
    store.dispatch(getProductCategoriesSuccess(productType));
    return productType
  })
}


// ASYNC =>
// Get Product Profile
export function getProductProfile(productID) {
  let productProfile = {};

  return axios.get('http://localhost:3001/data/' + productID)
  .then(response => {

      let product = response.data;
      productProfile.id = product.id;
      productProfile.title = product.title;
      productProfile.type = product.type;
      productProfile.price = product.price;
      productProfile.image = product.image;
      productProfile.href = product.href;

      return response;
  })
  .then(response => {
      store.dispatch(productProfileSuccess(productProfile));
      return;
    });
}
