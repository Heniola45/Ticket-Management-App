import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";
import about from "../../assets/about.jpg";

const AboutUs = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContent}>
        <h2>About Us</h2>
        <p>
          TicketPro helps teams handle support requests effortlessly from
          creating tickets to tracking resolutions. Designed for simplicity and
          speed, our platform streamlines customer communication, improves
          collaboration, and keeps your workflow organized. Designed for
          simplicity and speed, our platform streamlines customer communication,
          improves collaboration, and keeps your workflow organized.
        </p>
        <Link to="/about" className={styles.btn}>
          See More
        </Link>
      </div>
      <div className={styles.aboutBoxes}>
        <img
          src={about}
          alt="Team Collaboration"
          className={styles.aboutImage}
        />
      </div>
    </section>
  );
};

export default AboutUs;
