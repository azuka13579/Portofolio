const Visimisi = () => {
  return (
    <div className="bg-gradient-to-l from-cyan-400 to-sky-700 rounded-lg">
      <div className="visimisi py-6 px-16 bg-transparent shadow-md rounded-lg h-screen flex flex-col gap-6 justify-center">
        <h2
          className="text-5xl font-extrabold tracking-wider text-white mb-4 border-b-2 border-white pb-6"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          Visi dan Misi Ormawa Eksekutif PKU
        </h2>
        <div className="w-1/2 mt-3">
          <div className="mb-6" data-aos="fade-right" data-aos-duration="800">
            <h3 className="text-5xl font-bold text-white mb-2">Visi</h3>
            <p className="text-white leading-relaxed font-light text-xl">
              Menjadi organisasi yang inspiratif dan inovatif dalam menciptakan
              dampak positif bagi masyarakat dan lingkungan.
            </p>
          </div>
          <div data-aos="fade-right" data-aos-duration="800">
            <h3 className="text-5xl font-bold text-white mb-2">Misi</h3>
            <ul className="list-disc list-inside text-white leading-relaxed space-y-2 text-lg font-light">
              <li>
                Mengembangkan program-program yang mendukung pemberdayaan
                masyarakat.
              </li>
              <li>
                Mendorong kolaborasi antara anggota organisasi dan komunitas.
              </li>
              <li>
                Menerapkan prinsip keberlanjutan dalam setiap aktivitas
                organisasi.
              </li>
              <li>
                Memberikan kesempatan bagi anggota untuk terus belajar dan
                berkembang.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visimisi;
