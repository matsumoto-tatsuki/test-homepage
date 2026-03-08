import React from 'react';

// 問い合わせや予約を受け付けるフォームセクション
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('デモサイトのため送信されません。');
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-container">
        <div className="section-header text-center fade-in">
          <div className="section-label">CONTACT</div>
          <h2 className="section-h2">あなたの「変わりたい」を<br/>全力で応援します。</h2>
        </div>

        <div className="contact-box fade-in-up">
          <p className="contact-note">
            まずはお悩みを聞かせてください。<br/>
            無理な勧誘は一切いたしませんので、ご安心ください。
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">お名前 <span className="req">必須</span></label>
              <input type="text" id="name" name="name" required placeholder="例：大和 太郎" />
            </div>

            <div className="form-group">
              <label htmlFor="email">メールアドレス <span className="req">必須</span></label>
              <input type="email" id="email" name="email" required placeholder="example@email.com" />
            </div>

            <div className="form-group">
              <label>目的（複数選択可）</label>
              <div className="checkbox-group">
                <label><input type="checkbox" name="purpose" value="diet" /> ダイエット</label>
                <label><input type="checkbox" name="purpose" value="muscle" /> 筋力アップ・ボディメイク</label>
                <label><input type="checkbox" name="purpose" value="health" /> 健康維持・姿勢改善</label>
                <label><input type="checkbox" name="purpose" value="contest" /> 大会出場</label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">メッセージ</label>
              <textarea id="message" name="message" rows="5" placeholder="ご質問や、現在のお悩みがあれば簡単にご記入ください。"></textarea>
            </div>

            <button type="submit" className="btn-submit">送信する</button>
          </form>
        </div>
      </div>
    </section>
  );
}
