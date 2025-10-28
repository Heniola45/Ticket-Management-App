import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../../services/authService";
import styles from "./Auth.module.css";
import ticketIllustration from "../../assets/ticket-illustration.svg";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function Register() {
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // show success modal
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmpassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await register({
        fullname: form.fullname,
        username: form.username,
        password: form.password,
      });

      setSuccess(true);

      setForm((f) => ({ ...f, password: "", confirmpassword: "" }));
    } catch (err) {
      setError(err?.message || "Registration failed");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.logo}>TICKY</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.formSection}>
          <div className={styles.tabs}>
            <button onClick={() => navigate("/login")}>Log in</button>
            <button className={styles.activeTab}>Sign up</button>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Username</label>
                <input
                  name="username"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Confirm Password</label>
              <input
                name="confirmpassword"
                type="password"
                placeholder="Confirm Password"
                value={form.confirmpassword}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" className={styles.loginButton}>
              Sign Up
            </button>

            <div className={styles.divider}>
              <span>or</span>
            </div>

            <div className={styles.socialLogin}>
              <button type="button" className={styles.googleButton}>
                <FaGoogle className={styles.socialIcon} />
                Google
              </button>
              <button type="button" className={styles.facebookButton}>
                <FaFacebookF className={styles.socialIcon} />
                Facebook
              </button>
            </div>
          </form>
        </div>

        <div className={styles.imageSection}>
          <h2>WELCOME</h2>
          <p>Create your TICKY account to manage tickets efficiently.</p>
          <img
            src={ticketIllustration}
            alt="Ticket Management Illustration"
            className={styles.illustration}
          />
        </div>
      </div>

      {success && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true">
          <div className={styles.modalBox}>
            <button
              className={styles.modalClose}
              onClick={() => setSuccess(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3>Registration successful</h3>
            <p>You have successfully signed up. Please log in to continue.</p>
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 12,
                justifyContent: "center",
              }}
            >
              <button
                className={styles.loginButton}
                onClick={() => navigate("/login")}
              >
                Go to Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
