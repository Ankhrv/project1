import React from 'react';
import s1 from './post.module.css';
const Post = () => {

  return (

    <div className={s1.item}>
      <div>
        <img src='https://static.tildacdn.com/tild6461-6361-4334-a166-393164356362/shutterstock_5832644.jpg' />
      </div>
      post 1
      <div>
        <span>like</span>
      </div>
      <div>
        <span>dislike</span>
      </div>
    </div>




  );

}

export default Post;