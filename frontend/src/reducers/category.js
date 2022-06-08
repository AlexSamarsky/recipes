import { helloWorld, changeCategory, loadCategories } from "../actions";

const initialState = { text: "", currentCategory: 0, categories: [] };

function categoryReducer(state = initialState, action) {
  // console.log("action type", action.type);
  switch (action.type) {
    case helloWorld.type:
      return { ...state, text: action.payload };
    case changeCategory.type:
      return { ...state, currentCategory: action.payload };
    case loadCategories.type:
      // console.log("payload", action.payload);
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

export default categoryReducer;
