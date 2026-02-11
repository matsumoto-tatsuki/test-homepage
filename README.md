# BODY CRAFT - Personal Gym Homepage

ボディメイク専門パーソナルジム「BODY CRAFT」のランディングページ（LP）プロジェクトです。
高級感（Luxury）と洗練（Sophistication）をテーマに、黒とゴールドを基調としたデザインで構築されています。

## ✨ 特徴

- **Premium Design**: マットブラックをベースにゴールドのアクセントを使用した、都会的で高級感のあるUI。
- **Responsive**: PC、タブレット、スマートフォンすべてに最適化されたレスポンシブデザイン。
- **Micro Interactions**: スクロール連動のフェードインアニメーションや、ヘッダーの透過切り替えなど、動的な演出。
- **Performance**: Vite + Vanilla JS/CSS による軽量で高速な動作。

## 🛠 技術スタック

- **HTML5**: セマンティックなマークアップ
- **CSS3**: CSS Variablesを活用した設計、Flexbox/Gridレイアウト
- **JavaScript**: ES Modules、Intersection Observer API
- **Tooling**: Vite (開発サーバー & ビルド)

## 🚀 開発環境のセットアップ

Node.js がインストールされている環境で、以下のコマンドを実行してください。

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスすると、プレビューが表示されます。

## 📁 ディレクトリ構成

```
.
├── index.html        # メインHTMLファイル
├── style.css         # メインスタイルシート（デザイン定義）
├── main.js           # アニメーション、インタラクションロジック
├── package.json      # プロジェクト設定・依存関係
├── README.md         # プロジェクト説明書（本書）
└── *.webp            # 画像アセット（生成または配置用）
```

## 🎨 カスタマイズ

### 画像の差し替え
以下のファイル名で画像をプロジェクトルートに配置すると、自動的に反映されます。
- `hero_bg.webp`: メインビジュアル背景
- `training_session.webp`: Featuresセクションのトレーニング画像
- `healthy_meal.webp`: Featuresセクションの食事画像
- `trainer_portrait.webp`: トレーナーセクションの画像

### 配色の変更
`style.css` の `:root` 定義を変更することで、サイト全体の配色を調整可能です。

```css
:root {
  --c-accent: #d4af37;       /* メインアクセントカラー（ゴールド） */
  --c-bg-dark: #121212;      /* 背景色 */
}
```

## 📄 ライセンス

このプロジェクトは商用・非商用問わず自由に改変・使用可能です。
