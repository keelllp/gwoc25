import { Instagram, Facebook } from "lucide-react"
import Image from "next/image"
import "./SocialMedia1.css"

export default function SocialMedia() {
  return (
    <section className="social">
      <div className="container">
        <h2 className="section-title">Connect With Us</h2>
        <div className="social-links">
          <a href="https://instagram.com/bindis_cupcakery" target="_blank" rel="noopener noreferrer">
            <Instagram className="social-icon" />
          </a>
          <a href="https://facebook.com/bindiscupcakery" target="_blank" rel="noopener noreferrer">
            <Facebook className="social-icon" />
          </a>
        </div>
        <div className="whatsapp-section">
          <h3 className="whatsapp-title">Order via WhatsApp</h3>
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="WhatsApp QR Code"
            width={200}
            height={200}
            className="qr-code"
          />
        </div>
      </div>
    </section>
  )
}

