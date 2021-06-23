import {useContext} from "react";

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from "../../store/favorites-context";


function MeetupItem(props) {
  
  const favoritesCtx = useContext(FavoritesContext);
  //astablish connection betwin components and context

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    }else{
      favoritesCtx.addFavorite({
          id: props.id,
          title:props.title,
          description: props.description,
          image: props.image,
          address: props.address
      });
    }
  }


  
  function removeFromDBHandler() {
    // DELETE request using fetch with set headers
    const requestOptions = {
        method: 'DELETE',
        headers: { 
            'Access-Control-Allow-Methods': "DELETE"           
        }
    };
    fetch(  "https://startapp-f76b1-default-rtdb.europe-west1.firebasedatabase.app/meetups/"+props.id+".json"
, requestOptions).then(
window.history
);
  }


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
          <button onClick = {toggleFavoriteStatusHandler}>{itemIsFavorite ? "Remove from Favorites":"To Favorites"}</button>
        </div>
        <div className={classes.actions}>
          <button onClick = {removeFromDBHandler}>Remove from Meetups </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
