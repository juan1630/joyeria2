import {} from '../../App.css'
export const Slider = () => {
  return (
    <>
      <section className=" slider_section position-relative">
        <div className="design-box">
          <img src="src/aseets/images/spiral-ring.jpeg" alt="" />
        </div>
        <div className="slider_number-container d-none d-md-block">
          <div className="number-box">
            <hr />
            <span className="jwel">
              J <br />
              e <br />
              w <br />
              e <br />
              l <br />
              l <br />
              e <br />
              r <br />y
            </span>
            <hr />
          </div>
        </div>
        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box banner-slider">
                      <h2>
                        <span> Nueva Coleccion</span>
                        <hr />
                      </h2>
                      <h1>Silver Rings</h1>
                      <p>
                        Anillo de plata de 20 gramos de peso
                      </p>
                      <div>
                        <a href="">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="src/assets/images/spiral-ring.jpeg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box banner-slider">
                      <h2>
                        <span> Nueva Coleccion </span>
                        <hr />
                      </h2>
                      <h1>Silver Rings</h1>
                      <p>
                        
                      </p>
                      <div>
                        <a href="">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="src/assets/images/rings.jpeg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box banner-slider">
                      <h2>
                        <span> Nueva Coleccion</span>
                        <hr />
                      </h2>
                      <h1>Silver Rings</h1>
                      <p>
                      </p>
                      <div>
                        <a href="">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="src/assets/images/heart.jpeg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
