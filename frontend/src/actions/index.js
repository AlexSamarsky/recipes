import { createAction } from "@reduxjs/toolkit";

// export const HELLO_WORLD = "HELLO_WORLD";

// export function helloWorld(text) {
//   return { type: HELLO_WORLD, text };
// }

export const helloWorld = createAction("HELLO_WORLD");

export const changeCategory = createAction("CHANGE_CATEGORY");

export const loadCategories = createAction("LOAD_CATEGORIES");

export const loadRecipes = createAction("LOAD_RECIPES");

export const loadRecipesPage = createAction("LOAD_RECIPES_PAGE");
