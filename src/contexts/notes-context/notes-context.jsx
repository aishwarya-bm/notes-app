import { createContext } from "react";
import { useContext, useState } from "react";
import { useReducer } from "react";
import notesReducer from "./notes-reducer";
import dayjs from "dayjs";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
  const [stateNotes, dispatchNotes] = useReducer(notesReducer, {
    notes: [],
    archives: [],
    trash: [],
    tags: ["home", "work", "daily", "other", "weekly"],
    note_editor: {
      title: "",
      body: "",
      priority: "medium",
      labels: [],
      createdAt: formatDate(),
      cardColor: "white",
    },
  });

  return (
    <>
      <NotesContext.Provider
        value={{
          notes: stateNotes.notes,
          archives: stateNotes.archives,
          trash: stateNotes.trash,
          note_editor: stateNotes.note_editor,
          tags: stateNotes.tags,
          dispatchNotes,
        }}
      >
        {children}
      </NotesContext.Provider>
    </>
  );
};

const useNotes = () => useContext(NotesContext);

export { useNotes, NotesProvider };
