import React  from 'react'
import { loadSearchLayout } from '../../Actions/searchLayoutActions'
import * as ProductAPI  from '../../api/ProductAPI'
import SearchForm  from '../views/searchForm'

const SearchFormContainer = React.createClass({

  search: function(event) {
    event.preventDefault();

    let query = this.refs.child.getQuery();

  if (this.props.searchType === 'products') {
      ProductAPI.searchProducts(query);
    }
  },

  render: function() {
    return (
      <SearchForm search={this.search} ref="child" />
    );
  }

});

export default SearchFormContainer;
