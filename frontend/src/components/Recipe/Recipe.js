import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../actions";

import "./Recipe.css";

const Recipe = ({ item }) => {
  const dispatch = useDispatch();

  const changeCategoryClick = (e) => {
    console.log("e", e.target.dataset.id);
    dispatch(changeCategory(e.target.dataset.id));
  };

  return (
    <Card key={item.id} className="recipe">
      <Card.Header className="recipe__title">{item.name}</Card.Header>
      <Card.Text className="recipe__text">{item.description}</Card.Text>
      <Card.Footer>
        <Button onClick={changeCategoryClick} data-id={item.category.id}>
          {item.category.name}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Recipe;
