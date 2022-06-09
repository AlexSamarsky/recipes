import React from "react";
import { useEffect } from "react";

import { changeCategory, loadCategories } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Stack, Button } from "react-bootstrap";

import "./CategorySwitch.css";

const CategorySwitch = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.category.categories);

  const currentCategory = useSelector(
    (state) => state.category.currentCategory
  );

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/v1/category/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(loadCategories(data.results)))
      .catch((e) => {
        console.log("e", e);
      });
  }, []);

  return (
    <>
      <Stack direction="horizontal">
        <Dropdown
          id="category-dropdown-button"
          title="select category"
          onSelect={(e) => {
            dispatch(changeCategory(Number(e)));
          }}
        >
          <Dropdown.Toggle id="dropdown-basic">
            {!currentCategory || !categories.length
              ? "Выбрать категорию"
              : categories.find((e) => e.id == currentCategory).name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {categories.map((category) => {
              return (
                <Dropdown.Item eventKey={category.id} key={category.id}>
                  {category.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        {currentCategory > 0 && (
          <Button className="close" onClick={() => dispatch(changeCategory(0))}>
            X
          </Button>
        )}
      </Stack>
    </>
  );
};

export default CategorySwitch;
