// アプリケーションの骨組みとなるルートコンポーネント
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Profile from './components/Profile';
import Career from './components/Career';
import SNS from './components/SNS';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // スクロール時に要素をフェードインさせるアニメーション設定
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // 一度だけ実行する
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -100px 0px', // 画面の下から100px上で発火
      threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
    
    // クリーンアップ
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Profile />
        <Career />
        <SNS />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
