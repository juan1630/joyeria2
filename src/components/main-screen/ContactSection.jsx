export const ContactSection = () => {
  return (
    <section className="contact_section layout_padding">
      <div className="design-box">
        <img src="src/assets/images/design-2.png" alt="" />
      </div>
      <div className="container ">
        <div className="">
          <h2 className="">Contact Us</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form action="">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Phone" />
              </div>
              <div>
                <input
                  type="text"
                  className="message-box"
                  placeholder="Message"
                />
              </div>
              <div className="d-flex ">
                <button>SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
