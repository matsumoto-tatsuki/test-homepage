import React from 'react';

// フッター
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <a href="#" className="footer-logo">Takumi Yamato.</a>
          <ul className="footer-links">
            <li><a href="#story">Story</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className="copyright">
          &copy; 2024 Takumi Yamato All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
