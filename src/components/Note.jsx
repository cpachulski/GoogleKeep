import React, { useState } from "react";

function Note({ id, title, content, onDelete, handleEdit }) {
  const handleDelete = () => onDelete(id);

  const [updateNote, setUpdateNote] = useState();
  const [handleEdits, setHandleEdits] = useState(false);

  function changeNotes() {
    setHandleEdits((prevCheck) => !prevCheck);
  }

  return (
    <div className="note">
      {handleEdits ? (
        <form>
          <input type="text" name="title" defaultValue={title} />
          <textarea name="content" defaultValue={content}></textarea>
          <button>Save</button>
        </form>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{content}</p>
          <button onClick={handleDelete}>Delete</button>
          <br></br>
          <button onClick={() => handleEdit(id)}>hold</button>
          <br></br>
          {/* <button onClick={lol}>lol</button> */}
          <button onClick={changeNotes}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Note;
