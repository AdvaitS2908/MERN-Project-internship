import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <div className="container my-5">
        <footer className="bg-light text-center text-dark">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#3b5998' }}
                to="#!"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#55acee' }}
                to="#!"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#dd4b39' }}
                to="#!"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#ac2bac' }}
                to="#!"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
              
            </section>
          </div>

          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Copyright:
            <Link className="text-dark" to="/">
              90MinWear
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
