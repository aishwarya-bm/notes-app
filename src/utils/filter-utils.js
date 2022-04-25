const compose =
  (state, ...functions) =>
  data => {
    return functions.reduce((acc, cur) => cur(state, acc), data);
  };

const sortByDate = (state, data) => {
  switch (state.sortByDate) {
    case "oldest":
      return [...data].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    case "latest":
      return [...data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    default:
      return data;
  }
};

const filterByPriority = (state, data) => {
  switch (state.priority) {
    case "high":
      return data.filter(item => item.priority === "high");
    case "medium":
      return data.filter(item => item.priority === "medium");
    case "low":
      return data.filter(item => item.priority === "low");
    default:
      return data;
  }
};

const filterByTags = (state, data) => {
  return state.tags.length === 0
    ? data
    : data.filter(note =>
        note.labels.some(tag => state.tags.indexOf(tag) >= 0)
      );
};

export { compose, sortByDate, filterByPriority, filterByTags };
