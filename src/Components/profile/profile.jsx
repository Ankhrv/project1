import React from 'react';
import Myposts from './myposts/myposts';

import s1 from './profile.module.css';
const Profile = () => {
    return     (
    <div className={s1.content}>
    <div><img className={s1.img} src='https://w-dog.ru/wallpapers/9/18/503592864711552/vesna-leto-gory-ozero-oblaka-nebo-zelen.jpg'/>
    </div>
    <div>ava + discrip</div>
  <Myposts/>
    </div>
    )
}

export default Profile;