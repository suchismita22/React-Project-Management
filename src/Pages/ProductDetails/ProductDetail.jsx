import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Store/Slices/ProductSlice";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const getProductApi = () => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProductApi();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Render the product details
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", objectFit: "contain", height: "300px" }}
          />
          <div style={{ width: "auto", height: "60px" }}>{product.title}</div>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            Add to Cart
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            Buy Me
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
