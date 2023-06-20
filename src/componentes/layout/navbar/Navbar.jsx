import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className="nav">
      <img
        className="imgNav"
        src="https://res.cloudinary.com/dzoleft01/image/upload/v1687285786/beru2_transparente_xqf8vu.png"
      ></img>
      <ul className="ulNav">
        <li className="liNav">Home</li>
        <li>About us</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
