export const filterReducer = (state, action) => {
  const defaultState = {
    sortByDate: "",
    priority: "",
    tags: [],
    isFilterApplied: false,
    searchText: "",
  };
  switch (action.type) {
    case "SET_PRIORITY":
      return { ...state, priority: action.payload, isFilterApplied: true };
    case "SET_SEARCH":
      return {
        ...state,
        searchText: action.payload,
        isFilterApplied:
          action.payload === "" ? (state.isFilterApplied ? false : true) : true,
      };
    case "SET_DATE":
      return { ...state, sortByDate: action.payload, isFilterApplied: true };
    case "SET_TAG":
      const newTag = state.tags.includes(action.payload)
        ? state.tags.filter(note => note !== action.payload)
        : [...state.tags, action.payload];
      return { ...state, tags: newTag, isFilterApplied: true };
    case "CLEAR_FILTER":
      return defaultState;
    default:
      return state;
  }
};
