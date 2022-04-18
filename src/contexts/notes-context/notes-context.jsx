import { createContext } from "react";
import { useContext, useState } from "react";
import { useReducer } from "react";
import notesReducer from "./notes-reducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [stateNotes, dispatchNotes] = useReducer(notesReducer, {
    notes: [],
    archives: [],
    trash: [],
  });

  return (
    <>
      <NotesContext.Provider
        value={{
          notes: stateNotes.notes,
          archives: stateNotes.archives,
          trash: stateNotes.trash,
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
