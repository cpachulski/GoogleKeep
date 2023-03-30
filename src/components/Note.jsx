import React, { useState } from "react";

function Note({ id, title, content, onDelete, handleUpdateNote }) {
  const handleDelete = () => onDelete(id);

  const [isEditing, setIsEditing] = useState(false);
  const [updateNote, setUpdateNote] = useState({ id, title, content });

  function toggleEditMode() {
    setIsEditing((prevCheck) => !prevCheck);
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
    <div className="note">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
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
          <button>Save</button>

          <button onClick={toggleEditMode}>{toggleEditMode && "cancel"}</button>
        </form>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{content}</p>
          <button onClick={handleDelete}>Delete</button>
          <br />
          <button onClick={toggleEditMode}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Note;
