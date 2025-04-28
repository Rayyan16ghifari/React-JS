function Hero() {
    return (
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-primary">
              Small Actions Today, Big Differences Tomorrow.
            </h1>
            <p className="lead">
              Kebiasaan kecil yang dilakukan secara konsisten setiap hari, akan menumpuk efeknya seiring waktu.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Details</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://img.freepik.com/free-photo/man-wearing-smart-glasses-touching-virtual-screen-futuristic-technology-digital-remix_53876-104247.jpg"
              alt="Futuristic Tech"
              width="720"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
  