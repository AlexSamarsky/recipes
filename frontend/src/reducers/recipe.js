import { loadRecipes, loadRecipesPage } from "../actions";

const initialState = {
  recipes: [],
};

function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case loadRecipes.type:
      return { ...state, recipes: action.payload };
    case loadRecipesPage.type:
      return {
        ...state,
        recipes: { ...state.recipes, page_number: action.payload },
      };
    default:
      return state;
  }
}

export default recipeReducer;
