import React  from 'react'
import SearchFormContainer  from '../containers/searchFormContainer'

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="search">
      <header className="search-header">
        {props.title}
        <div>
          {props.totalResults} Items
        </div>
        <SearchFormContainer searchType={props.searchType} />
      </header>
      <div className="search-results">
        {props.children}
      </div>
    </div>
    );
}
