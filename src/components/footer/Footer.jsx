import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <div className={styles.logo}>TicketPro</div>
        <p className={styles.para}>
          Handle support requests effortlessly from creating tickets to tracking
          resolutions. andle support requests effortlessly from creating tickets
          to tracking resolutions.
        </p>
      </div>

      <nav className={styles.navC}>
        <div className={styles.nav}>
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
      </nav>
      <nav className={styles.navC}>
        <div className={styles.nav}>
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
      </nav>
      <nav className={styles.navC}>
        <div className={styles.nav}>
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
      </nav>
      <nav className={styles.navC}>
        <div className={styles.nav}>
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
      </nav>
    </footer>
  );
}
