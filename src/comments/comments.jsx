import React from "react";

function Comments({ comments }) {
  return (
    <div>
      <h2>Комментарии</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <b>{comment.author}</b>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
