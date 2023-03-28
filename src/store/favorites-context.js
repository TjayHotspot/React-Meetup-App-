import React from "react";
import { createContext, useState } from "react";


{/* createContext is js object that is stored in a const and will contain a react component
    - Thats why FavoritesContext starts with capital
    - CreateContext also take initial value for the "component wide state"
     */}
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupID) => {},
  itemIsFavorite: (meetupId) => {},
});{/* ^^ the last 3 methods are just for intellecense (they dont do anything) ^^ */}


{/* React component function that updates FavoritesContext values
    - its also responsible for sharing the FavoritesContext values to any interested components */}
export function FavoritesContextProvider(props) {

      {/* used for updating userFavorites inside the context */}
  const [userFavorites, setUserFavorites] = useState([]);


      {/* Adds new favorites meetup.. old array + new item(s). 
          - Nested function allows for useState to update right away 
          - .Concat is a component that take the previous value and concats 
              (returns the old one plus new value given in paramater)*/}
  function addFavoriteHandler(favoriteMeetup){
    setUserFavorites((prevUsersFavorites) => {
        return prevUsersFavorites.concat(favoriteMeetup);
    })
  }

      {/* Removes favorite meetup by specified ID
          - Nested function allows for useState to update imeditatly
          - .filter returns new array that will 'filter' out any paramater given
              - filter takes function as argument which executes for every item in the array
              - returns true to keep the item and false to get rid of it
              - 'meetup' param is/iterates every value in the prevUserFavorites array*/}
  function removeFavoriteHandler(meetupId){
    setUserFavorites(prevUsersFavorites => {
        return prevUsersFavorites.filter((meetup) => meetup.id !== meetupId);
    })
  }
      {/* This returns true or false
          - .some wants function for argument with 'method' contains/iterates every value for userFavorites*/}
  function itemIsFavoriteHandler(meetupId){
    return userFavorites.some(meetup => meetup.id === meetupId)
  }
  
      {/* holds the updated context values from use state 
          - Stores functions which can be access/called by other components*/}
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };


  {/*FavoritesContext.Provider
      -.Provider is a component that createContext or FavoritesContext has built in
      -Open and close tags need to be wrapped around all components that are interested in interacting with FavoritesContext 
      - value={context}, context is a value that is used with use state and other functions to keep the conext up to date*/
  }
  {/* The FavoriteContextProvider will be used in index.js to wrap around the entire app,
      - FavoriteContextProvider takes a prop which will be the any comonents that FavoriteContextProvider wraps around 
      - those props have are called children since nested in between this component function*/
  }
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;