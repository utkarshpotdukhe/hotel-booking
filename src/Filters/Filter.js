import React from "react";
import { hotels } from "../data.js";

const getMatchCount = (filterKey) =>
  hotels.filter((hotel) => hotel[filterKey]).length;

const Filter = ({ filter, isChecked, toggleFilter }) => {
  const onChange = () => toggleFilter(filter.key);
  const matchCount = getMatchCount(filter.key);
  return (
    <li className="filter">
      <span>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="filter__checkbox"
        />
        {filter.display}
      </span>
      <span className="filter__match-count">{matchCount}</span>
    </li>
  );
};

export default Filter;

