import React, { useState, useEffect } from 'react';

// アプリケーションの上部ナビゲーション
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // スクロール時にヘッダーのスタイルを変更するためのイベントリスナー
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="container header-container">
        <a href="#" className="logo">Takumi Yamato.</a>
        <nav>
          <ul
            className="nav-links"
            style={isMenuOpen ? {
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              top: '100%',
              right: '0',
              backgroundColor: '#fff', // モバイルメニューは白基調に変更(元のCSSに合わせて適宜調整)
              width: '200px',
              padding: '1rem',
              boxShadow: '0px 5px 10px rgba(0,0,0,0.1)',
              zIndex: 1000
            } : {}}
          >
            <li><a href="#story" onClick={() => setIsMenuOpen(false)}>Story</a></li>
            <li><a href="#profile" onClick={() => setIsMenuOpen(false)}>Profile</a></li>
            <li><a href="#career" onClick={() => setIsMenuOpen(false)}>Career</a></li>
          </ul>
          <button
            className="mobile-menu-btn"
            aria-label="メニューを開く"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
