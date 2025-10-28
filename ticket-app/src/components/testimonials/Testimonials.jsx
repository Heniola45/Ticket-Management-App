import styles from "./Testimonial.module.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Support Lead, TechEase",
      feedback:
        "TicketPro made it easy to manage our team’s workload — intuitive interface and great analytics!",
    },
    {
      name: "Daniel Smith",
      role: "Customer Success, CloudFix",
      feedback:
        "We reduced response time by 40%. The dashboard keeps everyone aligned and informed.",
    },
    {
      name: "Lisa Brown",
      role: "Operations, BrightDesk",
      feedback:
        "The smooth user experience and minimal learning curve really impressed our staff.",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <h2>What Our Users Say</h2>
      <div className={styles.testimonialList}>
        {reviews.map((r, i) => (
          <div key={i} className={styles.testimonialCard}>
            <p className={styles.feedback}>“{r.feedback}”</p>
            <div className={styles.reviewer}>
              <strong>{r.name}</strong>
              <span>{r.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
