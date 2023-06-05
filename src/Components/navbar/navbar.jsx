import React from 'react';
import s1 from './navbar.module.css';

const Navbar = () => {
    return    (
    <nav className={s1.nav}>
    <div>
      <a className={s1.aa} href='#'>Profile</a>
      </div><div>
      <a className={s1.aa} href='#'>Messages</a>
      </div><div>
      <a className={s1.aa} href='#'>News</a>
      </div><div>
      <a className={s1.aa} href='#'>Music</a>
      </div><div>
      <a className={s1.aa} href='#'>Setings</a>
      </div>
  </nav>
    )
}

export default Navbar;