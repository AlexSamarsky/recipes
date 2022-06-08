import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadRecipesPage } from "../../actions";

import "./Paginate.css";

const Paginate = ({ num_pages, count, page_number = 1 }) => {
  const dispatch = useDispatch();

  const getPageNumber = (e) => {
    if (e.startsWith("«")) return 1;
    if (e.startsWith("»")) return num_pages;
    return Number(e);
  };

  const onClick = (e) => {
    const new_page_number = getPageNumber(e.target.innerText);
    if (new_page_number && new_page_number != page_number) {
      dispatch(loadRecipesPage(new_page_number));
    }
  };

  const renderItems = () => {
    var arrLength = 3;
    var pageShift = -1;
    if (page_number == num_pages) {
      arrLength -= 1;
    }
    if (page_number == 1) {
      arrLength -= 1;
      pageShift = 0;
    }
    var arrPages = [];
    if (page_number) {
      arrPages = [...Array(arrLength).keys()].map((e) => {
        return e + page_number + pageShift;
      });
    }
    return (
      <>
        {arrPages.map((e) => {
          return (
            <Pagination.Item
              key={e}
              onClick={onClick}
              active={e == page_number && true}
            >
              {e}
            </Pagination.Item>
          );
        })}
      </>
    );
  };
  if (!count) {
    return <></>;
  }
  return (
    <Pagination className="paginate">
      <Pagination.First disabled={page_number == 1 && true} onClick={onClick} />
      {renderItems()}
      <Pagination.Last
        disabled={page_number == num_pages && true}
        onClick={onClick}
      />
    </Pagination>
  );
};

export default Paginate;
