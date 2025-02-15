import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Bindi's Cupcakery</h3>
            <p>Parle Point, Surat</p>
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} Bindi's Cupcakery. All rights reserved.</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="md:w-1/2">
          <iframe
            className="w-full h-64 min-h-[250px] rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d567.2925023793136!2d72.7914954!3d21.174258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ddd6dae8af5%3A0xe17d92a28035ffe2!2sParle%20Point!5e0!3m2!1sen!2sin!4v1707900000000!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  )
}

