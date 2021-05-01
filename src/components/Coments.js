import React from "react";

function Comments(props) {
  return (
    <div className="comment">
      <div className="date">{props.com.date}</div>
      <div className="name">{props.com.name}</div>
      <div className="text">{props.com.text}</div>
    </div>
  );
}

export default Comments;
