import React from "react";

function ProductCategoryRow({ title }) {
  return (
    <tr>
      <td className="text-center fw-bold bg-success text-white" colSpan={2}>
        {title}
      </td>
    </tr>
  );
}

export default ProductCategoryRow;