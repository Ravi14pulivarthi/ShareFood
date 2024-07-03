import React, { useEffect, useState } from "react";
import { API_URL } from "../api";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";

function Productdisplay() {
  const [products, setproducts] = useState([]);
  const { firmId } = useParams();
  const{firmName}=useParams()

  const productHandler = async () => {
    try {
      const responce = await fetch(`${API_URL}/product/${firmId}/products`);
      const newProduct = await responce.json();
      setproducts(newProduct.products);
    } catch (error) {
      console.error("faildfetch to");
    }
  };

  useEffect(() => {
    productHandler();
  }, []);

  return (
    <>
      <TopBar />
      <section className="productSection">
        <h3>{firmName}</h3>
        {products.map((item) => {
          return (
            <div className="productbox">
              <div>
                <div> <strong>{item.productName}</strong></div>
                <div> {item.price}</div>
                <div>{item.description}</div>
              </div>
              <div className="productgroup">
                <img src={item.image} />
                <div className="addbutton">ADD</div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Productdisplay;
