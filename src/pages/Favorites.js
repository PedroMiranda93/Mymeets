import {useContext} from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";



function FavoritesPage() {
  
  const favoritesCtx = useContext(FavoritesContext);
  //current context snapshot ^^^^^^^^

  let content;

  if (favoritesCtx.totalFavorites===0) {
    content = <p>You got no favorites</p>
  }else{
    content = <MeetupList meetups ={favoritesCtx.favorites}/>
  }
  return <section>
    <h1>My favorites</h1>
    {content}
  </section>;
}

export default FavoritesPage;