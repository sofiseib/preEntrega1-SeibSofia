import React from "react";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} color="error">
        <AddShoppingCartIcon color="action" />
      </Badge>
    </div>
  );
};

export default CartWidget;
