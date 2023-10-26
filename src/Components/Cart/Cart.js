import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Cart = ({ cart, setCart }) => {
  // For increase quantity
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });

    setCart(
      cart.map((Elm) => {
        return Elm.id === product.id ? { ...exist, qty: exist.qty + 1 } : Elm;
      })
    );
  };

  // For decrease quantity
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.map((Elm) => {
          return Elm.id === product.id ? { ...exist, qty: exist.qty - 1 } : Elm;
        })
      );
    }
  };

  // For Remove quantity
  const removeProduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((Elm) => {
          return Elm.id !== product.id;
        })
      );
    }
  };

  // For Total Price
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <>
      <div className="cart">
        <h3>#Cart</h3>
        {cart.length === 0 && (
          <>
            <div className="empty_cart">
              <h2>Your Shopping cart is empty</h2>
              <Link to="/shop">
                <button>Shop Now</button>
              </Link>
            </div>
          </>
        )}
        <div className="cart_container">
          {cart.map((Elm) => {
            return (
              <>
                <div className="box">
                  <div className="img_box">
                    <img src={Elm.images} alt="" />
                  </div>

                  <div className="detail">
                    <div className="info">
                      <h3>{Elm.Name}</h3>
                      <p>Price: ${Elm.price}</p>
                      <p>Total: ${Elm.price * Elm.qty}</p>
                    </div>
                    <div className="qty">
                      <button onClick={() => decqty(Elm)}>-</button>
                      <input type="number" value={Elm.qty} />
                      <button onClick={() => incqty(Elm)}>+</button>
                    </div>
                    <div className="icon">
                      <li onClick={() => removeProduct(Elm)}>
                        <MdDelete />
                      </li>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="bottom">
          {cart.length > 0 && (
            <>
              <div className="total">
                <h4>Total : ${total}</h4>
              </div>
              <button>Checkout</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
