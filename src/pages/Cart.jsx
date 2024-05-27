import React from "react";
import CartContainer from "../components/CartContainer";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const subtotal = cart.reduce((p, c) => p + c.qty * c.price, 0);
  const total = cart.reduce((p, c) => p + c.qty * c.price, 0);
  const Total = total.toFixed(2);
  const Discount = ((Total * 10) / 100).toFixed(2);
  const Dis = parseInt(Discount).toFixed(2);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-2 g-3 py-2">
        {cart.length === 0 ? (
          <>
            <span class="">
              <img
                src="https://limasy.com/img/empty-animation1.gif"
                alt="Empty"
                class="w-100"
              />
            </span>
          </>
        ) : (
          <>
            {cart?.map((i, index) => (
              <CartContainer key={index} i={i} />
            ))}
          </>
        )}
      </div>
      <div class="row py-4">
        <div class="col-lg-6">
          <div class=" row pt-1 ">
            <div class="col-md-8 col-lg-7">
              <form class="form">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control rounded-2"
                    placeholder="Coupon Code"
                    id="discount-code"
                  />
                  <span class="input-group-btn">
                    <button type="submit" class="btn btn-dark mx-2">
                      Apply Coupon
                    </button>
                  </span>
                </div>
              </form>
            </div>
            {/* <div class="col-md-4 col-lg-5 text-right">
              <a
                onclick="window.location.reload()"
                class="btn btn-md btn-salmon tra-salmon-hover"
              >
                Update Cart
              </a>
            </div> */}
          </div>
        </div>

        <div class="col-lg-12 cart mt-4">
          <div class="my-3">
            <h3 class="">Cart Total</h3>

            <table>
              <tbody>
                <tr className="fs-5">
                  <td>Subtotal: &nbsp; </td>
                  <td> &nbsp; </td>
                  <td class="text-right"> &nbsp; ${subtotal}</td>
                </tr>
                <div className="my-1"></div>
                <tr className="fs-5">
                  <td>Discount 10%: &nbsp; </td>
                  <td> &nbsp; </td>
                  <td class="text-right"> &nbsp; ${Dis}</td>
                </tr>
                <div className="my-1"></div>
                <tr className="fs-5 fw-bold">
                  <td>Total: &nbsp; </td>
                  <td> </td>
                  <td class="text-right "> &nbsp; ${Total - Dis}</td>
                </tr>
                <div className="my-2"></div>
              </tbody>
            </table>

            <a href="#" class="btn btn-success my-2">
              Proceed To Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
