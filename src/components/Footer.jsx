import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => (
  <footer id="kontak" className="bg-[#5C3317] text-white py-12 px-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Info Toko */}
      <div>
        <h4 className="text-2xl font-bold mb-4">Toko Kue Shanum</h4>
        <p className="text-sm mb-2 flex items-center gap-2">
          <FaMapMarkerAlt /> Jl. Manis No. 123, Kota Lezat
        </p>
        <p className="text-sm mb-2 flex items-center gap-2">
          <FaEnvelope /> info@shanumbakery.com
        </p>
        <p className="text-sm flex items-center gap-2">
          <FaPhoneAlt /> 081391713828
        </p>
      </div>

      {/* Navigasi */}
      <div>
        <h4 className="text-2xl font-bold mb-4">Navigasi</h4>
        <ul className="text-sm space-y-2">
          {[
            { to: "beranda", label: "Beranda" },
            { to: "galeri", label: "Galeri" },
            { to: "produk", label: "Produk" },
            { to: "testimoni", label: "Testimoni" },
            { to: "maps", label: "Maps" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link to={to} smooth={true} duration={500} className="hover:underline cursor-pointer">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sosial Media */}
      <div>
        <h4 className="text-2xl font-bold mb-4">Ikuti Kami</h4>
        <div className="flex flex-wrap gap-4 text-lg">
          <a href="https://www.instagram.com/shanum_bakerys" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaInstagram />
          </a>
          <a href="https://wa.me/6281391713828" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaWhatsapp />
          </a>
        </div>

        <p className="text-sm mt-6">&copy; 2025 Shanum Bakery. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
