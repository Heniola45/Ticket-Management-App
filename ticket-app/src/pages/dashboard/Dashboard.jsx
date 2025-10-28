import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { getTickets } from "../../services/ticketService";
import { logout, getCurrentUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";

export default function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTickets = async () => {
      const data = await getTickets();
      setTickets(data);
    };
    loadTickets();
  }, []);

  useEffect(() => {
    const current = getCurrentUser();
    if (!current) {
      navigate("/login");
      return;
    }
    setUser(current);
  }, [navigate]);

  const totalTickets = tickets.length;
  const openTickets = tickets.filter((t) => t.status === "open").length;
  const inProgressTickets = tickets.filter(
    (t) => t.status === "in_progress"
  ).length;
  const closedTickets = tickets.filter((t) => t.status === "closed").length;

  return (
    <div className={styles.dashboard}>
      <SideBar />

      <main className={styles.main}>
        <header className={styles.topbar}>
          <h1>Welcome, {user?.name || "User"} 👋</h1>
          <input
            type="search"
            placeholder="Search tickets..."
            className={styles.search}
          />
        </header>

        <section className={styles.stats}>
          <div className={`${styles.card} ${styles.primary}`}>
            <h3>Total Tickets</h3>
            <p>{totalTickets}</p>
          </div>
          <div className={`${styles.card} ${styles.open}`}>
            <h3>Open</h3>
            <p>{openTickets}</p>
          </div>
          <div className={`${styles.card} ${styles.inProgress}`}>
            <h3>In Progress</h3>
            <p>{inProgressTickets}</p>
          </div>
          <div className={`${styles.card} ${styles.closed}`}>
            <h3>Closed</h3>
            <p>{closedTickets}</p>
          </div>
        </section>

        <section className={styles.recent}>
          <h2>Recent Tickets</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {tickets.slice(-5).reverse().map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.title}</td>
                  <td>
                    <span
                      className={`${styles.status} ${styles[ticket.status]}`}
                    >
                      {ticket.status.replace("_", " ")}
                    </span>
                  </td>
                  <td>{ticket.priority || "Normal"}</td>
                  <td>{new Date(ticket.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
              {tickets.length === 0 && (
                <tr>
                  <td colSpan="4" className={styles.empty}>
                    No tickets yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
