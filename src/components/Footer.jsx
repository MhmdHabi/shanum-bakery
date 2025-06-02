import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok, FaYoutube } from "react-icons/fa";

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
          <FaEnvelope /> info@tokokueshanum.com
        </p>
        <p className="text-sm flex items-center gap-2">
          <FaPhoneAlt /> 0812-3456-7890
        </p>
      </div>

      {/* Navigasi */}
      <div>
        <h4 className="text-2xl font-bold mb-4">Navigasi</h4>
        <ul className="text-sm space-y-2">
          <li>
            <a href="#beranda" className="hover:underline">
              Beranda
            </a>
          </li>
          <li>
            <a href="#produk" className="hover:underline">
              Produk
            </a>
          </li>
          <li>
            <a href="#testimoni" className="hover:underline">
              Testimoni
            </a>
          </li>
          <li>
            <a href="#maps" className="hover:underline">
              Maps
            </a>
          </li>
        </ul>
      </div>

      {/* Sosial Media */}
      <div>
        <h4 className="text-2xl font-bold mb-4">Ikuti Kami</h4>
        <div className="flex flex-wrap gap-4 text-lg">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaWhatsapp />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaTiktok />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaYoutube />
          </a>
        </div>

        <p className="text-sm mt-6">&copy; 2025 Shanum Bakery. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
