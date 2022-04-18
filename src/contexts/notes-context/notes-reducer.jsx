export default function notesReducer(state, { type, payload }) {
  switch (type) {
    case "GET_ALL_NOTES": {
      return {
        ...state,
        notes: payload,
      };
    }

    case "CREATE_NOTE": {
      return {
        ...state,
        notes: payload,
      };
    }

    case "UPDATE_NOTES": {
      state.trash.push(state.notes.find(item => item._id === payload.note_id));
      console.log(state);
      return {
        ...state,
        // trash :
        notes: payload.notes,
      };
    }
  }
}
