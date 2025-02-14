import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Cupcakery Info */}
          <div className="footer-info">
            <h3>Bindi's Cupcakery</h3>
            <p>Parle Point, Surat</p>
          </div>

          {/* Contact Details */}
          <div className="footer-contact">
            <p>📞 Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
            <p>📧 Email: <a href="mailto:info@bindiscupcakery.com">info@bindiscupcakery.com</a></p>
            <p>📍 Location: Parle Point, Surat</p>
            <p>🗺️ <a href="https://goo.gl/maps/your-google-maps-link" target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
          </div>

          {/* Copyright */}
          <div className="footer-rights">
            <p>&copy; {new Date().getFullYear()} Bindi's Cupcakery. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
