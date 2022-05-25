function Introduction({srcImage}) {
  return (
    <article class="container-fluid introduction pt-5">
      <div class="row align-items-center intro">
        <div class="col-md-5 offset-md-1 intro-text">
          <div>
            <h2>
              Sewa & Rental Mobil Terbaik <br /> di kawasan Denpasar
            </h2>
          </div>
          <div>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas <br /> terbaik dengan harga terjangkau. Selalu siap
              melayani kebutuhanmu <br /> untuk sewa mobil selama 24 jam.
            </p>
          </div>
          <div>
            <button class="btn btn-success">Start Car Rental</button>
          </div>
        </div>
        <div class="col-md-6 intro-img">
          <img class="img-fluid" src="./images/img_car.png" alt="car avanza"/>
        </div>
      </div>
    </article>
  );
}

export default Introduction;