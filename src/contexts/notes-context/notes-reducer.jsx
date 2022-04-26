import dayjs from "dayjs";

const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
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
        note_editor: {
          title: "",
          body: "",
          priority: "medium",
          labels: [],
          createdAt: "",
          cardColor: "white",
        },
      };

    case "EDIT_NOTE": {
      return {
        ...state,
        note_editor: payload,
      };
    }

    case "SET_NOTE_TAG": {
      return {
        ...state,
        note_editor: {
          ...state.note_editor,
          labels: [...state.note_editor.labels, payload],
        },
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
        note_editor: {
          title: "",
          body: "",
          priority: "medium",
          labels: [],
          createdAt: "",
          cardColor: "white",
        },
      };
    }

    case "MOVE_TO_TRASH": {
      return {
        ...state,
        notes: payload.notes,
        trash: [...state.trash, payload.note],
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

    case "ADD_NEW_TAG": {
      return {
        ...state,
        tags: [...state.tags, payload],
      };
    }

    case "DELETE_TAG": {
      return {
        ...state,
        tags: state.tags.filter(item => item !== payload),
        notes: state.notes.map(item => {
          item.labels = item.labels.filter(label => label != payload);
          return item;
        }),
        trash: state.trash.map(item => {
          item.labels = item.labels.filter(label => label != payload);
          return item;
        }),
        archives: state.archives.map(item => {
          item.labels = item.labels.filter(label => label != payload);
          return item;
        }),
      };
    }

    case "RESTORE_FROM_TRASH": {
      return {
        ...state,
        notes: payload.notes,
        trash: state.trash.filter(i => i._id !== payload.restore_id),
      };
    }

    default:
      return state;
  }
}
