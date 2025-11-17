export default function Contact() {
  return (
    <section className="contact-page">
      <div className="container contact-layout fade-up">
        <div className="contact-text">
          <h2>Let’s Make Something Dope</h2>
          <p>
            Have an idea? A club hoodie? A gift? A mini merch drop? Tell us what
            you&apos;re thinking and we&apos;ll make it happen.
          </p>
          <p>Instagram: @boldds.ke</p>
          <p>Email: support@boldds.co (placeholder – swap to your real one)</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Email address" required />
          <textarea
            placeholder="Tell us about your design or idea..."
            rows={5}
          />
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
