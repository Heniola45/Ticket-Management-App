import { useEffect, useState } from "react";
import styles from "./Tickets.module.css";
import {
  getTickets,
  createTicket,
  updateTicket,
  deleteTicket,
} from "../../services/ticketService";
import { showToast } from "../../services/toast";
import SideBar from "../../components/SideBar";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({
    title: "",
    status: "open",
    priority: "medium",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [ticketToDelete, setTicketToDelete] = useState(null);

  useEffect(() => {
    setTickets(getTickets());
  }, []);

  // ✅ Validation function
  const validate = (fieldValues = form) => {
    let newErrors = { ...errors };
    if ("title" in fieldValues)
      newErrors.title = fieldValues.title.trim() ? "" : "Title is required.";
    if ("status" in fieldValues)
      newErrors.status = ["open", "in_progress", "closed"].includes(
        fieldValues.status
      )
        ? ""
        : "Invalid status.";
    if ("priority" in fieldValues)
      newErrors.priority = ["high", "medium", "low"].includes(
        fieldValues.priority
      )
        ? ""
        : "Invalid priority.";
    if ("description" in fieldValues)
      newErrors.description =
        fieldValues.description.length > 200
          ? "Description too long (max 200 chars)."
          : "";
    setErrors(newErrors);
    return Object.values(newErrors).every((x) => x === "");
  };

  // 🧠 Handle input change + live validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    if (touched[name]) validate({ [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validate({ [name]: form[name] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (editingId) {
      updateTicket(editingId, form);
      showToast("Ticket updated successfully ✅");
      setEditingId(null);
    } else {
      createTicket(form);
      showToast("Ticket created successfully 🎉");
    }

    setForm({
      title: "",
      status: "open",
      priority: "medium",
      description: "",
    });
    setTouched({});
    setTickets(getTickets());
  };

  const handleEdit = (ticket) => {
    setForm(ticket);
    setEditingId(ticket.id);
  };

  const confirmDelete = (id) => {
    setTicketToDelete(id);
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    if (ticketToDelete) {
      deleteTicket(ticketToDelete);
      setTickets(getTickets());
      showToast("Ticket deleted 🗑️");
      setShowConfirm(false);
      setTicketToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
    setTicketToDelete(null);
  };

  return (
    <div className={styles.layout}>
      <SideBar />
      <main className={styles.mainContent}>
        <h1 className={styles.headText}>Ticket Management</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label>Title *</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter ticket title"
              className={errors.title && touched.title ? styles.invalid : ""}
            />
            {errors.title && touched.title && (
              <p className={styles.error}>{errors.title}</p>
            )}
          </div>

          <div>
            <label>Status *</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.status && touched.status ? styles.invalid : ""}
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
            {errors.status && touched.status && (
              <p className={styles.error}>{errors.status}</p>
            )}
          </div>

          <div>
            <label>Priority *</label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.priority && touched.priority ? styles.invalid : ""
              }
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            {errors.priority && touched.priority && (
              <p className={styles.error}>{errors.priority}</p>
            )}
          </div>

          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Describe the issue (optional)"
              maxLength="200"
              className={
                errors.description && touched.description ? styles.invalid : ""
              }
            />
            {errors.description && touched.description && (
              <p className={styles.error}>{errors.description}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!form.title || Object.values(errors).some((e) => e)}
          >
            {editingId ? "Update Ticket" : "Create Ticket"}
          </button>
        </form>

        <div className={styles.cardGrid}>
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`${styles.card} ${styles[ticket.status]}`}
            >
              <h3>{ticket.title}</h3>
              <p>{ticket.description || "No description provided."}</p>

              <p className={styles.priority}>
                Priority:{" "}
                <span
                  className={`${styles.priorityLabel} ${
                    styles[`priority_${ticket.priority}`]
                  }`}
                >
                  {ticket.priority}
                </span>
              </p>

              <span className={`${styles.status} ${styles[ticket.status]}`}>
                {ticket.status.replace("_", " ")}
              </span>

              <div className={styles.actions}>
                <button onClick={() => handleEdit(ticket)}>Edit</button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => confirmDelete(ticket.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {tickets.length === 0 && (
            <p className={styles.empty}>No tickets yet.</p>
          )}
        </div>
      </main>

      {showConfirm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Delete Ticket</h3>
            <p>Are you sure you want to delete this ticket?</p>
            <div className={styles.modalActions}>
              <button className={styles.cancelBtn} onClick={handleCancelDelete}>
                Cancel
              </button>
              <button
                className={styles.confirmBtn}
                onClick={handleConfirmDelete}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
