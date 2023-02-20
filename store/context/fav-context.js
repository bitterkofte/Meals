import { createContext, useState } from "react";

export const FavContext = createContext({
  ids: [],
  addFav: (id) ={},
  remFav: (id) ={},
});

function FavCtxProvider({children}) {
  const [favMealIds, setFavMealIds] = useState([]);

  function addFav(id){
    setFavMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function remFav(id){
    setFavMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favMealIds,
    addFav: addFav,
    remFav: remFav,
  };

  return(
    <FavContext.Provider value={value}>{children}</FavContext.Provider>
  )
}

export default FavCtxProvider;