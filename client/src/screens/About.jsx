import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      />
      <div className="about mt-4">
        <h1>Future Goals</h1>
        <p>
          "Our future goals are to innovate, inspire, and make a positive impact
          on the world through cutting-edge technologies and creative
          solutions."
        </p>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center"></div>
            </div>
            <div className="carousel-item active">
              <img
                src="img\Future goals 1.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="img\Future goals 2.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* ...............................................Our Team............................................................. */}
      <div className="about mt-5">
        <h1>Our Team</h1>
        <p>Meet our awesome team!</p>
      </div>
      <section className="container about">
        <figure>
          <div className="layer">
            <h3>Full Stack Web Developer</h3>
            <p>
              I developed the UI and back-end of RapidRecap using MERN Stack.
            </p>
          </div>
          <img src="img\Subrat.jpeg" alt="Subrat Gupta" />
          <figcaption>
            <h3>Subrat Gupta</h3>
            <br />
            <a
              href="https://www.linkedin.com/in/subratgupta2704"
              className="fa fa-linkedin fa-2x"
            ></a>
            <a
              href="https://www.instagram.com/subrat.gupta.2704/"
              className="fa fa-instagram fa-2x mx-3"
            ></a>
            <a
              href="https://github.com/subratgupta2704"
              className="fa fa-github fa-2x"
            ></a>
          </figcaption>
        </figure>

        <figure>
          <div className="layer">
            <h3>Team Lead</h3>
            <p>
              I developed the UI and back-end of RapidRecap using MERN Stack.
            </p>
          </div>
          <img src="img\Saransh.jpg" alt="" />
          <figcaption>
            <h3>Saransh Mittal</h3>
            <br />
            <a
              href="https://www.linkedin.com/in/saransh-mittal-824927248/"
              className="fa fa-linkedin fa-2x"
            ></a>
            <a
              href="https://www.instagram.com/saransh._.mittal/"
              className="fa fa-instagram fa-2x mx-3"
            ></a>
            <a
              href="https://github.com/Saransh-mittal"
              className="fa fa-github fa-2x"
            ></a>
          </figcaption>
        </figure>

        <figure>
          <div className="layer">
            <h3>Data Scientist</h3>
            <p>I developed python servers to do web scrapping.</p>
          </div>
          <img src="img\Mayank.jpeg" alt="" />
          <figcaption>
            <h3>Mayank Gupta</h3>
            <br />
            <a
              href="https://www.linkedin.com/in/mayank-gupta-7104a21a6/"
              className="fa fa-linkedin fa-2x"
            ></a>
            <a
              href="https://www.instagram.com/mkgupta.exe/"
              className="fa fa-instagram fa-2x mx-3"
            ></a>
            <a
              href="https://github.com/mayank-gupta16"
              className="fa fa-github fa-2x"
            ></a>
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
