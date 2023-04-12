import React, { useState } from "react";

function Note({ id, title, content, onDelete, handleUpdateNote }) {
  const handleDelete = () => onDelete(id);

  const [isEditing, setIsEditing] = useState(false);
  const [updateNote, setUpdateNote] = useState({ id, title, content });
  const [activeNoteId, setActiveNoteId] = useState(""); //change div

  function toggleEditMode() {
    // setIsEditing((prevCheck) => !prevCheck);
    setIsEditing(true);
    setActiveNoteId(id);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUpdateNote((prevNotes) => ({
      ...prevNotes,

      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateNote(updateNote);
    setIsEditing(false);
  }

  return (
    <div onClick={toggleEditMode}>
      {isEditing ? (
        <div className={isEditing && id === activeNoteId ? "hidden" : "note"}>
          <form onSubmit={handleSubmit} className={"form_pop"}>
            <input
              type="text"
              name="title"
              value={updateNote.title}
              onChange={handleChange}
            />
            <textarea
              name="content"
              value={updateNote.content}
              onChange={handleChange}
            ></textarea>
            <button className="butn-Note">Save</button>

            <button onClick={toggleEditMode} className="butn-Note">
              {toggleEditMode && "cancel"}
            </button>
          </form>
        </div>
      ) : (
        <div className={"note"}>
          <h1>{title}</h1>
          <p>{content}</p>
          <button onClick={handleDelete}>Delete</button>
          <br />
          <button onClick={toggleEditMode}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Note;
