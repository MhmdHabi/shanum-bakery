import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    { name: "Alya", text: "Kuemu enak banget! Cocok buat acara ulang tahun anakku." },
    { name: "Rian", text: "Pelayanan cepat dan kuenya lembut!" },
    { name: "Lia", text: "Rasa dan tampilannya premium, recommended!" },
    { name: "Dika", text: "Kuenya fresh dan selalu tepat waktu pengirimannya." },
    { name: "Sari", text: "Varian rasa lengkap, semua cocok di lidah keluarga saya." },
    { name: "Fajar", text: "Bikin ketagihan! Pasti order lagi." },
    { name: "Nina", text: "Harga bersaing tapi kualitas tidak murahan." },
    { name: "Rendy", text: "Tempat yang pas untuk kue homemade." },
    { name: "Maya", text: "Suasana toko nyaman, pelayanannya ramah." },
    { name: "Tika", text: "Kuenya moist dan nggak terlalu manis, pas banget." },
    { name: "Andi", text: "Rekomendasi buat yang cari kue sehat dan enak." },
    { name: "Wulan", text: "Dikirim dengan kemasan rapi dan aman." },
  ];

  const visibleCount = 3;
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev - visibleCount < 0 ? reviews.length - visibleCount : prev - visibleCount));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + visibleCount >= reviews.length ? 0 : prev + visibleCount));
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="testimoni" className="relative bg-white text-center pt-20 pb-0">
      {/* Wave Atas */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none" style={{ height: "60px", borderBottom: "2px solid #5C3317" }}>
        <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 60" fill="#5C3317">
          <path d="M0 30 Q15 0 30 30 T60 30 T90 30 T120 30 T150 30 T180 30 T210 30 T240 30 T270 30 T300 30 T330 30 T360 30 T390 30 T420 30 T450 30 T480 30 T510 30 T540 30 T570 30 T600 30 T630 30 T660 30 T690 30 T720 30 T750 30 T780 30 T810 30 T840 30 T870 30 T900 30 T930 30 T960 30 T990 30 T1020 30 T1050 30 T1080 30 T1110 30 T1140 30 T1170 30 T1200 30 V60 H0 V30 Z" />
        </svg>
      </div>

      <h3 className="text-4xl font-extrabold mb-12 text-[#5C3317] max-w-3xl mx-auto px-4">Testimoni Pelanggan Setia yang Telah Menikmati Lezatnya Kue Shanum Bakery</h3>

      <div className="flex justify-center items-center gap-6 max-w-5xl mx-auto px-4 mb-20">
        <button onClick={prevSlide} aria-label="Previous testimonials" className="text-4xl text-[#5C3317] hover:text-yellow-600 transition">
          &#8592;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {visibleReviews.map((review, idx) => (
            <div key={startIndex + idx} className="bg-white p-6 rounded-xl border border-[#5C3317] cursor-default flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <FaUser className="text-[#5C3317] text-5xl mx-auto mb-4" />
              <p className="italic text-[#5C3317] mb-6 flex-grow">&ldquo;{review.text}&rdquo;</p>
              <h5 className="font-semibold text-[#5C3317] text-lg">- {review.name}</h5>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} aria-label="Next testimonials" className="text-4xl text-[#5C3317] hover:text-yellow-600 transition">
          &#8594;
        </button>
      </div>

      {/* Wave Bawah */}
      <div className="relative w-full overflow-hidden leading-[0]" style={{ height: "60px", marginTop: "-1px" }}>
        <svg className="block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 60" fill="#5C3317">
          <path d="M0 30 Q15 60 30 30 T60 30 T90 30 T120 30 T150 30 T180 30 T210 30 T240 30 T270 30 T300 30 T330 30 T360 30 T390 30 T420 30 T450 30 T480 30 T510 30 T540 30 T570 30 T600 30 T630 30 T660 30 T690 30 T720 30 T750 30 T780 30 T810 30 T840 30 T870 30 T900 30 T930 30 T960 30 T990 30 T1020 30 T1050 30 T1080 30 T1110 30 T1140 30 T1170 30 T1200 30 V0 H0 V30 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
