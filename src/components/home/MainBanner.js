import React from 'react'

function MainBanner() {
  return (
    <div className='main__banner'>
        <div className='main__banner-info'>
        <h1> Free Delivery! </h1>
        <p>
            Don't miss out. Only today, get free Next Day <br/>
            Delivery on all your orders.
        </p>
        <button className='main__banner-btn'>Browse Products</button>
            </div>

            <div>
                <img className='main__banner-img' src="https://ui8-bitcloud.herokuapp.com/img/content/news-pic-1.png" alt="" />
            </div>
    </div>
  )
}

export default MainBanner