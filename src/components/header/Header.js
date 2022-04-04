import { Badge, Directions, FavoriteBorder, NotificationsOutlined, Search, ShoppingBasketOutlined } from '@mui/icons-material'
import { IconButton, InputBase, Avatar, Paper } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import {useStateValue} from '../../features/StateProvider';

function Header() {

  const [{basket}] = useStateValue();

  return (
    <nav className='header'>
        <div className='header__logo'>
        <Link to='/'>
        <img src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png" alt="" className="header__logo-img" />
        </Link>
        </div>

        <div className='header__search'>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
          <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Product"
        inputProps={{ 'aria-label': 'search products' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <Search />
      </IconButton>
        </Paper>
        </div>

        <div className="header__icons">
            <FavoriteBorder/>
                <div className="header__icons-count">
                <ShoppingBasketOutlined />
                    <span>{basket?.length}</span>
                </div>
            <NotificationsOutlined/>
            <Avatar src='https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg'/>
        </div>
    </nav>
  )
}

export default Header