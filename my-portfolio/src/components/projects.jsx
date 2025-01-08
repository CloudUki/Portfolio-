import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <hr className="projects_divider" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 projects_intro">
            <h2>Featured Projects</h2>
            <p>Here are some of the projects I have worked on that showcase my passion for software engineering.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="ca_co_section">
              <strong id="ca_co_start">Calcium + Company</strong>
              <img id="ca_co_img" src="assets/Ca+Co.jpeg" alt="Ca+Co" />
              <p className="ca_co_desc">
                Built a company website using JavaScript, HTML, Bootstrap, SCSS, and Figma, collaborating closely with other
                departments to align functionality and design with company goals. Delivered a fully responsive website that
                helped with user engagement.
              </p>
              <a href="https://calciumco.com/" className="ca-co-demo">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
