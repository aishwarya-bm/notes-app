import { useNotes } from "contexts";
import { createContext, useContext, useReducer } from "react";
import { compose, filterByPriority, filterByTags, sortByDate } from "utils";
import { filterBySearchText } from "utils/filter-utils";
import { filterReducer } from "./filter-reducer";

const FilterNotessContext = createContext();

const FilterNotesProvider = ({ children }) => {
  const [stateFilter, dispatchFilter] = useReducer(filterReducer, {
    searchText: "",
    sortByDate: "",
    priority: "",
    tags: [],
    isFilterApplied: false,
  });

  const { notes } = useNotes();
  const filterNotes = compose(
    stateFilter,
    sortByDate,
    filterByPriority,
    filterByTags,
    filterBySearchText
  )(notes);

  return (
    <FilterNotessContext.Provider
      value={{
        stateFilter,
        dispatchFilter,
        filteredNotes: filterNotes,
      }}
    >
      {children}
    </FilterNotessContext.Provider>
  );
};

const useFilterNotes = () => useContext(FilterNotessContext);

export { useFilterNotes, FilterNotesProvider };
