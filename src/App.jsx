import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Cart from "./pages/Cart";
import Electronics from "./pages/Electronics";
import Jewellery from "./pages/Jewellery";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <div className="card-footer bg-dark text-light px-4 py-2">
          <div className="headline mb-2" aria-label="Payment Methods">
            <strong className="fs-5">Payment Methods</strong>
          </div>
          <div className="method-list d-flex justify-content-between align-items-center flex-wrap ">
            <ul className="list-group d-flex align-items-center  flex-row">
              <h6 className="mx-2 ">Card type</h6>
              <a type="submit" className="text-danger text-decoration-">
                <i className="fab fa-cc-mastercard fa-2x me-2"></i>
              </a>

              <a type="submit" className="text-light">
                <i className="fab fa-cc-visa fa-2x me-2"></i>
              </a>

              <a type="submit" className="text-primary">
                <i className="fab fa-cc-amex fa-2x me-2"></i>
              </a>

              <a type="submit" className="text-warning">
                <i className="fab fa-cc-paypal fa-2x"></i>
              </a>
            </ul>

            <ul className="list-group d-flex align-items-center justify-content-center flex-row ">
              <h6 className="mx-2 text-center ">Follow Us:</h6>
              <li className="list-group-item  border-0 bg-dark">
                <a
                  href="https://www.facebook.com/soham.gurjar.710"
                  className="text-warning"
                >
                  <i class="fa-brands fa-facebook-f fa-xl "></i>
                </a>
              </li>
              <li className="list-group-item  border-0 bg-dark">
                <a href="https://github.com/som0199" className="text-warning">
                  <i class="fa-brands fa-github fa-xl "></i>
                </a>
              </li>
              <li className="list-group-item  border-0 bg-dark">
                <a
                  href="https://www.linkedin.com/in/soham-bijghawne-09969023a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbE1iWhqXRTS3sXrHZroe1w%3D%3D"
                  className="text-warning"
                >
                  <i class="fa-brands fa-linkedin fa-xl  "></i>
                </a>
              </li>
              <li className="list-group-item  border-0 bg-dark">
                <a
                  href="https://join.skype.com/invite/vi42vG4Nc35A"
                  className="text-warning"
                >
                  <i class="fa-brands fa-skype fa-xl "></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
