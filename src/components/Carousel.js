import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-caption" style={{zIndex:"10"}}>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
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
  )
}
