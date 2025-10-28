import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../services/authService";
import ticketIllustration from "../../assets/ticket-illustration.svg";
import styles from "./Auth.module.css";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // expect login to return a Promise (token/user). await it.
      await login(form);
      
      navigate("/dashboard");
    } catch (err) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
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
            <button className={styles.activeTab}>Log in</button>
            <button onClick={() => navigate("/register")}>Sign up</button>
          </div>

          <h2 className={styles.loginText}>Log in to your account</h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
              />
              <Link to="/forgot-password" className={styles.forgotPassword}>
                Forgot password?
              </Link>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button
              type="submit"
              className={styles.loginButton}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Log In"}
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
          <h2>TICKET MANAGEMENT</h2>
          <p>
            Streamline your support workflow with our efficient ticket
            management system!
          </p>
          <img
            src={ticketIllustration}
            alt="Ticket Management Illustration"
            className={styles.illustration}
          />
        </div>
      </div>
    </div>
  );
}
