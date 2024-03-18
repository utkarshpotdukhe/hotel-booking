import React from "react";
import Filter from "./Filter.js";
import { filterOptions } from "../data.js";

const FiltersList = ({ selectedFilters, toggleFilter }) => {
  const renderFilter = (filter) => {
    const isChecked = selectedFilters.includes(filter.key);
    return (
      <Filter
        key={filter.key}
        filter={filter}
        isChecked={isChecked}
        toggleFilter={toggleFilter}
      />
    );
  };

  const filterListElements = filterOptions.map(renderFilter);

  return (
    <div className="filters">
      <h5 className="filters__header">Filter By:</h5>
      <hr />
      <ul className="filters-list">{filterListElements}</ul>
    </div>
  );
};

export default FiltersList;