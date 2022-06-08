import React from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { loadRecipes } from "../../actions";
import Paginate from "../Paginate/Paginate";
import Recipe from "../Recipe/Recipe";

import "./Recipes.css";

const Recipes = () => {
  const dispatch = useDispatch();

  const currentCategory = useSelector(
    (store) => store.category.currentCategory
  );

  const pageNumber = useSelector((store) => store.recipe.recipes.page_number);

  const recipes = useSelector((store) => store.recipe.recipes);

  const fetchRecipes = () => {
    let url = new URL("http://127.0.0.1:8000/api/v1/recipe/list/");
    if (currentCategory) {
      url.searchParams.set("category", currentCategory);
    }
    if (pageNumber > 1) {
      url.searchParams.set("page", pageNumber);
    }
    console.log(url.toString());
    fetch(url)
      .then((respone) => respone.json())
      .then((data) => dispatch(loadRecipes(data)));
  };

  useEffect(() => {
    fetchRecipes();
  }, [currentCategory, pageNumber]);

  return (
    <>
      <Row>
        <h1 className="recipe__header">Список рецептов</h1>
        {recipes.results &&
          recipes.results.map((item) => {
            return <Recipe item={item} key={item.id} />;
          })}
      </Row>
      <Row>
        <Paginate
          page_number={pageNumber}
          num_pages={recipes.num_pages}
          count={recipes.count}
        />
      </Row>
    </>
  );
};

export default Recipes;
