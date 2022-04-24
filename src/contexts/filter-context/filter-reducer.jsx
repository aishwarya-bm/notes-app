export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRIORITY":
      return { ...state, priority: action.payload };
    case "SET_DATE":
      return { ...state, sortByDate: action.payload };
    case "SET_TAG":
      const newTag = state.tags.includes(action.payload)
        ? state.tags.filter(note => note !== action.payload)
        : [...state.tags, action.payload];
      return { ...state, tags: newTag };
    case "CLEAR_FILTER":
      return {
        sortByDate: "",
        priority: "",
        tags: [],
      };
    default:
      return state;
  }
};
