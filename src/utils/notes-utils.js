import axios from "axios";
import { Toast } from "components";

const getAllNotes = async (isLoggedIn, dispatchNotes, navigate) => {
  if (isLoggedIn) {
    try {
      const response = await axios.get("/api/notes", {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchNotes({
          type: "GET_ALL_NOTES",
          payload: response.data.notes,
        });
      } else {
        Toast({
          message: "Some error occured, please try again later",
          type: "error",
        });
      }
    } catch (err) {
      Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
    }
  } else {
    navigate("/signup");
    Toast({
      message: "Please login to continue.",
      type: "warning",
    });
  }
};

const createNote = async (
  isLoggedIn,
  note,
  dispatchNotes,
  navigate,
  setShowEditor
) => {
  if (note.title === "") {
    Toast({
      message: "Please add a title to your note",
      type: "error",
    });
    return;
  }
  if (isLoggedIn) {
    try {
      const response = await axios.post(
        "/api/notes",
        { note },
        {
          headers: {
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      if (response.status === 201) {
        dispatchNotes({
          type: "CREATE_NOTE",
          payload: response.data.notes,
        });
        setShowEditor(false);
        Toast({
          message: "Added new note successfully",
          type: "success",
        });
      } else {
        Toast({
          message: "Some error occured, please try again later",
          type: "error",
        });
      }
    } catch (err) {
      Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
    }
  } else {
    navigate("/signup");
    Toast({
      message: "Please login to continue.",
      type: "warning",
    });
  }
};

const moveNoteToTrash = async (isLoggedIn, id, dispatchNotes, navigate) => {
  if (isLoggedIn) {
    const path = `/api/notes/${id}`;
    try {
      const response = await axios.delete(path, {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchNotes({
          type: "UPDATE_NOTES",
          payload: { notes: response.data.notes, note_id: id },
        });
        Toast({
          message: "Note moved to trash.",
          type: "success",
        });
      } else {
        Toast({
          message: "Some error occured, please try again later",
          type: "error",
        });
      }
    } catch (err) {
      Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
    }
  } else {
    navigate("/signup");
    Toast({
      message: "Please login to continue.",
      type: "warning",
    });
  }
};

export { getAllNotes, createNote, moveNoteToTrash };
