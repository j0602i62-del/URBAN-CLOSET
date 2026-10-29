/**
 * URBAN CLOSET - Master Data
 */

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "オーバーサイズTシャツ",
    nameEn: "Oversized Heavyweight T-Shirt",
    category: "TOPS",
    price: 6500,
    isNew: true,
    colors: [
      { name: "White", code: "#F5F5F7" },
      { name: "Black", code: "#111111" },
      { name: "Gray", code: "#9E9E9E" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "上質な超長綿を限界まで度詰めしたヘビーウェイト天竺を使用。\n一枚で着ても透けず、ドロップショルダーと計算された身幅によって自然なドレープを生み出します。\n都市生活における日々のワードローブとして、タフさと上品さを高次元で両立しました。",
    details: {
      material: "コットン 100% (High-density Organic Cotton)",
      origin: "MADE IN JAPAN",
      care: "洗濯機洗い可（ネット使用推奨）/ 塩素系漂白剤不可"
    },
    sizeGuide: [
      { size: "S", length: "69", width: "57", shoulder: "52", sleeve: "22" },
      { size: "M", length: "72", width: "60", shoulder: "55", sleeve: "23.5" },
      { size: "L", length: "75", width: "63", shoulder: "58", sleeve: "25" },
      { size: "XL", length: "78", width: "66", shoulder: "61", sleeve: "26.5" }
    ]
  },
  {
    id: 2,
    name: "ワイドテーパードパンツ",
    nameEn: "Wide Tapered Wool Slacks",
    category: "BOTTOMS",
    price: 12000,
    isNew: true,
    colors: [
      { name: "Black", code: "#111111" },
      { name: "Gray", code: "#6B7280" },
      { name: "White", code: "#F3F4F6" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "深いインタックを配し、腰回りにゆとりを持たせながら裾に向かって美しく絞り込んだシルエット。\n落ち感のある梳毛ウールライクなポリエステル素材を採用し、シワになりにくく撥水機能も付加。\nスニーカーにもレザーシューズにも調和するジェンダーレスな万能ボトムスです。",
    details: {
      material: "ポリエステル 70%, レーヨン 26%, ポリウレタン 4%",
      origin: "MADE IN JAPAN",
      care: "ドライクリーニング推奨 / 手洗い可"
    },
    sizeGuide: [
      { size: "S", length: "98", width: "74-80", shoulder: "34", sleeve: "18.5" },
      { size: "M", length: "101", width: "78-84", shoulder: "35", sleeve: "19.5" },
      { size: "L", length: "104", width: "82-88", shoulder: "36.5", sleeve: "20.5" },
      { size: "XL", length: "107", width: "86-92", shoulder: "38", sleeve: "21.5" }
    ]
  },
  {
    id: 3,
    name: "リネンシャツ",
    nameEn: "Minimal Relaxed Linen Shirt",
    category: "TOPS",
    price: 9800,
    isNew: false,
    colors: [
      { name: "White", code: "#FAFAFA" },
      { name: "Gray", code: "#BDBDBD" },
      { name: "Black", code: "#1C1C1E" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "清涼感あふれるフレンチリネンを柔らかく洗い込み、自然なシワ感と肌なじみの良さを追求。\nフロントの比翼仕立てや小ぶりなレギュラーカラーが、ラフになりすぎない大人のミニマリズムを演出。\n羽織りとしても、インナーとしても季節を問わず活躍します。",
    details: {
      material: "フレンチリネン 100%",
      origin: "MADE IN JAPAN",
      care: "手洗いまたは洗濯ネット使用 / 日陰干し"
    },
    sizeGuide: [
      { size: "S", length: "73", width: "58", shoulder: "50", sleeve: "59" },
      { size: "M", length: "76", width: "61", shoulder: "52", sleeve: "61" },
      { size: "L", length: "79", width: "64", shoulder: "54", sleeve: "63" },
      { size: "XL", length: "82", width: "67", shoulder: "56", sleeve: "65" }
    ]
  },
  {
    id: 4,
    name: "コーチジャケット",
    nameEn: "Matte Technical Coach Jacket",
    category: "OUTERWEAR",
    price: 18000,
    isNew: true,
    colors: [
      { name: "Black", code: "#0F0F10" },
      { name: "Gray", code: "#4B5563" },
      { name: "White", code: "#ECECEC" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "光沢を抑えたマットタフタ生地によるソリッドな佇まいのコーチジャケット。\n裾のスナップボタンとドローコードでシルエットの変化が楽しめます。\n防風性と適度な撥水性を備え、都市の急な天候変化にもスマートに対応します。",
    details: {
      material: "表地: リサイクルナイロン 100% / 裏地: ポリエステル 100%",
      origin: "MADE IN VIETNAM",
      care: "手洗い可 / アイロン低温当て布"
    },
    sizeGuide: [
      { size: "S", length: "70", width: "61", shoulder: "53", sleeve: "60" },
      { size: "M", length: "73", width: "64", shoulder: "55", sleeve: "62" },
      { size: "L", length: "76", width: "67", shoulder: "57", sleeve: "64" },
      { size: "XL", length: "79", width: "70", shoulder: "59", sleeve: "66" }
    ]
  },
  {
    id: 5,
    name: "クロップドフーディ",
    nameEn: "Cropped Structured Hoodie",
    category: "TOPS",
    price: 11000,
    isNew: false,
    colors: [
      { name: "Gray", code: "#78716C" },
      { name: "Black", code: "#18181B" },
      { name: "White", code: "#F4F4F5" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "立体的な立ち上がりのフードと短めの着丈が特徴的なモードなスウェット。\nワイドパンツやハイウエストボトムスと抜群の相性を誇り、スタイルアップ効果を生み出します。\n裏毛には肌触りの良い起毛を施し、暖かく快適な着心地を提供します。",
    details: {
      material: "コットン 85%, ポリエステル 15%",
      origin: "MADE IN JAPAN",
      care: "洗濯機弱水流洗い / タンブラー乾燥不可"
    },
    sizeGuide: [
      { size: "S", length: "58", width: "59", shoulder: "56", sleeve: "54" },
      { size: "M", length: "61", width: "62", shoulder: "58", sleeve: "56" },
      { size: "L", length: "64", width: "65", shoulder: "60", sleeve: "58" },
      { size: "XL", length: "67", width: "68", shoulder: "62", sleeve: "60" }
    ]
  },
  {
    id: 6,
    name: "カーゴパンツ",
    nameEn: "Minimal Utility Cargo Trousers",
    category: "BOTTOMS",
    price: 14500,
    isNew: true,
    colors: [
      { name: "Black", code: "#171717" },
      { name: "Gray", code: "#52525B" },
      { name: "White", code: "#E4E4E7" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "ミリタリーの無骨さを削ぎ落とし、マチを極力薄く仕上げたフラットポケットカーゴ。\n裾の内側にアジャスターコードを内蔵し、ストレートとジョガーの2WAYシルエットを実現。\n適度なハリ感とストレッチ性があり、都会的なアクティブシーンを支えます。",
    details: {
      material: "コットン 65%, ナイロン 32%, ポリウレタン 3%",
      origin: "MADE IN JAPAN",
      care: "洗濯機ネット洗い / 中温アイロン"
    },
    sizeGuide: [
      { size: "S", length: "99", width: "72-78", shoulder: "33", sleeve: "21" },
      { size: "M", length: "102", width: "76-82", shoulder: "34", sleeve: "22" },
      { size: "L", length: "105", width: "80-86", shoulder: "35.5", sleeve: "23" },
      { size: "XL", length: "108", width: "84-90", shoulder: "37", sleeve: "24" }
    ]
  },
  {
    id: 7,
    name: "ドローストリングバッグ",
    nameEn: "Drawstring Leather Shoulder Bag",
    category: "ACCESSORIES",
    price: 5500,
    isNew: false,
    colors: [
      { name: "Black", code: "#09090B" },
      { name: "White", code: "#FAFAFA" },
      { name: "Gray", code: "#71717A" }
    ],
    sizes: ["ONE SIZE"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "手触りの滑らかなヴィーガンレザーを使用した、巾着型のミニマルショルダー。\n長財布やスマートフォン、小物がちょうど収まる絶妙なサイズ感。\nコードの結び目位置を変えることで、肩掛け・斜め掛け・手持ちの調整が自在です。",
    details: {
      material: "エコレザー（ポリウレタン 100%）",
      origin: "MADE IN KOREA",
      care: "乾いた柔らかい布で拭き取り / 水濡れ注意"
    },
    sizeGuide: [
      { size: "FREE", length: "縦 24cm", width: "横 20cm", shoulder: "マチ 8cm", sleeve: "ストラップ最大 120cm" }
    ]
  },
  {
    id: 8,
    name: "ステンカラーコート",
    nameEn: "Bonded Stand Collar Coat",
    category: "OUTERWEAR",
    price: 28000,
    isNew: true,
    colors: [
      { name: "Black", code: "#171717" },
      { name: "Gray", code: "#525252" },
      { name: "White", code: "#F5F5F4" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ce7526edb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "生地の張り感を生かした構築的なAラインシルエットのステンカラーコート。\nチンストラップを留めることでスタンドカラーとしても着用できる2WAY仕様。\nボンディング加工による上品な陰影が、都市の街並みの中で凛とした存在感を放ちます。",
    details: {
      material: "表地: コットン 60%, ポリエステル 40% / ボンディングフィルム加工",
      origin: "MADE IN JAPAN",
      care: "ドライクリーニング推奨"
    },
    sizeGuide: [
      { size: "S", length: "106", width: "62", shoulder: "52", sleeve: "60" },
      { size: "M", length: "110", width: "65", shoulder: "54", sleeve: "62" },
      { size: "L", length: "114", width: "68", shoulder: "56", sleeve: "64" },
      { size: "XL", length: "118", width: "71", shoulder: "58", sleeve: "66" }
    ]
  },
  {
    id: 9,
    name: "リブニットベスト",
    nameEn: "Architectural Rib Knit Vest",
    category: "TOPS",
    price: 8800,
    isNew: false,
    colors: [
      { name: "Gray", code: "#64748B" },
      { name: "Black", code: "#1E293B" },
      { name: "White", code: "#F8FAFC" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "太番手の編み地が美しい陰影を描く、幾何学的なリブ編みのニットベスト。\n深めに設計されたサイドスリットとアームホールにより、シャツやロングTとのレイヤードが映えます。\nウール混でありながらチクチク感を抑えた滑らかなタッチです。",
    details: {
      material: "ファインメリノウール 50%, アクリル 50%",
      origin: "MADE IN JAPAN",
      care: "ドライクリーニング推奨 / 平干し"
    },
    sizeGuide: [
      { size: "S", length: "64", width: "54", shoulder: "44", sleeve: "-" },
      { size: "M", length: "67", width: "57", shoulder: "46", sleeve: "-" },
      { size: "L", length: "70", width: "60", shoulder: "48", sleeve: "-" },
      { size: "XL", length: "73", width: "63", shoulder: "50", sleeve: "-" }
    ]
  },
  {
    id: 10,
    name: "ナイロンショーツ",
    nameEn: "Quick-Dry Easy Nylon Shorts",
    category: "BOTTOMS",
    price: 7200,
    isNew: false,
    colors: [
      { name: "Black", code: "#18181B" },
      { name: "Gray", code: "#71717A" },
      { name: "White", code: "#F4F4F5" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "撥水・速乾機能を持つタスランナイロンを採用した、アクティブシーン対応のショートパンツ。\nウエストはゴム＆スピンドル仕様でストレスフリーな履き心地。\n膝上の絶妙なレングスとワイドな裾幅が、都会的な軽快さと抜け感を演出します。",
    details: {
      material: "ナイロン 100% (撥水加工)",
      origin: "MADE IN CHINA",
      care: "洗濯機洗い可（ネット使用）"
    },
    sizeGuide: [
      { size: "S", length: "44", width: "70-78", shoulder: "32", sleeve: "30" },
      { size: "M", length: "46", width: "74-82", shoulder: "33", sleeve: "31" },
      { size: "L", length: "48", width: "78-86", shoulder: "34", sleeve: "32" },
      { size: "XL", length: "50", width: "82-90", shoulder: "35", sleeve: "33" }
    ]
  },
  {
    id: 11,
    name: "ロゴキャップ",
    nameEn: "Embroidered Minimalist Cap",
    category: "ACCESSORIES",
    price: 4800,
    isNew: false,
    colors: [
      { name: "Black", code: "#09090B" },
      { name: "Gray", code: "#A1A1AA" },
      { name: "White", code: "#FFFFFF" }
    ],
    sizes: ["ONE SIZE"],
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "フロントに極小のブランドロゴを同色刺繍で施した、ミニマルを極めた6パネルキャップ。\n浅すぎず深すぎない日本人の頭部にフィットするクラウン設計。\nバックストラップには高級感のあるメタルバックルを採用しています。",
    details: {
      material: "コットン 100% (ウォッシュドツイル)",
      origin: "MADE IN JAPAN",
      care: "手洗い推奨 / 絞り不可"
    },
    sizeGuide: [
      { size: "FREE", length: "頭周り 55-61cm (調整可)", width: "つば長 7.2cm", shoulder: "高さ 11.5cm", sleeve: "-" }
    ]
  },
  {
    id: 12,
    name: "レイヤードロンT",
    nameEn: "Double Face Long Sleeve Tee",
    category: "TOPS",
    price: 7800,
    isNew: true,
    colors: [
      { name: "White", code: "#F8FAFC" },
      { name: "Black", code: "#0F172A" },
      { name: "Gray", code: "#94A3B8" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "裾と袖口からわずかに覗くフェイクレイヤード仕様が、一枚着で洗練された陰影を演出。\n表地にはシルケット加工を施したクリアな天竺、裏地には吸湿性の高い柔らかな糸を使用。\n長時間の着用でも型崩れせず、美しい落ち感をキープします。",
    details: {
      material: "コットン 100% (Silket finish)",
      origin: "MADE IN JAPAN",
      care: "洗濯機洗い可（ネット使用）"
    },
    sizeGuide: [
      { size: "S", length: "71", width: "58", shoulder: "53", sleeve: "60" },
      { size: "M", length: "74", width: "61", shoulder: "55", sleeve: "61.5" },
      { size: "L", length: "77", width: "64", shoulder: "57", sleeve: "63" },
      { size: "XL", length: "80", width: "67", shoulder: "59", sleeve: "64.5" }
    ]
  }
];

const LOOKBOOK_ITEMS = [
  {
    id: 1,
    title: "LOOK 01",
    subtitle: "Silent Architecture",
    description: "ステンカラーコート × ワイドテーパードパンツ",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    ratio: "tall"
  },
  {
    id: 2,
    title: "LOOK 02",
    subtitle: "Monochrome Horizon",
    description: "オーバーサイズTシャツ × カーゴパンツ",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=80",
    ratio: "normal"
  },
  {
    id: 3,
    title: "LOOK 03",
    subtitle: "Subtle Shadow",
    description: "リネンシャツ × ナイロンショーツ",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    ratio: "wide"
  },
  {
    id: 4,
    title: "LOOK 04",
    subtitle: "Urban Silhouette",
    description: "コーチジャケット × リブニットベスト",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    ratio: "tall"
  },
  {
    id: 5,
    title: "LOOK 05",
    subtitle: "Fluid Movement",
    description: "クロップドフーディ × ワイドテーパードパンツ",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    ratio: "normal"
  },
  {
    id: 6,
    title: "LOOK 06",
    subtitle: "Pure Geometry",
    description: "レイヤードロンT × ドローストリングバッグ",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    ratio: "tall"
  },
  {
    id: 7,
    title: "LOOK 07",
    subtitle: "Concrete Garden",
    description: "ステンカラーコート × ロゴキャップ",
    image: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=1200&q=80",
    ratio: "normal"
  },
  {
    id: 8,
    title: "LOOK 08",
    subtitle: "Daybreak City",
    description: "リブニットベスト × リネンシャツ",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80",
    ratio: "wide"
  },
  {
    id: 9,
    title: "LOOK 09",
    subtitle: "Essential Form",
    description: "オーバーサイズTシャツ × ドローストリングバッグ",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
    ratio: "tall"
  },
  {
    id: 10,
    title: "LOOK 10",
    subtitle: "Modern Wardrobe",
    description: "コーチジャケット × カーゴパンツ",
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1200&q=80",
    ratio: "normal"
  }
];

const FAQS_DATA = [
  {
    q: "注文から発送までどのくらいかかりますか？",
    a: "通常、ご注文確定日（ご決済確認後）より1〜3営業日以内に発送いたします。予約商品・先行受注品につきましては、各商品ページに記載のお届け時期をご確認ください。"
  },
  {
    q: "サイズが合わない場合の返品・交換は可能ですか？",
    a: "商品到着後7日以内であれば、室内での試着のみ・タグ付き・未使用品に限りサイズ交換または返品を承ります。お問い合わせフォームより注文番号とご希望の対応をご連絡ください。"
  },
  {
    q: "ギフトラッピングは可能ですか？",
    a: "オリジナルのミニマルなギフトバッグおよびメッセージカードをご用意しております（無料）。カート内、またはご注文時の備考欄にて「ギフト希望」とご指定いただけます。"
  },
  {
    q: "完売商品の再入荷通知を受け取ることはできますか？",
    a: "完売商品ページの「RESTOCK NOTIFICATION」ボタンよりメールアドレスをご登録いただくことで、再入荷が確定次第、最優先で通知メールをお送りいたします。"
  },
  {
    q: "海外への配送は行っていますか？",
    a: "はい、EMS（国際スピード郵便）およびDHLを利用した海外発送に対応しております。地域ごとの配送料および関税についての詳細は、カスタマーサポートまで直接お問い合わせください。"
  }
];
