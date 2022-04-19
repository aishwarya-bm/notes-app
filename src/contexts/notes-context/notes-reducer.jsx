export default function notesReducer(state, { type, payload }) {
  switch (type) {
    case "SET_NOTE_EDITOR": {
      return {
        ...state,
        note_editor: { ...state.note_editor, [payload.key]: payload.value },
      };
    }

    case "CLEAR_EDITOR":
      return {
        ...state,
        note_editor: {},
      };

    case "EDIT_NOTE": {
      return {
        ...state,
        note_editor: payload,
      };
    }

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
        note_editor: {},
      };
    }

    case "UPDATE_NOTES": {
      state.trash.push(state.notes.find(item => item._id === payload.note_id));
      return {
        ...state,
        notes: payload.notes,
        note_editor: {},
      };
    }
  }
}
