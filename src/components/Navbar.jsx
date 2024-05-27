import React from "react";

import { ImCart } from "react-icons/im";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://img.freepik.com/premium-vector/online-shop-logo-designs-template_567288-23.jpg?size=626&ext=jpg&ga=GA1.1.1223899148.1698901132&semt=ais"
            alt="Logo"
            width="70"
            height="70"
            className="d-inline-block align-text-top"
          />
          &nbsp; HappyShop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav fs-5 mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/men"}>
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/women"}>
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/electronics"}>
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/jewellery"}>
                Jewellery
              </Link>
            </li>
          </ul>
          <form className="d-flex mx-5" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search the Products"
              aria-label="Search "
            />
            <button className="btn btn-outline-danger " type="submit">
              Search
            </button>
          </form>
          <Link
            to={"/cart"}
            type="button"
            class="btn btn-md border-warning position-relative mx-3 my-sm-4"
          >
            {<ImCart />}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
