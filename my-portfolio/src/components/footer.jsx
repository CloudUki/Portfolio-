import React from 'react';

function Footer() {
  return (
    <footer>
      <hr className="footer_divider" />
      <div className="container">
        <div className="row justify-content-between align-items-center footer_info">
          <div className="col-auto">
            <p>&copy; 2025 Brandon Yang. All rights reserved.</p>
          </div>
          <div className="col-auto">
            <a href="mailto:brandon.yang1210@gmail.com">
              <i className="email_icon fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
