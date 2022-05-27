import "./Introduction.css"

function Introduction({ srcImage }) {
  return (
    <article className="container-fluid introduction pt-3">
      <div className="row align-items-center intro">
        <div className="col-sm-6 col-md-5 offset-md-1 intro-text">
          <div>
            <h2>Best Car Rental in Bali</h2>
          </div>
          <div>
            <p>
              Welcome to Binar Car Rental. We provide the best quality cars at <br />
              affordable prices. Always ready to serve your needs for car rental <br />
              for 24 hours.
            </p>
          </div>
          <div>
            <a className="btn btn-primary" href="/cars">Start Car Rental</a>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 intro-img">
          <img className="img-fluid" src="./images/drawkit-call.svg" alt="car avanza" />
        </div>
      </div>
    </article>
  );
}

export default Introduction;
