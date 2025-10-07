import { Container } from "react-bootstrap";
import hero from "../assets/hero.png";
import offices from "../assets/offices.png";
import guides from "../assets/guides.png";

import '../App.css';

function SafetyScam() {
  return (
    <div>

      <div id="carouselExample" className="carousel slide w-100 mb-4">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={hero} class="news-carousel" className="d-block w-100" alt="Hero" />
          </div>
          <div className="carousel-item">
            <img src={offices} className="d-block w-100" alt="Offices" />
          </div>
          <div className="carousel-item">
            <img src={guides} className="d-block w-100" alt="Guides" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Container className="text-center my-5">
        <h1 className="display-1 fw-bold">SCAM PROTECTION</h1>
      </Container>

<Container className="d-flex justify-content-center align-items-center my-5">
  <form className="p-4 bg-light shadow rounded" style={{ maxWidth: '500px', width: '100%' }}>
    <h3 className="text-center mb-4">Report</h3>

    <input 
      type="text" 
      name="data[name]" 
      placeholder="Full Name" 
      className="form-control mb-3" 
      required 
    />

    <input 
      type="email" 
      name="data[email]" 
      placeholder="Email Address" 
      className="form-control mb-3" 
      required 
    />

    <input 
      type="text" 
      name="data[number]" 
      placeholder="Contact Number" 
      className="form-control mb-3" 
      required 
    />

    <textarea 
      name="data[message]" 
      rows="4" 
      placeholder="Your Message" 
      className="form-control mb-3" 
      required 
    ></textarea>

    <div className="text-center">
      <button type="submit" className="btn btn-primary px-5">
        Submit
      </button>
    </div>
  </form>
</Container>


    </div>
  );
}

export default SafetyScam;
