import { useState } from "react";
import "./Products.css";
import { getProductsService } from "./productsService";

function Products() {
  const [products, setProducts] = useState(null);
  return (
    <div className="products">
      <h1>Products Information </h1>
      <button
        onClick={() => {
          getProductsService(setProducts);
        }}
      >
        Get Products
      </button>

      <div>
        <table width={"100%"}>
          <thead>
            <tr>
              <th>ID</th>
              <th>IMAGE</th>
              <th>TITLE</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
            </tr>
          </thead>
          <tbody align="center">
            {products &&
              products.map(function (element) {
                return (
                  <tr>
                    <td>{element.id}</td>
                    <td>
                      <img src={element.image} width={70} height={70} alt="" />
                    </td>
                    <td>{element.title}</td>
                    <td>{element.price}</td>
                    <td>{element.category}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
