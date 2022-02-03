Vue.createApp({
    data() {
        return {
            works,
            showModal: false,
            modalActive: 0,
            active: 0,
            number: 0,
            items: [
                'ALL',
                'Webサイト',
                'バナー/ポップ',
                'イラスト',
            ],
            modalItems: [
                '基本情報',
                '制作意図',
            ],
            postItem: Array,
            sliderIndex: 0,
            sliderImage: undefined,
            sliderLength: 1,

            width: window.innerWidth,
            height: window.innerHeight,
        }
    },
    methods: {
        // カテゴリのタブを操作するメソッド
        activate(index) {
            this.active = index;
        },

        // 作品画像をホバー時に画像を切り替えるメソッド
        hoverAction(work) {
            if (work.displayImage < work.image.length - 1) {
                work.displayImage = work.displayImage + 1;
            }
            this.slide = setInterval(() => {
                if (work.displayImage < work.image.length - 1) {
                    work.displayImage = work.displayImage + 1;
                } else {
                    work.displayImage = 0;
                }
            }, 1500);
        },

        // 作品画像からカーソルが離れた時に画像の切り替えを停止するメソッド
        leaveAction(work) {
            work.displayImage = 0;
            clearInterval(this.slide);
        },

        // モーダルを表示させるメソッド
        openModal(work) {
            this.showModal = true;
            this.postItem = work;
            this.sliderIndex = 0;
            this.sliderImage = work.image[0];
            this.sliderLength = work.image.length;
        },

        // モーダルを非表示にするメソッド
        closeModal() {
            this.showModal = false;
        },

        // モーダル内の画像を次の画像に変更するメソッド
        next(item) {
            if (this.sliderIndex >= this.postItem.image.length - 1) {
                this.sliderIndex = 0;
                this.sliderImage = item.image[this.sliderIndex];
            } else {
                this.sliderIndex++;
                this.sliderImage = item.image[this.sliderIndex];
            }
        },

        // モーダル内の画像を1つ前の画像に変更するメソッド
        prev(item) {
            if (this.sliderIndex == 0) {
                this.sliderIndex = this.postItem.image.length - 1;
                this.sliderImage = item.image[this.sliderIndex];
            } else {
                this.sliderIndex--;
                this.sliderImage = item.image[this.sliderIndex];
            }
        },

        modalActivate(index) {
            this.modalActive = index;
        },

        // ウィンドウサイズをwidth heightに格納するメソッド群
        handleResize: function () {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        }

    },

    computed: {
        // タブの操作に連動してタブに対応する作品のみを表示させる関数
        tabFilter() {
            return this.works.filter(work => this.active === 0 || work.category.number === this.active)
        }
    },

    mounted: function () {
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy: function () {
        window.removeEventListener('resize', this.handleResize)
    }

}).mount('#app')