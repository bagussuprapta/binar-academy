const Testimonial = () => {
  return (
    <div className="testi" id="testi">
      <h3 className="text-center testi-text">Testimonial</h3>
      <p className="mt-2 text-center">Berbagai review positif dari para pelanggan kami</p>
      <div className="carousel slide" id="carouselExampleControls" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="coba d-flex justify-content-center">
              <div className="card mb-3 d-flex justify-content-center align-items-center">
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="img/Jisoo.jpg" className="test img-fluid rounded-circle" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <img src="img/Rate.svg" className="card-title" alt="" />
                      <p className="card-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro vitae quisquam mollitia sint harum unde dicta, veniam maiores, fugiat officia, cum facere error animi vel
                        laboriosam asperiores sit eius? Officiis!
                      </p>
                      <p className="card-text">Kim Jisoo 28, Seoul</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <div className="card mb-3 d-flex justify-content-center align-items-center">
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="img/jennie.png" className="test img-fluid rounded-circle" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <img src="img/Rate.svg" className="card-title" alt="" />
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit optio itaque, consectetur quas nihil ex commodi, ratione quisquam esse dolorem nisi aliquam molestias minus odio?
                        Reiciendis eligendi officiis illum praesentium.
                      </p>
                      <p className="card-text">Kim Jennie 27, Seoul</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <div className="card mb-3 d-flex justify-content-center align-items-center">
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="img/rose.jpg" className="test img-fluid rounded-circle" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <img src="img/Rate.svg" className="card-title" alt="" />
                      <p className="card-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea in dicta optio a iure quisquam repudiandae sunt quidem labore pariatur, dolor fugiat accusantium facere aliquid
                        similique quis! Error, praesentium officia.
                      </p>
                      <p className="card-text">Park Chaeyoung 26, Seoul</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-btn d-flex justify-content-center">
          <button id="prev" className="btn border rounded-circle" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <img src="img/Vector.svg" alt="" />
          </button>
          <button id="next" className="btn border rounded-circle" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <img src="img/Vector2.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
