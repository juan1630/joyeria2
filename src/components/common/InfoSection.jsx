export const InfoSection = () => {
  return (
    <section className="info_section ">
      <div className="container">
        <div className="info_container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_logo">
                <a href="">
                  <img src="src/assets/images/logo.png" alt="" />
                  <span>Lodge</span>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_contact">
                <a href="">
                  <img src="src/assets/images/location.png" alt="" />
                  <span>Address</span>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_contact">
                <a href="">
                  <img src="src/assets/images/phone.png" alt="" />
                  <span>+01 1234567890</span>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_contact">
                <a href="">
                  <img src="images/mail.png" alt="" />
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="info_form">
            <div className="d-flex justify-content-center">
              <h5 className="info_heading">Newsletter</h5>
            </div>
            <form action="">
              <div className="email_box">
                <label htmlFor="email2">Enter Your Email</label>
                <input type="text" id="email2" />
              </div>
              <div>
                <button>subscribe</button>
              </div>
            </form>
          </div>
          <div className="info_social">
            <div className="d-flex justify-content-center">
              <h5 className="info_heading">Follow Us</h5>
            </div>
            <div className="social_box">
              <a href="">
                <img src="src/assets/images/fb.png" alt="" />
              </a>
              <a href="">
                <img src="src/assets/images/twitter.png" alt="" />
              </a>
              <a href="">
                <img src="src/assets/images/linkedin.png" alt="" />
              </a>
              <a href="">
                <img src="src/assets/images/insta.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
