const skills = [
    {
        id: 1,
        name: 'HTML5/CSS3',
        level: '★★★★',
        image: './images/html5-css3.svg',
        text: `レスポンシブデザインの実装や、\nSassを用いたコーディングが可能。\nBootstrap、Bulmaの使用経験あり。`
    },
    {
        id: 2,
        name: 'JavaScript',
        level: '★★★★',
        image: './images/javascript-plain.svg',
        text: `アニメーションの実装や、\n大学課題のゲーム制作に使用。\nVue.js、jQueryの使用経験あり。`
    },
    {
        id: 3,
        name: 'PHP',
        level: '★★',
        image: './images/php-plain.svg',
        text: `データベースを用いた\nCUIアプリケーションの制作、\nXAMPPでのWebページ制作に使用。`
    },
    {
        id: 4,
        name: 'Ruby',
        level: '★★',
        image: './images/ruby-plain.svg',
        text: `Railsチュートリアルで学習し、\nWebアプリケーション開発に使用。`
    },
    {
        id: 5,
        name: 'Python',
        level: '★',
        image: './images/python-plain.svg',
        text: `Anacondaや\nGoogle Colaboratoryで、\nデータ分析、画像処理に使用。`
    },
    {
        id: 6,
        name: 'Photoshop',
        level: '★★★★',
        image: './images/photoshop-line.svg',
        text: `サイトのキービジュアルや\nバナー、デザインカンプの\n制作に使用。`
    },
    {
        id: 7,
        name: 'Illustrator',
        level: '★★★',
        image: './images/illustrator-line.svg',
        text: `イラストやファビコン、\nチラシの制作に使用。`
    },
    {
        id: 8,
        name: 'XD',
        level: '★★★★',
        image: './images/xd-line.svg',
        text: `ワイヤーフレームや、\nデザインカンプの作成に使用。`
    },
]

// 画面サイズをwidth heightに格納する
Vue.createApp({
    data() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,

            skills,
        }
    },
    methods: {
        // ウィンドウサイズをwidth heightに格納するメソッド群
        handleResize: function () {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        }
    },
    mounted: function () {
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy: function () {
        window.removeEventListener('resize', this.handleResize)
    }

}).mount('#app')
