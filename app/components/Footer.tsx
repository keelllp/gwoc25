import { Facebook, Instagram, MessageCircle, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/background.jpg")', // Replace with your image path
          filter: 'brightness(0.9) blur(2px)'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gray-900/40" />

      {/* Content */}
      <div className="relative py-10 px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-16">
          
          {/* Left Section - Contact & Social Media */}
          <div className="md:w-1/2 flex flex-col md:flex-row md:items-start gap-16">
            {/* Contact Us */}
            <div className="space-y-4">
              <h2 className="text-white text-2xl font-bold font-serif">Contact Us</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-2 group">
                  <MapPin className="w-5 h-5 text-white group-hover:text-pink-500 transition-colors" />
                  <p className="text-white">Parle Point, Surat-395007</p>
                </div>
                <div className="flex items-center gap-2 group">
                  <Phone className="w-5 h-5 text-white group-hover:text-pink-500 transition-colors" />
                  <p className="text-white">
                    <a href="tel:+918849130189" className="hover:text-pink-500 transition-colors">8849130189</a> | 
                    <a href="tel:+919978977790" className="hover:text-pink-500 transition-colors"> 9978977790</a>
                  </p>
                </div>
                <div className="flex items-center gap-2 group">
                  <Mail className="w-5 h-5 text-white group-hover:text-pink-500 transition-colors" />
                  <p className="text-white">
                    <a href="mailto:hello@bindiscupcakery.com" className="hover:text-pink-500 transition-colors">hello@bindiscupcakery.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="text-white text-2xl font-bold font-serif">Follow Us</h2>
              <div className="flex space-x-6 mt-4">
                <a href="#" className="text-white hover:text-blue-500 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://instagram.com/bindis_cupcakery" className="text-white hover:text-pink-500 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://wa.me/918849130189" className="text-white hover:text-green-500 transition-colors">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
              <iframe
                className="w-full h-64 min-h-[250px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d567.2925023793136!2d72.7914954!3d21.174258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ddd6dae8af5%3A0xe17d92a28035ffe2!2sParle%20Point!5e0!3m2!1sen!2sin!4v1707900000000!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;