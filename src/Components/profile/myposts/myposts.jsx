import React from 'react';
import s1 from './myposts.module.css';
import Posts from './post/post';
const Myposts = () => {

  return (
    <div>
      my post
      <div>
        <div className={s1.texta}>
          <textarea></textarea></div>
        <div className={s1.but}><button>Add post</button></div>
        new post
      </div>
      <div className={s1.post}>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />


      </div>
    </div>

  );

}

export default Myposts;