import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemCart } from "../../Store/Slices/ProductSlice";
import "./Cart.css";
import { Box, Button, Typography } from "@mui/material";

const Cart = () => {
  const cart = useSelector((state) => state.product.cart);
  const totalPrice=useSelector((state)=>state.product.totalPrice)
  const dispatch = useDispatch();
  return (
    <Box sx={{ padding: 2 }}>
      {cart.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            {/* Image */}
            <div>
              <img
                src={item.image}
                alt={item.title}
                style={{ maxWidth: "100px" }}
              />
            </div>

            {/* Title and Price */}
            <div
              style={{
                flex: "3",
                display: "flex",
                alignItems: "center",
                paddingLeft: "16px",
              }}
            >
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body1" style={{ flexGrow: 1 }} >Price: ${item.price}</Typography>
              <Typography variant="body1" style={{ flexGrow: 1 }}>Quantity: {item.quantity}</Typography>
            </div>

            {/* Remove Button */}
            <div style={{ flex: "1", textAlign: "right" }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(removeItemCart(item))}
              >
                Remove
              </Button>
            </div>
          </div>
        );
      })}
      <Box
        sx={{
          marginTop: 2,
          textAlign: "middle",
          backgroundColor: "#f5f5f5",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0A174E" }}>
          Total: ${totalPrice.toFixed(3)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Cart;
