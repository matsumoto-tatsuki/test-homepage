import React from 'react';

// これまでの実績や資格を紹介するセクション
export default function Career() {
  return (
    <section id="career" className="section">
      <div className="container">
        <div className="section-header text-center fade-in">
          <div className="section-label">CAREER & SKILLS</div>
          <h2 className="section-h2">歩んできた道</h2>
        </div>

        <div className="career-grid">
          <div className="career-card fade-in-up">
            <h3>Contest</h3>
            <p className="career-sub">大会実績</p>
            <ul className="career-list">
              <li>Best Body Japan 2023 公認グランプリ</li>
              <li>Summer Style Award 2022 3位</li>
              <li>JBBF フィジーク地区大会 優勝</li>
            </ul>
          </div>

          <div className="career-card fade-in-up delay-100">
            <h3>Certification</h3>
            <p className="career-sub">保有資格</p>
            <ul className="career-list">
              <li>NSCA-CPT (全米公認トレーナー)</li>
              <li>NESTA-PFT</li>
              <li>栄養コンシェルジュ 2つ星</li>
            </ul>
          </div>

          <div className="career-card fade-in-up delay-200">
            <h3>Achievement</h3>
            <p className="career-sub">指導実績</p>
            <div className="career-number">
              <span className="num">2,000</span>
              <span className="unit">名以上</span>
            </div>
            <p className="career-desc">初心者からモデルまで幅広く担当</p>
          </div>
        </div>
      </div>
    </section>
  );
}
