import Link from "next/link"
import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <nav className="container nav">
        <Link href="/" className="logo">
          Bindi's Cupcakery
        </Link>
        <div className="nav-links">
          <Link href="#products" className="nav-link">
            Products
          </Link>
          <Link href="#custom-hampers" className="nav-link">
            Custom Hampers
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

