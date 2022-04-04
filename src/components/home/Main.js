import React from 'react'
import MainBanner from './MainBanner'
import MainCats from './MainCats'
import Products from './Products'

function Main() {
  return (
    <div className='main'>
      <MainBanner/>

      <h2 className='main__title'>Popular Categories 🌟</h2>
      <MainCats/>


      <h2 className='main__title'>Hot Deals 🔥</h2>
      <Products/>
    </div>
  )
}

export default Main