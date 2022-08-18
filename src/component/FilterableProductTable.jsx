import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const PRODUCTS = [
  { category: "Chocolate", price: "$1", stocked: true, name: "KitKat" },
  { category: "Chocolate", price: "$3", stocked: true, name: "Munch" },
  { category: "Chocolate", price: "$2", stocked: false, name: "Perk" },
  { category: "Juice", price: "$10", stocked: true, name: "Orange" },
  { category: "Juice", price: "$5", stocked: false, name: "Banana" },
  { category: "Juice", price: "$20", stocked: true, name: "Kiwi" },
];

export default function FilterableProductTable() {
  const [isStockOnly, setIsStockOnly] = React.useState(false);

  return (
    <div className="product-table container p-5">


      <SearchBar isStockOnly={isStockOnly} onIsStockOnlyChange={setIsStockOnly}  />


      <h1>Checking Boolean value {isStockOnly + ""}</h1>
      <ProductTable products={PRODUCTS} isStockOnly={isStockOnly} />
    </div>
  );
}