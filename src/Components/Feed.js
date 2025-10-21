import React from 'react';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
      <Post
        name="Jane Doe"
        text="Hello, this is my first post!"
      />
      <Post
        name="John Smith"
        text="What a beautiful day!"
      />
    </div>
  );
}

export default Feed;
