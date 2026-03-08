import React from 'react';

// トレーナーのプロフィールを紹介するセクション
export default function Profile() {
  return (
    <section id="profile" className="section bg-gray">
      <div className="container">
        <div className="profile-wrapper">
          <div className="profile-info fade-in-up">
            <div className="section-label">PROFILE</div>
            <h2 className="profile-name">大和 拓海 <span className="en">Takumi Yamato</span></h2>
            <div className="profile-tags">
              <span>📍 東京・青山 / オンライン</span>
              <span>🏋️ Body Makeup</span>
            </div>
            <p className="profile-desc">
              1995年生まれ。パーソナルトレーナー。<br/>
              「無理なく続けられるボディメイク」をテーマに、<br/>
              これまで2,000名以上のお客様をサポート。<br/>
              ただ鍛えるだけでなく、姿勢改善や食事指導を含めた<br/>
              トータルバランスの調整を得意とする。
            </p>
            <div className="profile-values">
              <h3>大切にしていること</h3>
              <ul>
                <li>否定しない。まずはあなたの想いを聞きます。</li>
                <li>「なぜやるのか」を丁寧に説明します。</li>
                <li>生活スタイルに合わせた「続く方法」を提案します。</li>
              </ul>
            </div>
          </div>
          {/* プロフィール画像 */}
          <div className="profile-image fade-in-up delay-100">
            <img 
              src="/profile_casual.webp" 
              alt="Takumi Yamato Profile" 
              className="prof-img"
              onError={(e) => e.target.parentElement.classList.add('no-image', 'light')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
