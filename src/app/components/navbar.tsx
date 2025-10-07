'use client';
import styles from '../styles/styles.module.css';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function Navbar() {

  // todo: add toggle functionality for mobile menu

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <LogoDevIcon />
        <span>John Doe</span>
      </div>
      <ul className={styles.navbar__menu}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className={styles.navbar__toggle}>
        <MenuRoundedIcon />
      </div>
    </nav>
  )
}
