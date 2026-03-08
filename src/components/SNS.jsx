import React from 'react';

// SNS（Instagram等）への導線セクション
export default function SNS() {
  return (
    <section id="sns" className="section bg-blue-light">
      <div className="container text-center">
        <div className="section-label fade-in">INSTAGRAM</div>
        <h2 className="section-h2 icon-heading fade-in">
          <span className="insta-icon">📷</span> 日々の活動を発信中
        </h2>
        <p className="sns-message fade-in-up">
          トレーニングのコツや食事管理の豆知識、<br/>
          そして私自身の日常をストーリーズで毎日更新しています。<br/>
          人となりを知っていただくためにも、ぜひ覗いてみてください。
        </p>
        <div className="sns-btn-wrapper fade-in-up">
          <a href="#" className="btn-insta">
            <span className="icon">Follow Me</span>
            @takumi_fit
          </a>
        </div>
      </div>
    </section>
  );
}
