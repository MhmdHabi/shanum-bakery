import React from "react";

const MapPage = () => {
  return (
    <section id="maps" className="bg-white text-[#5C3317] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-[#5C3317]">Lokasi Toko Kami</h2>
        <p className="mb-8 text-[#7B4F29]">Silakan kunjungi Toko Kue Shanum di alamat berikut. Klik pada peta untuk melihat lebih detail di Google Maps.</p>
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border-4 border-[#FFD700]">
          <iframe
            title="Lokasi Toko Kue Shanum"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.3111586937!2d106.6647028!3d-6.2297286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f157e78ac9f7%3A0x2db8a3deab8b52d2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1717312898472!5m2!1sen!2sid"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapPage;
