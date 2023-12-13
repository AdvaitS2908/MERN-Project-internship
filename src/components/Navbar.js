import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Model from '../Model';
import Badge from 'react-bootstrap/Badge';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

export default function Navbar() {

  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic" to="/">
          90MinWear
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
            </li>
            {(localStorage.getItem("authToken")) ?
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">My Orders</Link>
              </li>
              : ""}
          </ul>
          {(!localStorage.getItem("authToken")) ?
            <div className='d-flex'>
              <Link className="btn btn-success mx-1" to="/login">Login</Link>
              <Link className="btn btn-success mx-1" to="/createuser">Sign Up</Link>
            </div>
            :
            <div className="d-flex align-items-center">
              <div className='btn btn-light text-success mx-2' onClick={() => { setCartView(true) }}>
                My Cart{" "}
                <Badge pill bg="danger">{data.length}</Badge>
              </div>
              {cartView ? <Model onClose={() => setCartView(false)}><Cart /></Model> : null}
              <div className='btn btn-light text-danger mx-2' onClick={handleLogOut}>
                Log Out
              </div>
            </div>
          }
        </div>
      </div>
    </nav>
  );
}



