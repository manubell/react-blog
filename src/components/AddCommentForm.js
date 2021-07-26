import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
  };

  return (
    <div id={"add-comment-form"}>
      <label>
        Name:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          rows={4}
          cols={50}
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
      </label>
      <label>
        Add comment:
        <button onClick={addComment}>Add Comment</button>
      </label>
    </div>
  );
};

export default AddCommentForm;
