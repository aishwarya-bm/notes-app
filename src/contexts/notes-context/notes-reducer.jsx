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

    case "DELETE_NOTE": {
      return {
        ...state,
        notes: payload.notes,
        trash: state.trash.filter(item => item._id !== payload.delete_id),
      };
    }

    case "RESTORE_NOTE": {
      return {
        ...state,
        notes: payload.notes,
        trash: state.trash.filter(item => item._id !== payload.restore_id),
      };
    }
    case "GET_ARCHIVED_NOTES": {
      return {
        ...state,
        archives: payload,
      };
    }

    case "MOVE_TO_ARCHIVE": {
      return {
        ...state,
        notes: payload.notes,
        archives: payload.archives,
      };
    }

    case "DELETE_FROM_ARCHIVE": {
      return {
        ...state,

        trash: [
          ...state.trash,
          state.archives.find(item => item._id === payload.note_id),
        ],
        archives: payload.archives,
      };
    }
  }
}
