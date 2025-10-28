import { FaTicketAlt, FaChartBar, FaUsersCog } from "react-icons/fa";
import styles from "./FeaturesSection.module.css";

export default function FeaturesSection() {
  return (
    <section className={styles.features}>
      <h2>Why Choose TicketPro?</h2>
      <div className={styles.featureGrid}>
        <div className={styles.card}>
          <FaTicketAlt className={styles.icon} />
          <h3>Smart Ticket Management</h3>
          <p>Create, track, and update tickets in real time with ease.</p>
        </div>
        <div className={styles.card}>
          <FaChartBar className={styles.icon} />
          <h3>Insightful Analytics</h3>
          <p>Monitor performance trends with intuitive data visualization.</p>
        </div>
        <div className={styles.card}>
          <FaUsersCog className={styles.icon} />
          <h3>Team Collaboration</h3>
          <p>Communicate and coordinate effectively across your team.</p>
        </div>
        <div className={styles.card}>
          <FaChartBar className={styles.icon} />
          <h3>Insightful Analytics</h3>
          <p>Monitor performance trends with intuitive data visualization.</p>
        </div>
        <div className={styles.card}>
          <FaUsersCog className={styles.icon} />
          <h3>Team Collaboration</h3>
          <p>Communicate and coordinate effectively across your team.</p>
        </div>
        <div className={styles.card}>
          <FaTicketAlt className={styles.icon} />
          <h3>Smart Ticket Management</h3>
          <p>Create, track, and update tickets in real time with ease.</p>
        </div>
      </div>
    </section>
  );
}
