'use client';
import styles from '../styles/styles.module.css';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <LogoDevIcon />
        <span>John Doe</span>
      </div>
      <div><MenuRoundedIcon /></div>
    </div>
  )
}
