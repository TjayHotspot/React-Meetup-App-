import React from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
    {/* useContext can be used to interact with the createContext object values */}
  const favoritesCtx = useContext(FavoritesContext);
    {/* we are calling the itemIsFavorite method from the context*/}
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  {/* This will toggle favororites based on itemIsFavorite result
      - Uses favoritesCtx to communicate with the favorites context  
      - if its favorites, it will remove the favorite for the id (prop.id)
      - else if its not favorites, it will add new object to the context using the addFavorites function
          and passing the MeetupItem properties*/}
  function toggleFavoriteStatusHandler() {
    if(itemIsFavorite){
      favoritesCtx.removeFavorite(props.id);
    }
    else{
      favoritesCtx.addFavorite({
        id: props.id,
        tite: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      })
    }

  }

  {/* MeetupItem is a function that formats the prop values passed from a data.map function */}
  {/* props.image,title,content ect all expected when this function is used in another component */}
  {/* MeetupItem function just formats the data/props given */}
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          {/* This button call the toggleFavoriteStatusHandler function when clicked
              - shorthand if statment is used inside the button to change the text when item is favorite or not*/}
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
