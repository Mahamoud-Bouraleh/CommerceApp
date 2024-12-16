import { useState } from "react";
import useShop from "../pages/ShopContext";

const Product = ({ product }) => {
  const { addToCart } = useShop();

  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsInCart(true); // Mettez à jour l'état pour refléter que l'article a été ajouté au panier
    console.log("hello world");
  };

  return (
    <div
      className="card"
      style={{
        minHeight: "100%",
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0 , 0.1)),
        url(${product.urlImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="info">
        <span>{product.name}</span>
        <span>{product.price} Fd</span>
      </div>
      <button className="btn btn-primary" onClick={handleAddToCart}>
        {isInCart ? "-" : "+"}
      </button>
    </div>
  );
};

export default Product;
