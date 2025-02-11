import "./Footer.css"

export default function Footer() {
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
      </div>
    </footer>
  )
}

