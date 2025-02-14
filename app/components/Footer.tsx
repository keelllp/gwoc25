import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-800 py-10 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between">
        {/* Contact & Info */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-lg">📍 Piplod, Surat</p>
          <p className="text-lg">📞 8849130189 | 9978977790</p>
          <p className="text-lg">✉️ hello@bindiscupcakery.com</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com/bindis_cupcakery" className="text-gray-700 hover:text-pink-500 transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="https://wa.me/918849130189" className="text-gray-700 hover:text-green-500 transition-colors duration-300">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d144.95373531531594!3d-37.817209979751795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1d9f5fb%3A0x7a56a70e865db897!2sSweet%20Cupcake%20Bakery!5e0!3m2!1sen!2sus!4v1617844888890!5m2!1sen!2sus"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
