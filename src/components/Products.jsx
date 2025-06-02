import React, { useState } from "react";
import heroImg from "../assets/katalog.png";
import { FaWhatsapp } from "react-icons/fa";

const Products = () => {
  const items = [
    { name: "Kue Cokelat", category: "Best Seller", price: "Rp35.000", image: heroImg },
    { name: "Tart Strawberry", category: "Favorit", price: "Rp45.000", image: heroImg },
    { name: "Cupcake Vanila", category: "Baru", price: "Rp15.000", image: heroImg },
    { name: "Kue Keju", category: "Best Seller", price: "Rp30.000", image: heroImg },
    { name: "Kue Lapis", category: "Modern", price: "Rp25.000", image: heroImg },
    { name: "Kue Nastar", category: "Favorit", price: "Rp20.000", image: heroImg },
    { name: "Kue Kering", category: "Populer", price: "Rp18.000", image: heroImg },
    { name: "Brownies", category: "Best Seller", price: "Rp40.000", image: heroImg },
  ];

  const categories = ["Semua", ...new Set(items.map((item) => item.category))];

  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [showAll, setShowAll] = useState(false);

  // Filter produk sesuai kategori
  const filteredItems = selectedCategory === "Semua" ? (showAll ? items : items.slice(0, 4)) : items.filter((item) => item.category === selectedCategory);

  // Reset showAll saat ganti kategori selain Semua
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category !== "Semua") {
      setShowAll(false);
    }
  };

  return (
    <section id="produk" className="py-16 px-6 bg-white text-center">
      <h3 className="text-3xl font-bold mb-4 text-gray-800">Pilih dan Nikmati Kue Favoritmu</h3>

      {/* Filter Kategori */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full font-semibold text-sm border transition
              ${selectedCategory === category ? "bg-[#5C3317] text-white border-[#5C3317]" : "bg-white text-[#5C3317] border-[#5C3317] hover:bg-[#5C3317] hover:text-white"}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 max-w-7xl mx-auto ">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="p-2 flex flex-col items-center
              transition-transform duration-300 ease-in-out
              hover:scale-105 hover:border hover:border-gray-400 rounded-md"
          >
            <h4 className="text-xl font-semibold mb-1 text-gray-800">{item.name}</h4>
            <p className="text-sm text-yellow-600 font-semibold mb-4">{item.category}</p>
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-6 rounded-md" />
            <div className="flex justify-between items-center w-full px-2">
              <a
                href={`https://wa.me/6281234567890?text=Halo, saya ingin membeli ${item.name}. apakah sudah ada stok?`}
                target="_blank"
                className="bg-white border border-[#5C3317] text-[#5C3317] font-semibold text-sm px-4 py-1 rounded flex items-center gap-2 hover:bg-[#5C3317] hover:text-white transition"
                aria-label={`Buy ${item.name}`}
              >
                <FaWhatsapp />
                Buy to Wa
              </a>
              <p className="text-gray-800 font-bold text-md">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol lihat semua hanya untuk kategori "Semua" */}
      {selectedCategory === "Semua" && !showAll && (
        <button onClick={() => setShowAll(true)} className="mt-10 px-8 py-3 bg-[#5C3317] text-white font-semibold rounded-full shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out">
          Lihat Semua
        </button>
      )}
    </section>
  );
};

export default Products;
