import React, { useState } from "react";

function Note({ id, title, content, onDelete, handleEdit }) {
  const handleDelete = () => onDelete(id);

  const [handleEdits, setHandleEdits] = useState(false);
  const [updateNote, setUpdateNote] = useState({ id, title, content });

  function changeNotes() {
    setHandleEdits((prevCheck) => !prevCheck);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUpdateNote((preNotes) => ({
      ...preNotes,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleEdit(id, updateNote, handleEdits);
    setHandleEdits(false);
  }

  return (
    <div className="note">
      {handleEdits ? (
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

          <button onClick={changeNotes}>
            {changeNotes ? "cancel" : "idk"}
          </button>
        </form>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{content}</p>
          <button onClick={handleDelete}>Delete</button>
          <br />
          <button onClick={changeNotes}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Note;
