import React from "react";

export default function ProductRow({ product }) {
  return (
    <tr className={product.stocked ? "" : "text-danger"}>
      <td>
        {product.name}
        { product.stocked ? '' : <span class="badge bg-danger ms-2">out of stock</span> }
      </td>
      <td>{product.price}</td>
    </tr>
  );
}