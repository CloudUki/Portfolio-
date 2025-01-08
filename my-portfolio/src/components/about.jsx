import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="col-12">
        <div className="row">
          <h2>Hi, I Am Brandon Yang.</h2>
          <p id="bio">
            A Senior at Moravian University majoring in Computer Science,
            passionate about building accessible and user-friendly websites.
          </p>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="linkedin">
            <a className="btn" href="https://www.linkedin.com/in/brandonyyang/" target="_blank" rel="noopener noreferrer">
              <img className="top_buttons linkedin_button" src="assets/linkedin_button.png" alt="LinkedIn Button" />
            </a>
          </div>
          <div className="github">
            <a className="btn" href="https://github.com/CloudUki" target="_blank" rel="noopener noreferrer">
              <img className="top_buttons github_button" src="assets/github_button.png" alt="GitHub Button" />
            </a>
          </div>
          <img id="me" src="assets/me.jpg" alt="Brandon Yang" />
        </div>
      </div>
    </section>
  );
}

export default About;
