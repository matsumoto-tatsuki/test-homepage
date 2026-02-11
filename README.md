# BODY CRAFT - Personal Gym Homepage (Static)

ボディメイク専門パーソナルジム「BODY CRAFT」のランディングページ（LP）です。
このブランチは **静的ファイルのみ** で構成されており、ビルド不要で動作します。

## ✨ 特徴

- **Static Only**: HTML, CSS, JavaScript のみで構成。サーバーやビルドツールは不要。
- **Premium Design**: マットブラックをベースにゴールドのアクセントを使用した、都会的で高級感のあるUI。
- **Responsive**: PC、タブレット、スマートフォンすべてに最適化されたレスポンシブデザイン。

## 🚀 閲覧方法

1. このフォルダ内の `index.html` をブラウザ（Chrome, Edge, Safariなど）で直接開いてください。
2. サイトが表示されます。

## 📁 ディレクトリ構成

```
.
├── index.html        # メインHTMLファイル
├── style.css         # スタイルシート
├── main.js           # スクリプト
├── README.md         # プロジェクト説明書
└── *.webp            # 画像アセット（配置用）
```

## 🎨 カスタマイズ

### 画像の差し替え
以下のファイル名で画像をプロジェクトルートに配置すると、自動的に反映されます。
- `hero_bg.webp`: メインビジュアル背景
- `training_session.webp`: Featuresセクションのトレーニング画像
- `healthy_meal.webp`: Featuresセクションの食事画像
- `trainer_portrait.webp`: トレーナー写真

### 配色の変更
`style.css` の `:root` 定義を変更することで、サイト全体の配色を調整可能です。

```css
:root {
  --c-accent: #d4af37;       /* メインアクセントカラー（ゴールド） */
  --c-bg-dark: #121212;      /* 背景色 */
}
```
