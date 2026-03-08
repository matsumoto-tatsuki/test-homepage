import React from 'react';

// 体験談やストーリーを語るセクション
export default function Story() {
  return (
    <section id="story" className="section story-section">
      <div className="container">
        <div className="section-label fade-in">MY STORY</div>
        <h2 className="section-title fade-in">すべては、<br/>コンプレックスから始まった。</h2>

        <div className="story-content">
          <div className="story-block fade-in-up">
            <p>
              今でこそトレーナーとして活動していますが、<br/>
              かつての私は、自分の体型に強いコンプレックスを抱えていました。
            </p>
            <p>
              食べることが大好きで、運動は苦手。<br/>
              鏡を見るたびに「どうせ自分なんて」と目を背ける日々。<br/>
              ダイエットに挑戦しては挫折し、リバウンドを繰り返す。<br/>
              そんな「変われない自分」が何より大嫌いでした。
            </p>
          </div>

          <div className="story-image-block fade-in-up">
            {/* 過去のマイルストーンとなる画像 */}
            <div className="story-img-wrapper">
              <img 
                src="/story_before_after.webp" 
                alt="Before and After" 
                className="story-img"
                onError={(e) => e.target.parentElement.classList.add('no-image', 'wide', 'light')}
              />
              <p className="caption">左：自信がなかった頃の私 / 右：現在の私</p>
            </div>
          </div>

          <div className="story-block fade-in-up">
            <h3>転機となった、「ある言葉」</h3>
            <p>
              転機は25歳の時でした。<br/>
              ふと立ち寄ったジムで、あるトレーナーに言われたのです。<br/>
              「身体作りは、自分との約束を守る練習だよ」と。
            </p>
            <p>
              それまで私は「痩せること」＝「苦しい我慢」だと思っていました。<br/>
              でも違ったんです。小さな約束を守り、積み重ねる。<br/>
              昨日より1回多く持ち上げられた。先週より身体が軽い。<br/>
              その小さな成功体験が、失っていた自己肯定感を少しずつ取り戻してくれました。
            </p>
          </div>

          <div className="story-block highlight fade-in-up">
            <p>
              身体が変われば、心が変わり、人生が変わる。<br/>
              私が身をもって体験したこの感動を、<br/>
              次はあなたに伝えたいのです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
