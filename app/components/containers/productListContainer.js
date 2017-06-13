import React  from 'react'
import { connect } from 'react-redux'
import { loadSearchLayout } from '../../Actions/searchLayoutActions'
import * as ProductAPI  from '../../api/ProductAPI'
import store  from '../../store'
import ProductCategories  from '../views/productCategories'
import ProductList  from '../views/productList'


const ProductListContainer = React.createClass({

  componentDidMount: function() {
    ProductAPI.getAllProducts();
    store.dispatch(loadSearchLayout('products', 'Product Results'));
    ProductAPI.getProductCategories(this.props.productType);
  },

  render: function() {
    
    return (
      <div>
        <ProductCategories productType={this.props.productType} />
        <ProductList products={this.props.products} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    products: store.productState.products,
    productType: store.productState.productType
  };
};

export default connect(mapStateToProps)(ProductListContainer);
