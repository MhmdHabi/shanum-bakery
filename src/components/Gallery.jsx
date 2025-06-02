import React from "react";
import kue1 from "../assets/hero.jpg";
import kue2 from "../assets/hero1.jpg";

const images = [
  {
    src: kue1,
    name: "Kue Coklat Lezat",
    description: "Kue coklat premium dengan topping lezat dan tekstur lembut.",
    rating: 5,
  },
  {
    src: kue2,
    name: "Kue Keju Spesial",
    description: "Kue keju dengan rasa gurih dan aroma menggoda.",
    rating: 5,
  },
  {
    src: kue1,
    name: "Kue Strawberry Segar",
    description: "Kue strawberry segar dengan cream manis yang pas.",
    rating: 5,
  },
  {
    src: kue1,
    name: "Kue Vanilla Eksklusif",
    description: "Kue vanilla dengan cita rasa klasik yang elegan.",
    rating: 5,
  },
];

const Gallery = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />

      <section id="galeri" className="text-[#5C3317] pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl mb-3"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Favorite Kami
          </h2>
          <p className="text-sm md:text-base mb-10">
            Beberapa pilihan kue unggulan dari <strong>Shanum Bakery</strong>.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {images.map(({ src, name, description, rating }, index) => (
              <div key={index} className="w-56 h-[30rem] flex flex-col items-center">
                <img src={src} alt={name} className="w-full h-full object-cover hover:scale-105 hover:border hover:border-[#5C3317] transition-transform duration-300 rounded-full" />
                <div className="mt-3 text-center px-2">
                  <h3 className="text-sm font-semibold">{name}</h3>
                  <p className="text-xs text-[#4b3a16]">{description}</p>

                  {/* Rating bintang */}
                  <div className="mt-1 text-yellow-500 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < rating ? "⭐" : "☆"}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative w-full overflow-hidden leading-[0] mt-16" style={{ height: "60px", marginTop: "4rem" }}>
        <svg className="block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 2400 60" fill="#5C3317">
          <path
            d="
              M0 30
              Q120 60 240 30
              T480 30
              T720 30
              T960 30
              T1200 30
              T1440 30
              T1680 30
              T1920 30
              T2160 30
              T2400 30
              V0
              H0
              V30
              Z
            "
          />
        </svg>
      </div>
    </>
  );
};

export default Gallery;
