/**
 * ============================================================
 *  ✏️  data.js — ここを編集するだけでサイト全体が変わります！
 *  コードが分からなくてもこのファイルだけ触ればOK。
 * ============================================================
 *
 *  【画像ファイルの入れ方】
 *  ・ヒーロー背景写真  → images/hero/hero1.jpg, hero2.jpg, hero3.jpg
 *  ・アーティスト写真  → images/artists/artist1.jpg, artist2.jpg ...
 *  ・出演団体写真      → images/local/local1.jpg, local2.jpg ...
 *  ・ギャラリー写真    → images/gallery/gallery1.jpg ...
 *  ・トップロゴ        → images/top-logo.png
 *  ・ヘッダーアイコン  → images/icon.png
 *  ・背景画像          → images/bg-main.jpg（固定背景）
 *
 *  【追加方法】
 *  各セクションのコメント例をコピーして、内容を書き換えてください。
 */

const SITE_DATA = {

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 🌺 基本情報（毎年ここを更新するだけ）
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  festival: {
    name:         "第3回 琉球の風",
    nameEn:       "RYUKYU NO KAZE",
    nameSub:      "〜沖縄祭りIN高崎〜",
    date:         "2026年10月17日（土）",
    dateEn:       "SAT. OCTOBER 17, 2026",
    openTime:     "9:00 OPEN",
    startTime:    "10:00 START",
    endTime:      "20:00 END",
    venue:        "高崎市もてなし広場",
    venueAddress: "群馬県高崎市栄町3-23（高崎駅東口すぐ）",
    organizer:    "琉球の風実行委員会",
    contact:      "info@ryukyunokaze.jp",
    tel:          "",
    sns: {
      instagram: "https://www.instagram.com/ryukyuno_kaze?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      line:      "https://line.me/R/ti/p/@wyw1714s",
    },
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 🔒 ページの公開/非公開設定
   *   false にするとメニューから消えます（データは保持）
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  pages: {
    news:     true,   // ニュース
    lineup:   true,   // アーティスト
    schedule: true,   // タイムテーブル
    ticket:   true,   // チケット
    food:     true,   // 飲食・出店
    goods:    true,   // グッズ
    sponsor:  true,   // スポンサー
    access:   true,   // アクセス
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 🌊 ヒーロースライド（1〜3枚）
   *   src に画像パスを入れるだけ。
   *   写真が無い場合は color で色を設定。
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  heroSlides: [
    {
      src:   "images/hero/hero1.png",
      color: "linear-gradient(160deg,#0096c7,#023e8a)",
    },
    {
      src:   "images/hero/hero2.jpg",
      color: "linear-gradient(160deg,#06d6a0,#0096c7)",
    },
    {
      src:   "images/hero/hero3.jpg",
      color: "linear-gradient(160deg,#e8452a,#c8963a)",
    },
  ],
  heroAutoplay: 5000,  // スライド切替速度（ミリ秒）5000=5秒

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 📰 ニュース
   *   追加するときは下のコメントをコピーして貼り付け
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  news: [
    {
      date:  "2025.03.30",
      badge: "NEW",      // "NEW" / "INFO" / "UPDATE"
      title: "「第3回 琉球の風〜沖縄祭りIN高崎」開催決定！",
      body:  "2026年10月17日（土）、高崎市もてなし広場にて開催決定。詳細は随時お知らせします。",
      link:  "#",
    },
    // ↓ここにニュースを追加（コピーして貼り付け）
    // {
    //   date:  "2025.XX.XX",
    //   badge: "NEW",
    //   title: "タイトル",
    //   body:  "本文",
    //   link:  "#",
    // },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ⭐ PICKUP（トップのおすすめループ）
 *   type: "artist" / "food" / "goods" / "event"
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
pickup: [
  // アーティスト
  // { type: "artist", label: "HEADLINER", name: "BEGIN", sub: "沖縄ポップ", photo: "images/artists/artist1.jpg", emoji: "🎤", color: "#0dc5d9" },

  // フード・出店
  // { type: "food", label: "FOOD", name: "沖縄そば屋", sub: "本格ソーキそば", photo: "images/food/food1.jpg", emoji: "🍜", color: "#06d6a0" },

  // グッズ
  // { type: "goods", label: "GOODS", name: "公式Tシャツ", sub: "¥2,000", photo: "images/goods/goods1.jpg", emoji: "👕", color: "#ffd166" },

  // イベント情報
  // { type: "event", label: "EVENT", name: "琉球舞踊ショー", sub: "13:00〜 メインステージ", photo: "", emoji: "🌺", color: "#e8452a" },
],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 🎸 出演アーティスト（メインアーティスト）
   *   決まったら追加。写真名を入れるだけ。
   *   url: アーティストの公式サイト（クリックで遷移）
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  artists: [
    // ↓ここにアーティストを追加（コピーして貼り付け）
    // {
    //   name:    "アーティスト名",
    //   genre:   "ジャンル（例: 沖縄ポップ）",
    //   time:    "13:00",          // 出演時間
    //   stage:   "MAIN STAGE",
    //   photo:   "images/artists/artist1.jpg",  // ← 写真ファイル名だけ変える
    //   url:     "https://アーティストのHP",    // ← 写真クリックでここへ飛ぶ
    //   profile: "アーティストの紹介文をここに書く",  // ← 名前クリックでモーダル表示
    //   emoji:   "🎤",             // 写真がない場合に表示
    // },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 🌺 出演団体（パフォーマー）
   *   クリックすると団体のHPへ遷移
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  performers: [
    // ↓ここに団体を追加（コピーして貼り付け）
    // {
    //   name:  "団体名",
    //   genre: "琉球舞踊",
    //   photo: "images/local/local1.jpg",  // ← 写真ファイル名だけ変える
    //   url:   "https://団体のHP",
    //   emoji: "🌺",
    // },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 📋 タイムテーブル
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  schedule: [
    // ↓ここに追加
    // { time: "09:00", name: "開場",  stage: "ALL AREA" },
    // { time: "10:00", name: "開演",  stage: "MAIN STAGE" },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 🎟️ チケット
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  tickets: [
    {
      type:     "Sエリア",
      typeEn:   "S AREA",
      price:    "3,500",   // ← 金額を変えるだけ
      note:     "前方エリア・数量限定",
      popular:  true,
      features: ["ステージ前方優先エリア", "全ステージ入場可", "フードエリア入場可"],
      areaImg:  "images/AREA.jpg",  // エリア画像
      url:      "",   // ← 購入URLが決まったら入力
    },
    {
      type:     "一般エリア",
      typeEn:   "GENERAL",
      price:    "2,500",
      note:     "",
      popular:  false,
      features: ["全ステージ入場可", "フードエリア入場可"],
      areaImg:  "",
      url:      "",
    },
  ],
  ticketUrls: {
    officialForm: "https://t.pia.jp/",   // ← 公式フォームURL
    pia:          "https://t.pia.jp/",   // ← チケットぴあURL
  },
  ticketNotes: [
    "消費税込。",
    "入場チケットは1枚につき1名様のみ有効です。",
    "中学生以上はチケットが必要となります。",
    "小学生以下は入場無料ですが、チケットは必要になります。(保護者1名につきお子様2名まで）",
    "当日券は各500円アップします。",
    "購入・予約完了後の自己都合によるキャンセル、変更、および払い戻しは一切お受けできません。",
    "入場チケットの転売および譲渡は固く禁じます。",
    "会場内は全席自由（Sエリアは優先入場）となります",
    "雨天決行ですが、荒天（台風等）により主催者が中止と判断した場合の対応については、公式サイトおよびSNSにて告知いたします。",
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 🖼️ ギャラリー
   *   src に画像パスを入れるだけ
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  gallery: [
    // ↓ images/gallery/ フォルダに写真を入れて、ファイル名をここに書くだけ
    // 写真がない場合は色（color）と絵文字（emoji）で表示されます
    { src: "images/gallery/gallery1.jpg", alt: "ステージの様子",      emoji: "🎤", color: "linear-gradient(135deg,#0096c7,#023e8a)" },
    { src: "images/gallery/gallery2.jpg", alt: "エイサー演舞",         emoji: "🥁", color: "linear-gradient(135deg,#06d6a0,#0096c7)" },
    { src: "images/gallery/gallery3.png", alt: "琉球舞踊",             emoji: "🌺", color: "linear-gradient(135deg,#ffd166,#ff8e53)" },
    { src: "images/gallery/gallery4.png", alt: "フードエリア",         emoji: "🥢", color: "linear-gradient(135deg,#48cae4,#06d6a0)" },
    { src: "images/gallery/gallery5.png", alt: "お客様の様子",         emoji: "😊", color: "linear-gradient(135deg,#ff6b6b,#ffd166)" },
    { src: "images/gallery/gallery6.png", alt: "高崎もてなし広場の夜", emoji: "🌙", color: "linear-gradient(135deg,#03045e,#0077b6)" },
    { src: "images/gallery/gallery7.png", alt: "高崎もてなし広場の夜", emoji: "🌙", color: "linear-gradient(135deg,#03045e,#0077b6)" },
    // ↓ 写真を増やすときはこの行をコピーして追加
    // { src: "images/gallery/gallery7.jpg", alt: "写真の説明", emoji: "🌊", color: "linear-gradient(135deg,#0dc5d9,#023e8a)" },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 🎬 過去の動画（YouTube）
   *   id: YouTubeのURLの最後の部分
   *   例: https://youtu.be/XXXXXXXXXX → id: "XXXXXXXXXX"
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  youtubeVideos: [
    { id: "Iq_FB7NXKxE", title: "琉球の風プレイベント ダイジェスト", year: "第2回 2025" },
    { id: "53IFQtbZUFk", title: "第1回 琉球の風 ダイジェスト", year: "2024" },
    // ↓ 動画を追加するときはここに追加
    // { id: "XXXXXXXXXX", title: "タイトル", year: "第X回 20XX" },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 🍜 飲食・出店（決まり次第追加）
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  foodVendors: [
    // ↓ここに追加
    // {
    //   name:  "お店の名前",
    //   desc:  "本格沖縄そば",
    //   photo: "images/food/food1.jpg",  // ← 写真名だけ変える
    //   url:   "https://お店のHP",       // ← クリックでHP遷移
    //   tag:   "沖縄そば",
    //   emoji: "🍜",
    // },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 👕 グッズ（決まり次第追加）
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  goods: [
    // ↓ここに追加
    // {
    //   name:  "グッズ名",
    //   price: "2,000",
    //   photo: "images/goods/goods1.jpg",
    //   url:   "",
    //   tag:   "Tシャツ",
    //   emoji: "👕",
    // },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 🤝 スポンサー（決まり次第追加）
   *   tier: "GOLD" / "SILVER" / "BRONZE"
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  sponsors: [
    // ↓ここに追加
    // {
    //   name:  "企業名",
    //   tier:  "GOLD",
    //   logo:  "images/sponsors/sponsor1.jpg",  // ← ロゴ画像
    //   url:   "https://企業のHP",
    // },
  ],

};
