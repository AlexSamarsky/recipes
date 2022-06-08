import { combineReducers } from "redux";
import categoryReducer from "./category";
import recipeReducer from "./recipe";

const rootReducer = combineReducers({
  category: categoryReducer,
  recipe: recipeReducer,
});

export default rootReducer;
