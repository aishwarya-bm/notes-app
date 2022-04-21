import axios from "axios";
import { Toast } from "components";

const getArchivedNotes = async (isLoggedIn, dispatchNotes, navigate) => {
  if (isLoggedIn) {
    try {
      const response = await axios.get("/api/archives", {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchNotes({
          type: "GET_ARCHIVED_NOTES",
          payload: response.data.archives,
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

const moveNoteToArchive = async (isLoggedIn, note, dispatchNotes, navigate) => {
  if (isLoggedIn) {
    const path = `/api/notes/archives/${note._id}`;
    try {
      const response = await axios.post(
        path,
        { note },
        {
          headers: {
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      if (response.status === 201) {
        dispatchNotes({
          type: "MOVE_TO_ARCHIVE",
          payload: response.data,
        });
        Toast({
          message: "Note moved to archives.",
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

const restoreFromArchive = async (isLoggedIn, id, dispatchNotes, navigate) => {
  if (isLoggedIn) {
    const path = `/api/archives/restore/${id}`;
    try {
      const response = await axios.post(
        path,
        {},
        {
          headers: {
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      if (response.status === 200) {
        dispatchNotes({
          type: "MOVE_TO_ARCHIVE",
          payload: response.data,
        });
        Toast({
          message: "Note unarchived successfully",
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

const moveNoteToTrashFromArchive = async (
  isLoggedIn,
  id,
  dispatchNotes,
  navigate
) => {
  if (isLoggedIn) {
    const path = `/api/archives/delete/${id}`;
    try {
      const response = await axios.delete(path, {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchNotes({
          type: "DELETE_FROM_ARCHIVE",
          payload: { archives: response.data.archives, note_id: id },
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

export {
  moveNoteToArchive,
  restoreFromArchive,
  getArchivedNotes,
  moveNoteToTrashFromArchive,
};
