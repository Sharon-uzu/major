import React from 'react';

function Post({ name, text }) {
  return (
    <div className="post">
      <h4>{name}</h4>
      <p>{text}</p>
    </div>
  );
}

export default Post;
