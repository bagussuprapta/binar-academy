import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row pt-3">
          <div className="col-lg-6 pt-5">
            <h2 className="main">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
            <div className="row mt-3">
              <div className="col-md-10">
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Link to="/cars">
                  <button className="btn btn-regis">Mulai Sewa Mobil</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 gy-4 pt-2">
            <img src="./img/img_car.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
