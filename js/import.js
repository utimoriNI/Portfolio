const category = [
    { number: 1, name: 'Webサイト' },
    { number: 2, name: 'バナー/ポップ' },
    { number: 3, name: 'イラスト' },
];

const works = [
    {
        id: 1,
        category: category[0],
        image: ['./images/works/exterior_mockuup1.jpg',
            './images/works/exterior_mockuup2.jpg',
            './images/works/exterior_01.jpg',
            './images/works/exterior_02.jpg',
            './images/works/exterior_03.jpg'],
        displayImage: 0,
        title: 'ECサイト エクステリアガーデン',
        subtitle: 'Shopifyで制作した長期インターン先の自社ECサイトです。',
        tools: ['Photoshop', 'Illustrator', 'Shopify', 'Liquid'],
        time: '約60時間',
        scopes: ['テンプレートの選定', '各ページのレイアウト', 'キービジュアル制作', 'ファビコン制作',],
        url: 'https://eppp00wx070dgzh4-60168241336.shopifypreview.com',
        exp: `長期インターン先の自社ECサイトをShopifyを使って構築しました。
このECサイトは、家の庭に置くようなベンチやテーブルといった商品を販売するECサイトです。
エクステリア商品を取り扱うECサイトなので、青空の下の庭のような解放感を感じられる青と緑の組み合わせをメインカラーに使用しました。
このサイトで取り扱う商品の購買層である30代～40代向けに、商品画像を多く配置することでパッと見て商品がわかりやすいデザインにしました。

レイアウトはShopifyのテンプレートを利用して制作し、サイト内で使用している画像はメーカーから提供されている画像から選定・加工を行って作成しました。`
    },

    {
        id: 2,
        category: category[0],
        image: ['./images/works/thermal_mockuup.jpg',
            './images/works/thermal_01.jpg',
            './images/works/thermal_02.jpg',
            './images/works/thermal_03.jpg',
            './images/works/thermal_04.jpg',
            './images/works/thermal_05.jpg',
            './images/works/thermal_06.jpg'],
        displayImage: 0,
        title: `サーマルAIカメラ 販売用LP\nデザインカンプ`,
        subtitle: 'サーマルカメラ販売用LPのデザインカンプです。',
        tools: ['Photoshop', 'STUDIO',],
        time: '約25時間',
        scopes: ['ワイヤーフレーム作成', 'デザインカンプ作成',],
        url: false,
        exp: `Photoshopを使って作成したLPのデザインカンプです。
長期インターン先で、法人向けにサーマルカメラの販売/設置を行う事業を始める時に制作しました。
このLPはその事業の中で、資料請求や見積もりなどの問い合わせを受けることを目的としたLPです。

サーマルカメラがまだ普及していない時に制作を始めたので、サーマルカメラがどのような物かを知ってもらうために機能や設置方法の説明を詳しく説明するLPにしました。
また、このサーマルカメラ以外にもハンディタイプやドームタイプといった違う形状の商品も扱っており、シーンに応じた商品を提供できることを強みとしていました。
よって、別の商品への導線をページ上部に配置することでこの商品がニーズに一致しなかった場合にも、
他の商品への遷移を促し回遊率を高めることを目指しました。`
    },
    {
        id: 3,
        category: category[0],
        image: ['./images/works/thermal_01.jpg',
            './images/works/thermal_02.jpg',
            './images/works/thermal_03.jpg',
            './images/works/thermal_04.jpg',
            './images/works/thermal_05.jpg'],
        displayImage: 0,
        title: 'ポートフォリオサイト',
        subtitle: '私のこれまでの制作物を紹介するポートフォリオサイトです。',
        tools: ['HTML5/CSS3', 'JavaScript', 'Photoshop', 'Illustrator', 'XD',],
        time: '約50時間',
        scopes: ['ワイヤーフレーム作成', 'デザインカンプ作成', 'ファビコン制作', 'コーディング', '公開作業',],
        url: 'https://eppp00wx070dgzh4-60168241336.shopifypreview.com',
        exp: `私がこれまで制作してきた作品をまとめたポートフォリオサイトです。
就職活動の中で企業の方に見てもらうことを目的としたサイトなので、
誰のポートフォリオかを伝えるProfileページと、私の作品が一覧できるWorksページを作成しました。
高校のころからプログラミングを勉強しており、長期インターン先ではWebデザインの業務を担当しているので、
プログラミング/マークアップの知識や経験を活かしたいと思い、自分でコーディングをしてこのサイトを制作しました。

このサイトはCSSのフレームワークにBulmaを、JavaScriptのフレームワークにVue.jsを採用しています。
Bulmaは、主にグリッドレイアウトの実装に使用して、このサイトをレスポンシブ対応させています。
Vue.jsは、主にWorksページで使用しており、動的ページの実装やアニメーションの実装に使用しています。
作品の詳細に対して時間をかけて見てほしいので、シンプルでコンテンツが見やすいデザインを目指しました。`
    },
    {
        id: 4,
        category: category[1],
        image: ['./images/works/exterior_kv_w.jpg',
            './images/works/exterior_kv_m.jpg',],
        displayImage: 0,
        title: 'エクステリアガーデン\nキービジュアル',
        subtitle: 'エクステリアガーデンのキービジュアルです。',
        tools: ['Photoshop',],
        time: '約15時間',
        scopes: ['デザイン制作',],
        url: 'https://eppp00wx070dgzh4-60168241336.shopifypreview.com',
        exp: `ECサイトエクステリアガーデンのキービジュアルです。
PC用のページとモバイル端末用のページで表示する画像を変えることができたので、PC用の横長の画像とモバイル端末用の縦長の画像を作成しました。
キービジュアルはユーザーが最初に目にする画像なので、エクステリアを扱っていることが一目で分かるような画像を目指しました。
サイトの雰囲気を伝えるために、商品のイメージ写真を使用してサイトのメインカラーの青と緑で装飾をしています。

イメージ画像を背景全体に使用して解放感を演出したかったのですが推奨サイズに合う画像が無かったため、
図形を使ったフレーミングとドロップシャドウで奥行きを表現しました。
実際のサイトだと画像の上にボタンが重なるので、PC用の画像だと左下に白いスペースを取り、
モバイル用の画像では背景の画像をぼかすことでボタンの視認性を高めています。`
    },
    {
        id: 5,
        category: category[1],
        image: ['./images/works/wooddeck_thum_01.jpg',
            './images/works/wooddeck_thum_02.jpg',
            './images/works/wooddeck_thum_03.jpg',
            './images/works/wooddeck_thum_04.jpg'],
        displayImage: 0,
        title: '楽天市場用\nウッドデッキ商品サムネイル',
        subtitle: '楽天市場で使用するウッドデッキの商品サムネイルです。',
        tools: ['Photoshop',],
        time: '約12時間',
        scopes: ['デザイン制作',],
        url: 'https://search.rakuten.co.jp/search/mall/%E3%82%A6%E3%83%83%E3%83%89%E3%83%87%E3%83%83%E3%82%AD/?sid=302357',
        exp: `楽天市場で販売している商品のサムネイル画像です。
17種類ものセットを取り扱っているので、全てのデザインを統一し同じ店舗の商品であるということを分かるようにすることで、セットのバリエーションの多さをアピールしています。
レイアウトはウッドデッキを販売しているということと、商品の内容が一目で分かるように写真を配置しました。
また、商品の形状のせいで角ばった印象が強くなっていたので、
購買層である主婦に向けに、画像に輪郭をつけたり円形のオブジェクトを配置することで、親しみやすいサムネイルにしました。`
    },
    {
        id: 6,
        category: category[1],
        image: ['./images/works/wooddeck_pc.jpg',
            './images/works/wooddeck_sp.jpg',],
        displayImage: 0,
        title: '楽天市場用\nウッドデッキ特集バナー',
        subtitle: '楽天市場で使用するウッドデッキ特集用バナーです。',
        tools: ['Photoshop',],
        time: '約12時間',
        scopes: ['デザイン制作',],
        url: 'https://item.rakuten.co.jp/officemarche/10006026/',
        exp: `楽天市場で使用している、ウッドデッキのパーツとセットが一覧できる特集ページへ遷移するバナーです。
特集用の一覧ページがあることと、セットの種類の豊富さを伝えたかったので、
PC用の縦長の画像ではウッドデッキ特集という文字を右揃えにして、隣にセットに関するテキストを配置しています。
モバイル版の横長の画像ではセットに関するテキストを大きく配置できなかったので、特集のタイトルが目立つレイアウトにしています。`
    },
    {
        id: 7,
        category: category[1],
        image: ['./images/works/wooddeck_point_01.jpg',
            './images/works/wooddeck_point_02.jpg',],
        displayImage: 0,
        title: 'ウッドデッキ 商品紹介ポップ',
        subtitle: 'ウッドデッキの商品ページに載せる紹介用ポップです。',
        tools: ['Photoshop',],
        time: '約10時間',
        scopes: ['デザイン制作',],
        url: 'https://item.rakuten.co.jp/officemarche/10006026/',
        exp: `楽天市場で使用している、ウッドデッキの紹介をするためのポップです。
ウッドデッキの商品ページはモバイル端末からのアクセスが多かったので、
モバイル端末で見やすいように縦長のレイアウトにし、3つのポイントを縦に並べました。
ウッドデッキのポップなので茶色をメインカラーに使用したところ、
暗い印象になってしまったので、テキストを白にして色のついたアイコンをテキストに添えました。`
    },
    {
        id: 8,
        category: category[1],
        image: ['./images/works/wooddeck_set_01.jpg',
            './images/works/wooddeck_set_02.jpg',
            './images/works/wooddeck_set_03.jpg',
            './images/works/wooddeck_set_04.jpg'],
        displayImage: 0,
        title: 'ウッドデッキセット\n内容紹介ポップ',
        subtitle: 'ウッドデッキのセット商品ページに載せる、セット内容を説明するポップです。',
        tools: ['Photoshop',],
        time: '約14時間',
        scopes: ['デザイン制作', 'イラスト制作'],
        url: 'https://item.rakuten.co.jp/officemarche/10006026/',
        exp: `楽天市場で使用している、ウッドデッキのセット内容を紹介するためのポップです。
セット内容によっては情報量が多くなってしまうので、テキストには丸ゴシック体を使用して、親しみやすいデザインにしました。
また、セット内容は見間違えが発生してしまうとトラブルが発生してしまうので、
テキストと画像の両方を使って内容を説明し、画像に添えた数字は読みやすいようにフォントサイズは大きく、ウェイトは太くしました。`
    },
    {
        id: 9,
        category: category[1],
        image: ['./images/works/aluminum.jpg'],
        displayImage: 0,
        title: 'アルミガーデンチェア\n紹介用ポップ',
        subtitle: 'エクステリアガーデンで使用するアルミガーデンチェアの紹介用ポップです。',
        tools: ['Photoshop', 'Illustrator',],
        time: '約10時間',
        scopes: ['デザイン制作',],
        url: 'https://exteriorgarden.myshopify.com/products/ke-al-p40c?_pos=1&_sid=205c9e90e&_ss=r',
        exp: `エクステリアガーデンで販売するアルミガーデンチェアの紹介用ポップです。
ショップのデザインに合わせて緑をメインカラーに使用し、フラットなデザインにしました。
商品ページ内に載せる画像なので、商品画像はこの画像には入れずにポイントだけを伝える役割を持たせました。
3つのポイントがあることが一目で分かるように、タイトルのテキストのジャンプ率を調節し3という数字だけにドロップシャドウをかけています。`
    },
    {
        id: 10,
        category: category[1],
        image: ['./images/works/glass_kv.jpg',],
        displayImage: 0,
        title: '楽天市場用\nガラスコレクション特集\nキービジュアル',
        subtitle: '楽天市場で使用するガラスコレクション特集用キービジュアルです。',
        tools: ['Photoshop',],
        time: '約8時間',
        scopes: ['デザイン制作',],
        url: 'https://item.rakuten.co.jp/officemarche/10004974/',
        exp: `楽天市場で販売しているガラスコレクションケースの、商品ページで使用しているキービジュアルです。
取り扱っているガラスコレクションケースを並べることで、その商品ページ以外の商品も見てもらえるようなデザインにしました。
ガラスコレクションケースは収納のための物なので、商品画像やテキストを整列させることを意識して、
背景には幾何学模様を採用して画面全体の情報量を上げました。`
    },
    {
        id: 12,
        category: category[1],
        image: ['./images/works/table.jpg',],
        displayImage: 0,
        title: 'カフェラウンジテーブル\nキービジュアル',
        subtitle: '楽天市場で使用していたカフェラウンジテーブルのキービジュアルです。',
        tools: ['Photoshop',],
        time: '約6時間',
        scopes: ['デザイン制作',],
        url: false,
        exp: `楽天市場で使用していたキービジュアルです。
この商品は、飲食店やオフィス向けに販売していた商品で、リフレッシュスペースを簡単にセッティングできることをセールスポイントにしていました。
デザインもセールスポイントに合わせて、明るい雰囲気にするために背景に黄色のストライプを敷きました。
また、カラーバリエーションがあることを伝えることで、店内やオフィス内の雰囲気に合わせやすいこともアピールすることを目指しました。`
    },
    {
        id: 13,
        category: category[2],
        image: ['./images/works/parts_01.jpg',
            './images/works/parts_02.jpg',
            './images/works/parts_03.jpg',
            './images/works/parts_04.jpg',
            './images/works/parts_05.jpg',
            './images/works/parts_06.jpg',],
        displayImage: 0,
        title: 'ウッドデッキ イメージイラスト',
        subtitle: 'ウッドデッキのレイアウト例を紹介するためのイメージイラストです。',
        tools: ['CLIP STUDIO PAINT',],
        time: '約10時間',
        scopes: ['イラスト制作',],
        url: 'https://item.rakuten.co.jp/officemarche/10006026/',
        exp: `ウッドデッキのセットのレイアウト例を見せるためのイラストです。
全てのセットのイラストを描くと時間がかかってしまうため、4種類のパーツのイラストを作成し
それらを並べることで全てのセットのレイアウト例を作れるようにしました。
高校で製図を学んでいたので、その知識を活かしてイラストは等角図を使用して作成しました。
1~4枚目の画像がパーツの画像で、5枚目と6枚目がそれらを並べて作成したレイアウト例のイラストです。`
    },
];

window.onload = () => {
    const loader = document.getElementById('overlay');
    loader.classList.add('loaded');
}