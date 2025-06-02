import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";

const Hero = () => (
  <section id="beranda" className="flex flex-col justify-center items-center px-10 py-32 min-h-screen text-center md:items-start md:text-left">
    <div className="w-full max-w-full md:max-w-[50%]">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#5C3317] drop-shadow-md">Selamat Datang di Toko Kue Shanum</h2>
      <p className="text-lg md:text-2xl mb-4 text-[#7B4F29] drop-shadow-sm">Temukan berbagai pilihan kue lezat, manis, dan menggoda untuk semua acara spesialmu.</p>
      <Link
        to="produk"
        smooth={true}
        duration={500}
        className="inline-flex items-center gap-2 px-6 py-2 border border-[#5C3317] text-[#5C3317] text-sm font-semibold rounded-full hover:bg-[#5C3317] hover:text-white hover:border-[#5C3317] transition duration-300 ease-in-out"
      >
        Lihat Produk
        <FaArrowRightLong className="mt-1" />
      </Link>
    </div>
  </section>
);

export default Hero;
