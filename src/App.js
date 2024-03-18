import React, { Component } from "react";
import Hotels from "./Hotels";
import FiltersList from "./FiltersList";

class App extends Component {
  state = { selectedFilters: [] };

  toggleFilter = (clickedFilterKey) => {
    const { selectedFilters } = this.state;
    let newFilters;

    if (selectedFilters.includes(clickedFilterKey)) {
      newFilters = selectedFilters.filter(
        (selectedFilter) => selectedFilter !== clickedFilterKey
      );
    } else {
      newFilters = selectedFilters.concat(clickedFilterKey);
    }

    this.setState({ selectedFilters: newFilters });
  };

  render() {
    const { selectedFilters } = this.state;
    return (
      <div className="App">
        <FiltersList
          selectedFilters={selectedFilters}
          toggleFilter={this.toggleFilter}
        />
        <Hotels selectedFilters={selectedFilters} />
      </div>
    );
  }
}

export default App;