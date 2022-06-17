const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="row">
          <div className="col-md-3">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-md-2">
            <p>Our Services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </div>
          <div className="col-md-3">
            <p>Connect with us</p>
            <div className="contact-icon d-flex gap-3">
              <img src="img/icon_facebook.svg" alt="" />
              <img src="img/icon_instagram.svg" alt="" />
              <img src="img/icon_twitter.svg" alt="" />
              <img src="img/icon_mail.svg" alt="" />
              <img src="img/icon_twitch.svg" alt="" />
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <p>Copyright Binar 2022</p>
            <img src="img/logo.png" alt="" />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
