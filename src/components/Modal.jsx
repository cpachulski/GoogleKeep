import React, { useState, useEffect } from "react";

function Modal({
  isHidden,
  notes,
  selectedNoteId,
  onSubmit,
  handleUpdateNote,
}) {
  const [updateNote, setUpdateNote] = useState({
    title: "",
    content: "",
    id: "",
  });

  useEffect(() => {
    const selectedNote = notes.find((note) => note.id === selectedNoteId);
    if (selectedNote) {
      setUpdateNote({
        title: selectedNote.title,
        content: selectedNote.content,
        id: selectedNote.id,
      });
    } else {
      setUpdateNote({
        title: "",
        content: "",
        id: "",
      });
    }
  }, [selectedNoteId, notes]);

  function handleChange(e) {
    const { name, value } = e.target;
    setUpdateNote({ ...updateNote, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("sub", isHidden);
    onSubmit(updateNote);
    handleUpdateNote();
  }

  return isHidden ? (
    <div>
      <form onSubmit={handleSubmit} className={"form_pop"}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={updateNote.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={updateNote.content}
          placeholder="Note"
          onChange={handleChange}
        ></textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  ) : null;
}

export default Modal;
