const WhyUs = () => {
  return (
    <div className="container-fluid">
      <div className="whyus" id="whyus">
        <div className="whyus-text">
          <h3>Why Us?</h3>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <img src="img/icon_complete.svg" className="card-img-top" alt="..." />
                <h5 className="card-title mt-3 card-title-text">Mobil Lengkap</h5>
                <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <img src="img/icon_price.svg" className="card-img-top" alt="..." />
                <h5 className="card-title mt-3 card-title-text">Harga Murah</h5>
                <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <img src="img/icon_24hrs.svg" className="card-img-top" alt="..." />
                <h5 className="card-title mt-3 card-title-text">Layanan 24 Jam</h5>
                <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <img src="img/icon_professional.svg" className="card-img-top" alt="..." />
                <h5 className="card-title mt-3 card-title-text">Sopir Profesional</h5>
                <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
