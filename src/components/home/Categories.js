import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className='sidebar__categories'>
        <Link to="/">Echo and Alexa</Link>
        <Link to="/">Kindle</Link>
        <Link to="/">Books</Link>
        <Link to="/">Electronics</Link>
        <Link to="/">Home and Garden</Link>
        <Link to="/">Fashion</Link>
        <Link to="/">Health and Beauty</Link>
        <Link to="/">Automotive</Link>
        <Link to="/">Sport and Tourism</Link>
        <Link to="/">Games</Link>
        <Link to="/">Film and Music</Link>
        <Link to="/">Animals</Link>
        <Link to="/">Hobby</Link>
        <Link to="/">Gift Cards</Link>
    </div>
  )
}

export default Categories