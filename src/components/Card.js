import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    let jersey = data.find(item => item.id === props.itemname._id);

    if (jersey) {
      if (jersey.size === size) {
        await dispatch({ type: "UPDATE", id: props.itemname._id, Price: finalPrice, qty: qty });
        return;
      } else {
        await dispatch({ type: "ADD", id: props.itemname._id, name: props.itemname.name, Price: props.itemname.Price, qty: qty, size: size });
        return;
      }
    }

    await dispatch({ type: "ADD", id: props.itemname._id, name: props.itemname.name, Price: props.itemname.Price, qty: qty, size: size });
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  const finalPrice = qty * props.itemname.Price;

  return (
    <div className="card-container">
      <div className="card mt-3 mb-3">
        <img
          className="card-img-top"
          src={props.itemname.img}
          alt="Jersey"
          style={{ height: "250px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.itemname.name}</h5>
          <p className="card-text">Men's Jersey</p>
          <div className="d-inline h-100 fs-5">
            ₹{finalPrice.toFixed(2)}/-
          </div>
          <div className="container w-100"></div>
          <div className="select-container">
            <select className="m-2 h-100 bg-light text-dark rounded" onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(5), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="m-2 h-100 bg-light text-dark rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="M">M</option>
              <option value="S">S</option>
            </select>
          </div>
          <a href="#" className={`card-button justify-center ms -2`} onClick={handleAddToCart}>
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}
