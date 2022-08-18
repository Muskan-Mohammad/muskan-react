import React from "react";

function SearchBar({ isStockOnly, onIsStockOnlyChange }) {
  return (
    <form className="bg-secondary p-3">
      <input
        className="form-control"
        type="text"
        placeholder="Search for product"
      />
      <label>
        <input type="checkbox" checked={isStockOnly} onChange={ (e) => onIsStockOnlyChange(e.target.checked) } />
        <span  className="ms-2" >Only show products in stock </span>
      </label>
    </form>
  );
}

export default SearchBar;