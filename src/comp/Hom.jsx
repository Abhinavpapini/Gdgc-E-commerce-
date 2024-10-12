import React from "react";


function Home() {
  return (
    <div className="container my-5">
      <h1 className="display-4 text-center mb-4">Welcome to Our Tech Hub</h1>
      <p className="text-center lead mb-5">
        Explore various technologies and their features.
      </p>
      <div className="row">
        <div className="col-md-4 mb-4 d-flex">
          <div className="card h-100 text-center shadow-sm border-0 flex-fill">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React"
              className="card-img-top mx-auto mt-4"
              style={{ width: "50%" }}
            />
            <div className="card-body">
              <h2 className="card-title">React</h2>
              <p className="card-text">
                A JavaScript library for building user interfaces easily.
              </p>
              <a href="/tech/reactjava" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 d-flex">
          <div className="card h-100 text-center shadow-sm border-0 flex-fill">
            <img
              src="https://vuejs.org/images/logo.png"
              alt="Vue"
              className="card-img-top mx-auto mt-3"
              style={{ width: "50%" }}
            />
            <div className="card-body">
              <h2 className="card-title">Vue</h2>
              <p className="card-text">
                A progressive framework for building user interfaces
                efficiently.
              </p>
              <a href="/tech/vue" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 d-flex">
          <div className="card h-100 text-center shadow-sm border-0 flex-fill">
            <img
              src="https://angular.io/assets/images/logos/angular/angular.svg"
              alt="Angular"
              className="card-img-top mx-auto mt-3"
              style={{ width: "50%" }}
            />
            <div className="card-body">
              <h2 className="card-title">Angular</h2>
              <p className="card-text">
                A platform for building mobile and desktop web applications
                seamlessly.
              </p>
              <a href="/tech/angular" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
