import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Row } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { loadRecipes, changeCategory } from "../../actions";
import Paginate from "../Paginate/Paginate";

import "./Recipes.css";

const Recipes = () => {
  const dispatch = useDispatch();

  const currentCategory = useSelector(
    (store) => store.category.currentCategory
  );

  const pageNumber = useSelector((store) => store.recipe.recipes.page_number);
  // const [recipes, setRecipes] = useState([]);

  const recipes = useSelector((store) => store.recipe.recipes);

  const fetchRecipes = () => {
    let url = new URL("http://127.0.0.1:8000/api/v1/recipe/list/");
    if (currentCategory) {
      url.searchParams.set("category", currentCategory);
    }
    if (pageNumber > 1) {
      url.searchParams.set("page", pageNumber);
    }
    // url += currentCategory ? "?category=" + currentCategory : "";
    // url += pageNumber ? ""
    console.log(url.toString());
    fetch(url)
      .then((respone) => respone.json())
      .then((data) => dispatch(loadRecipes(data)));
  };

  useEffect(() => {
    fetchRecipes();
  }, [currentCategory, pageNumber]);

  const changeCategoryClick = (e) => {
    console.log("e", e.target.dataset.id);
    dispatch(changeCategory(e.target.dataset.id));
  };

  return (
    <>
      <div>
        <h1 className="recipe__header">Список рецептов</h1>
        {recipes.results &&
          recipes.results.map((item) => {
            return (
              <Card key={item.id} className="recipe">
                <Card.Header className="recipe__title">{item.name}</Card.Header>
                <Card.Text className="recipe__text">
                  {item.description}
                </Card.Text>
                <Card.Footer>
                  <Button
                    onClick={changeCategoryClick}
                    data-id={item.category.id}
                  >
                    {item.category.name}
                  </Button>
                </Card.Footer>
              </Card>
            );
          })}
        <Row>
          <Paginate
            page_number={pageNumber}
            num_pages={recipes.num_pages}
            count={recipes.count}
          />
        </Row>
      </div>
    </>
  );
};

export default Recipes;
