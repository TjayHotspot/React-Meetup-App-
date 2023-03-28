import React from 'react'
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from "../components/meetups/MeetupList"


function FavoritesPage() {
  {/* favoritesCtx is useContext with our createContext (FavoritesContext) passed as paramater */}
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You dont have any favorites yet. Start adding some?</p>;
  }
  else{
    content = <MeetupList meetups={favoritesCtx.favorites} />
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}

    </section>
  )
}

export default FavoritesPage;