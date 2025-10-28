import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>TicketPro</div>
      <nav className={styles.nav}>
        <div>
          <a href="#features" className={styles.page}>
            Features
          </a>
          <a href="#about" className={styles.page}>
            About
          </a>
          <a href="#pricing" className={styles.page}>
            Pricing
          </a>
        </div>

        <div className={styles.ctaGroup}>
          <Link to="/login" className={`${styles.btn} ${styles.btnOutline}`}>
            Login
          </Link>
          <Link to="/register" className={styles.btn}>
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
