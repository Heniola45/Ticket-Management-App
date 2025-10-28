import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Streamline Your Ticketing Today</h1>
        <p>
          Simplify your workflow with an all-in-one ticket management platform.
          Track, assign, and resolve tasks effortlessly.
        </p>
        <div className={styles.ctaGroup}>
          <Link to="/register" className={`${styles.btn} ${styles.btnOutline}`}>
            Request a Demo
          </Link>
          <Link to="/register" className={styles.btn}>
            Get Started
          </Link>
        </div>
      </div>

      <div className={styles.circle}></div>

      <svg
        className={styles.wave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="var(--svg-accent)"
          fillOpacity="1"
          d="M0,64L48,96C96,128,192,192,288,213.3C384,235,480,213,576,213.3C672,213,768,235,864,245.3C960,256,1056,256,1152,245.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
