import React from 'react';

// ファーストビューとなるヒーローセクション
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-image-wrapper fade-in">
          {/* メインビジュアルとなるポートレート画像 */}
          <img 
            src="/hero_portrait.webp" 
            alt="Takumi Yamato" 
            className="hero-img"
            onError={(e) => e.target.parentElement.classList.add('no-image', 'light')}
          />
        </div>
        <div className="hero-content fade-in-up">
          <p className="hero-catch">変われる。<br/>あなたも、何度でも。</p>
          <p className="hero-sub">才能なんて関係ない。<br/>必要なのは、「変わりたい」という想いと、<br/>正しい一歩を踏み出す勇気だけ。</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">体験トレーニングを予約する</a>
            <div className="hero-sns">
              <a href="#" aria-label="Instagram">Instagram</a>
              <span>/</span>
              <a href="#" aria-label="X (Twitter)">X (Twitter)</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
