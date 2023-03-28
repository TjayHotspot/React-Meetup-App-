import React from 'react'
import { Link } from 'react-router-dom';
import classes from "./MainNavigations.module.css";
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li><Link to="/ ">All Meetups</Link></li>
                <li><Link to="/NewMeetup">Add New Meetup</Link></li>
                <li><Link to="/Favorites">My Favorites <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation;