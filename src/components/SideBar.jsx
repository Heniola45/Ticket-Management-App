import { useNavigate } from "react-router-dom";
import styles from "../pages/dashboard/Dashboard.module.css";
import {
  MdDashboard,
  MdConfirmationNumber,
  MdAssessment,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { logout } from "../services/authService";

export default function SideBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>TicketPro</h2>

      <nav className={styles.nav}>
        <button
          className={styles.navItem}
          onClick={() => navigate("/dashboard")}
        >
          <MdDashboard className={styles.icon} />
          Dashboard
        </button>

        <button className={styles.navItem} onClick={() => navigate("/tickets")}>
          <MdConfirmationNumber className={styles.icon} />
          Tickets
        </button>

        <button className={styles.navItem} onClick={() => navigate("/reports")}>
          <MdAssessment className={styles.icon} />
          Reports
        </button>

        <button
          className={styles.navItem}
          onClick={() => navigate("/settings")}
        >
          <MdSettings className={styles.icon} />
          Settings
        </button>
      </nav>

      <button onClick={handleLogout} className={styles.logoutButton}>
        <MdLogout className={styles.icon} />
        Logout
      </button>
    </aside>
  );
}
