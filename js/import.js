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
        url: 'https://05vsooq6g7bamlug-60168241336.shopifypreview.com',
        exp: `長期インターン先の自社ECサイトをShopifyを使って構築しました。
このECサイトは、家の庭に置くようなベンチやテーブルといった商品を販売するECサイトです。
エクステリア商品を取り扱うECサイトなので、青空の下の庭のような解放感を感じられる青と緑の組み合わせをメインカラーに使用しました。
このサイトで取り扱う商品の購買層である30代～40代向けに、商品画像を多く配置することでパッと見て商品がわかりやすいデザインにしました。

レイアウトはShopifyのテンプレートを利用して制作し、サイト内で使用している画像はメーカーから提供されている画像から選定・加工を行って制作しました。`
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
        scopes: ['ワイヤーフレーム制作', 'デザインカンプ制作',],
        url: false,
        exp: `Photoshopを使って制作したLPのデザインカンプです。
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
        image: ['./images/works/portfolio_mockuup1.jpg',
            './images/works/portfolio_mockuup2.jpg',
            './images/works/portfolio_01.jpg',
            './images/works/portfolio_02.jpg',
            './images/works/portfolio_03.jpg',
            './images/works/portfolio_04.jpg',
            './images/works/portfolio_05.jpg'],
        displayImage: 0,
        title: 'ポートフォリオサイト',
        subtitle: '私のこれまでの制作物を紹介するポートフォリオサイトです。',
        tools: ['HTML5/CSS3', 'JavaScript', 'Photoshop', 'Illustrator', 'XD',],
        time: '約55時間',
        scopes: ['ワイヤーフレーム制作', 'デザインカンプ制作', 'ファビコン制作', 'コーディング', '公開作業',],
        url: 'https://eppp00wx070dgzh4-60168241336.shopifypreview.com',
        exp: `私がこれまで制作してきた作品をまとめたポートフォリオサイトです。
就職活動の中で企業の方に見てもらうことを目的としたサイトなので、
誰のポートフォリオかを伝えるProfileページと、私の作品が一覧できるWorksページを制作しました。

高校のころからプログラミングを勉強しており、長期インターン先ではWebデザインの業務を担当しているので、
プログラミング/マークアップの知識や経験を活かしたいと思い、自分でコーディングをしてこのサイトを制作しました。

このサイトはCSSのフレームワークにBulmaを、JavaScriptのフレームワークにVue.jsを採用しています。
Bulmaは、主にグリッドレイアウトの実装に使用して、このサイトをレスポンシブ対応させています。
Vue.jsは、主にWorksページで使用しており、動的ページの実装やアニメーションの実装に使用しています。

作品の詳細に対して時間をかけて見てほしいので、シンプルでコンテンツが見やすいデザインを目指しました。`
    },
    {
        id: 4,
        category: category[0],
        image: ['./images/works/ashiato_mockuup1.jpg',
            './images/works/ashiato_mockuup2.jpg',
            './images/works/ashiato_01.jpg',
            './images/works/ashiato_02.jpg',
            './images/works/ashiato_03.jpg',
            './images/works/ashiato_04.jpg',
            './images/works/ashiato_05.jpg',],
        displayImage: 0,
        title: 'Webアプリ あしあと デザインカンプ',
        subtitle: '私が考案したWebアプリ「あしあと」のデザインカンプです。',
        tools: ['Photoshop', 'Illustrator', 'XD',],
        time: '約25時間',
        scopes: ['ワイヤーフレーム制作', 'デザインカンプ制作', 'ロゴ制作'],
        url: 'https://xd.adobe.com/view/b213b744-c7fe-4574-aea3-2fe7dca15473-e740/',
        exp: `このWebアプリは、私の趣味である読書やイラスト制作中に感じたことを記録するためのWebアプリで、
「自分の感情に愛情を」というコンセプトを基に考えました。
そのため、自分が学んだことを記録するのではなく、自分の感情にフォーカスして記録をします。
そして、記録した自分の感情を振り返ることで、自分の変化を可視化するWebアプリなので「あしあと」と名付けました。

Webアプリのデザインは、自分の気持ちと向き合うための落ち着ける場所をイメージして制作しました。
明朝体をメインに使ったり、明度が低く古風な色を使うことで和室のような静けさを感じさせるデザインにしました。`,
    },
    {
        id: 5,
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
PC用のページとモバイル端末用のページで表示する画像を変えることができたので、PC用の横長の画像とモバイル端末用の縦長の画像を制作しました。

キービジュアルはユーザーが最初に目にする画像なので、エクステリアを扱っていることが一目で分かるような画像を目指しました。
サイトの雰囲気を伝えるために、商品のイメージ写真を使用してサイトのメインカラーの青と緑で装飾をしています。

イメージ画像を背景全体に使用して解放感を演出したかったのですが推奨サイズに合う画像が無かったため、
図形を使ったフレーミングとドロップシャドウで奥行きを表現しました。

実際のサイトだと画像の上にボタンが重なるので、PC用の画像だと左下に白いスペースを取り、
モバイル用の画像では背景の画像をぼかすことでボタンの視認性を高めています。`
    },
    {
        id: 6,
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
このウッドデッキは他の販売店でも販売されており、その中で私たちはセットのバリエーションを強みにしていました。
私たちは17種類のセットを取り扱っているので、セットのバリエーションをアピールするために全ての商品のデザインを統一しました。

サムネイルのデザインは、ウッドデッキを販売しているということを伝えるために背景にイメージ画像を使用し、
商品の内容が一目で分かるように商品に含まれているパーツの画像と数量を配置しました。

また、商品の購買層が30~40台の主婦が多かったので親しみやすいサムネイルを目指しました。商品の形状のせいで角ばった印象が強くなっていたので、
画像を配置しただけだと商品の形状的に角ばった印象が強くなっていたため、画像に輪郭をつけて視認性を高めるとともに親しみやすい印象を目指しました。`
    },
    {
        id: 7,
        category: category[1],
        image: ['./images/works/wooddeck_pc.jpg',
            './images/works/wooddeck_sp.jpg',],
        displayImage: 0,
        title: '楽天市場用\nウッドデッキ特集バナー',
        subtitle: '楽天市場で使用するウッドデッキ特集用バナーです。',
        tools: ['Photoshop',],
        time: '約12時間',
        scopes: ['デザイン制作',],
        url: 'https://item.rakuten.co.jp/officemarche/10006028/',
        exp: `楽天市場で使用している、ウッドデッキのパーツとセットが一覧できる特集ページへ遷移するバナーです。
このバナーではウッドデッキの特集用の一覧ページがあることと、セットの種類の豊富さを伝えたいと思いました。

そのため、PC用の縦長の画像ではウッドデッキ特集という文字とセットに関するテキストを配置しています。
モバイル版の横長の画像ではセットに関するテキストを大きく配置できなかったので、特集のタイトルが目立つレイアウトにしています。`
    },
    {
        id: 8,
        category: category[1],
        image: ['./images/works/wooddeck_point_01.jpg',
            './images/works/wooddeck_point_02.jpg',],
        displayImage: 0,
        title: 'ウッドデッキ 商品紹介ポップ',
        subtitle: 'ウッドデッキの商品ページに載せる紹介用ポップです。',
        tools: ['Photoshop',],
        time: '約10時間',
        scopes: ['デザイン制作',],
        url: 'https://item.rakuten.co.jp/officemarche/10006028/',
        exp: `楽天市場で使用している、ウッドデッキの紹介をするためのポップです。
アクセス分析によって、ウッドデッキの商品ページはモバイル端末からのアクセスが多いことが分かっていました。

よって商品ページ内で使用する画像はモバイル端末で見やすいように縦長のレイアウトにし、3つのポイントを縦に並べました。
ウッドデッキのポップなので商品の色である茶色をメインカラーに使用して、サムネイル画像と同じように親しみやすい雰囲気を目指すために、色付きのアイコンを添えました。`
    },
    {
        id: 9,
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
        url: 'https://item.rakuten.co.jp/officemarche/10006028/',
        exp: `楽天市場で使用している、ウッドデッキのセット内容を紹介するためのポップです。
セットでは最大4種類のパーツで構成されており、内容によっては情報量が多くなってしまうのでテキストのみだと注目度が下がってしまうと考えました。

それによってセット内容が誤解されるとトラブルが発生してしまうためセット説明用の画像を制作しました。

この画像は伝わりやすさを重要視して、テキストだけでなく画像による説明も加えています。
画像に添えた数字はフォントサイズは大きくウェイトは太くして、テキストは丸ゴシックを使用して読みやすいテキストを目指しました。`
    },
    {
        id: 10,
        category: category[1],
        image: ['./images/works/aluminum.jpg'],
        displayImage: 0,
        title: 'アルミガーデンチェア\n紹介用ポップ',
        subtitle: 'エクステリアガーデンで使用するアルミガーデンチェアの紹介用ポップです。',
        tools: ['Photoshop', 'Illustrator',],
        time: '約10時間',
        scopes: ['デザイン制作',],
        url: 'https://exteriorgarden.myshopify.com/products/ke-al-p40c?_pos=1&_sid=df3ed10ed&_ss=r',
        exp: `エクステリアガーデンで販売するアルミガーデンチェアの紹介用ポップです。
このECサイトはモバイル端末からのアクセスが多くなることを予想したので、縦長のレイアウトで制作しました。
この画像はショップのデザインに合わせて緑をメインカラーに使用し、ECサイトはシンプルなデザインを目指していたのでサイトに合わせてフラットなデザインにしました。

商品ページ内に載せる画像なので、商品の画像はこの画像には入れずにポイントだけを伝える役割を持たせています。
3つのポイントがあることが一目で分かるように、タイトルのテキストのジャンプ率を調節し3という数字だけにドロップシャドウをかけてそこだけに立体感を持たせています。`
    },
    {
        id: 11,
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
ガラスコレクションケースは複数の種類を取り扱っており、それぞれサイズや機能が違います。
それらのガラスコレクションケースをキービジュアルに並べることで、その商品ページ以外の商品も見てもらえることを考えてデザインしています。

ガラスコレクションケースは収納のための物なので、この画像は商品画像やテキストを整列させてきれいな印象を目指しました。
そのため、色には清潔感を出すための青を選び、背景には幾何学模様を採用して画面全体の情報量を上げつつ規則的できれいな画像にしました。`
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

この画像のデザインもセールスポイントに合わせて、明るい雰囲気にするために背景に黄色のストライプを敷いたり丸ゴシックを使用してやわらかい雰囲気を目指しました。
また、カラーバリエーションがあることを伝えることで、店内やオフィス内の雰囲気に合わせやすいこともアピールしました。`
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
        url: 'https://item.rakuten.co.jp/officemarche/10006028/',
        exp: `ウッドデッキのセットのレイアウト例を見せるためのイラストです。
17種類のセットがあり、全てのセットのイラストを描くと時間がかかってしまうため4種類のパーツのイラストを制作して、
それらを並べることで全てのセットのレイアウト例を作れるようにしました。

私は高校で製図を学んでいたので、その知識を活かしてイラストは等角図を使用してこのイラストを制作しました。
1~4枚目の画像がパーツの画像で、5枚目と6枚目がそれらを並べて制作したレイアウト例のイラストです。`
    },
];

window.onload = () => {
    const loader = document.getElementById('overlay');
    loader.classList.add('loaded');
}