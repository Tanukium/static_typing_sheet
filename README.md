# 静的型付け表作成アプリ
#### alias 'static typing sheet'
2018平岡ゼミ卒業研究プロジェクトです。<br>
「静的型付け」機能がある表を作成する、シンプルなアプリです。<br>
サーバ側に予め定義したデータタイプ

- str
- int
- float

...通りのデータしか入力できない、そのような表を簡単作成/ダウンロード出来ます。<br>
表はCSVフォーマットです。<br>
開発中身に付けた関連知識も併せて載せます。


# URL
[https://e2c.ninja/sts](https://e2c.ninja/sts)


# 使用技術
- JavaScript
  - jQuery
- Node.js
  - Express.js
    - jstransformer-markdown-it
- Pug
- Bootstrap


# 機能一覧
- 複数個テキストボックス包含のHTMLフォーム(表)作成機能(Pug)
- テキストボックス入力内容チェック機能(jQuery, Express.js, 正規表現)
- HTMLフォーム(表)ダウンロード機能(jQuery, iFrame)
- 記事表示機能(jstransformer-markdown-it, Pug, Express.js)
- SSL(Let's Encrypt)


# ToDo
- 短期
  - アプリデザイン美化(シート)
- 中期
  - 型の種類を追加
- 長期
  - CSVアップロード機能
  - CSV読み取り機能
  - 表のデータベース保存機能
