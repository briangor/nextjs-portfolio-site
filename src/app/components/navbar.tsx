'use client';
import styles from '../styles/styles.module.css';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CustomizedSwitches from './theme-toggle';
import Link from 'next/link';

export default function Navbar() {

  // todo: add toggle functionality for mobile menu

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <LogoDevIcon />
        <span>John Doe</span>
      </div>
      <ul className={styles.navbar__menu}>
        <li><Link href="#">Home</Link></li>
        <li><Link href="#">About</Link></li>
        <li><Link href="#">Work</Link></li>
        <li><Link href="#">Contact</Link></li>
        <CustomizedSwitches />
      </ul>
      <div className={styles.navbar__toggle}>
        <MenuRoundedIcon />
      </div>
    </nav>
  )
}
