import React, { useState } from "react";

function Note({ id, title, content, onDelete, handleUpdateNote, isHidden }) {
  const handleDelete = () => onDelete(id);
  // isHidden ? "hiddenNotes" : "note"  hides all css notes beside the edit
  return (
    <div className={"note"}>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}>Delete</button>
      <br />
      <button onClick={() => handleUpdateNote(id)}>Edit</button>
    </div>
  );
}

export default Note;
