import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="section contact-page">
      <h2>Contact Us</h2>
      <ContactForm />
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p>Email: vynex.exports@gmail.com</p>
        <p>Phone: +91 74169 28140</p>
        <p>Address: Hyderabad, India</p>
        <div style={{ marginTop: '1rem' }}>
          <iframe
            title="VYNEX Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dsomeNumber!2dlongitude!3dlatitude!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x…"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
