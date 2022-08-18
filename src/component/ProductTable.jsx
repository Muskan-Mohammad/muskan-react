import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(props) {
  const { products, isStockOnly } = props;
  console.log(products);

  const rows = [
    
  ];
  let currentCategory = null;

  products.forEach( singleProduct => {
    console.log(singleProduct);

    if(currentCategory !== singleProduct.category) { // null !== 'Chocolate' -> 'Juice' !== 'Juice'
      rows.push( <ProductCategoryRow title={singleProduct.category} /> );
      currentCategory = singleProduct.category;
    }


    if(isStockOnly) {
      if(singleProduct.stocked) {
        rows.push( <ProductRow product={singleProduct} />  )
      }
    } else {
      rows.push( <ProductRow product={singleProduct} />  )
    }

  });

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;