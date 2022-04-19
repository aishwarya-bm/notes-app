import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

/**
 * This handler handles restoring the trashed notes to user notes.
 * send POST Request at /api/trash/restore/:noteId
 * */

export const restoreFromTrashHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (!user) {
    return new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const { noteId } = request.params;
  const restoredNote = user.trash.filter(note => note._id === noteId)[0];
  user.trash = user.trash.filter(note => note._id !== noteId);
  user.notes.push({ ...restoredNote });
  this.db.users.update({ _id: user._id }, user);
  return new Response(200, {}, { trash: user.trash, notes: user.notes });
};
