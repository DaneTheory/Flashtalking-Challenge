import React  from 'react'
import { connect } from 'react-redux'
import * as ProductAPI  from '../../api/ProductAPI'
import ProductProfile  from '../views/productProfile'

const ProductProfileContainer = React.createClass({

  componentDidMount: function() {
    let productID = this.props.params.productID
    ProductAPI.getProductProfile(productID)
  },

  render: function() {
    return (
      <ProductProfile {...this.props.productProfile} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    productProfile: store.productState.productProfile
  };
};

export default connect(mapStateToProps)(ProductProfileContainer);
