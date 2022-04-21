import { Toast } from "components";

const isLabelInNote = (note_labels, item) =>
  note_labels?.find(i => i === item) ? true : false;

const addLabels = (item, note_labels, dispatchNotes) => {
  note_labels?.push(item);
  dispatchNotes({
    type: "SET_NOTE_EDITOR",
    payload: {
      key: "labels",
      value: note_labels,
    },
  });
};

const removeLabels = (item, note_labels, dispatchNotes) => {
  note_labels = note_labels.filter(l => l !== item);
  dispatchNotes({
    type: "SET_NOTE_EDITOR",
    payload: {
      key: "labels",
      value: note_labels,
    },
  });
};

const addNewTag = (tagName, tags, dispatchNotes, setTagName) => {
  if (tagName) {
    if (tags.find(tag => tag === tagName)) {
      Toast({
        message: `Tag "${tagName}" already exists`,
        type: "error",
      });
      return;
    }
    dispatchNotes({ type: "ADD_NEW_TAG", payload: tagName });
    setTagName("");
    Toast({
      message: "Tag created successfully.",
      type: "success",
    });
  }
};

export { isLabelInNote, addLabels, addNewTag, removeLabels };
