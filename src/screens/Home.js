import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';

export default function Home() {
  const [search, setSearch] = useState('');
  const [Category, setCategory] = useState([]);
  const [items, setItems] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/JerseyData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();

    // Convert Price to number
    response[0].forEach(item => {
      item.Price = parseFloat(item.Price.replace('₹', '').replace(',', ''));
    });

    setItems(response[0]);
    setCategory(response[1]);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
        <div><Navbar/></div>
        <div><div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-caption" style={{ zIndex: "10" }}>
  <div className="d-flex justify-content-center">
    <input
      className="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
    {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
  </div>
</div>

    <div className="carousel-item active">
      <img src="https://www.soccerbible.com/media/149700/bayern-1-min.jpg" className="d-block w-100" alt="..." style={{ objectFit: 'contain !important', maxHeight:"550px", filter: 'brightness(30%)' }}/>
    </div>
    <div className="carousel-item">
      <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt91f3eedc8ef5591d/64898045cde18d98c635a203/Real_Madrid_2023-24_home_kit.png" className="d-block w-100" alt="..."style={{ objectFit: 'contain !important', maxHeight:"550px", filter: 'brightness(30%)' }}/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ytimg.com/vi/GG6GBtgUhFA/maxresdefault.jpg" className="d-block w-100" alt="..." style={{ objectFit: 'contain !important', maxHeight:"550px", filter: 'brightness(30%)' }}/>
    </div>
    <div className="carousel-item">
      <img src="https://www.jerseybdclub.com/wp-content/uploads/2023/05/Bayern-Munich-Home-Kit-23-24.jpg" className="d-block w-100" alt="..." style={{ objectFit: 'contain !important', maxHeight:"550px", filter: 'brightness(30%)' }}/>
    </div>
    <div className="carousel-item">
      <img src="https://www.soccerbible.com/media/150444/arsenal-1-min.jpg" className="d-block w-100" alt="..." style={{objectFit: 'contain !important', maxHeight:"550px", filter:"brightness(30%)"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  </div>

      <div className='Container'>
        {Category !== [] ?
          Category.map((data) => (
            <div className='row mb-4'>
              <div key={data._id} className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr />
              {items !== [] ?
                items.filter((item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                  .map(filterItems => (
                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                      <Card
                        itemname={filterItems}
                        Price={filterItems.Price}
                      />
                    </div>
                  ))
                : <div>"No Data found "</div>}
            </div>
          ))
          : ""
        }
      </div>
      <Footer />
    </div>
  );
}
