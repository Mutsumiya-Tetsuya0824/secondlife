window.addEventListener('load', function(){	deSVG('.svg', true) });

document.addEventListener('DOMContentLoaded', function() {

  // ======================================
  // nature セクションの初期化
  // ======================================
  const natureThumbs = new Swiper('.nature .thumbnail-slider', {
    slidesPerView: 3,
    spaceBetween: 8,
    loop: false,
    slideToClickedSlide: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    breakpoints: {
      768: {           // 768px以上の場合
        slidesPerView: 3
      }
    }
  });
  const natureMain = new Swiper('.nature .main-slider', {
    loop: true,
    spaceBetween: 8,
    navigation: {
      nextEl: '.nature .swiper-button-next',
      prevEl: '.nature .swiper-button-prev',
    },
    thumbs: {
      swiper: natureThumbs,
    },
  });

  // ======================================
  // solid セクションの初期化
  // ======================================
  const solidThumbs = new Swiper('.solid .thumbnail-slider', {
    slidesPerView: 4,
    spaceBetween: 8,
    loop: false,
    slideToClickedSlide: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    breakpoints: {
      768: {           // 768px以上の場合
        slidesPerView: 4
      }
    }
  });
  const solidMain = new Swiper('.solid .main-slider', {
    loop: true,
    spaceBetween: 8,
    navigation: {
      nextEl: '.solid .swiper-button-next',
      prevEl: '.solid .swiper-button-prev',
    },
    thumbs: {
      swiper: solidThumbs,
    },
  });

  // ======================================
  // hobby セクションの初期化
  // ======================================
  const hobbyThumbs = new Swiper('.hobby .thumbnail-slider', {
    slidesPerView: 3,
    spaceBetween: 8,
    loop: false,
    slideToClickedSlide: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    breakpoints: {
      768: {           // 768px以上の場合
        slidesPerView: 3
      }
    }
  });
  const hobbyMain = new Swiper('.hobby .main-slider', {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.hobby .swiper-button-next',
      prevEl: '.hobby .swiper-button-prev',
    },
    thumbs: {
      swiper: hobbyThumbs,
    },
  });

  // ======================================
  // two セクションの初期化
  // ======================================
  const twoThumbs = new Swiper('.two .thumbnail-slider', {
    slidesPerView: 4,
    spaceBetween: 6,
    loop: false,
    slideToClickedSlide: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    breakpoints: {
      768: {           // 768px以上の場合
        slidesPerView: 4
      }
    }
  });
  const twoMain = new Swiper('.two .main-slider', {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.two .swiper-button-next',
      prevEl: '.two .swiper-button-prev',
    },
    thumbs: {
      swiper: twoThumbs,
    },
  });

});

/*document.addEventListener("DOMContentLoaded", function () {
  var mainSlider = new Swiper(".main-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: thumbnailSlider,
    },
  });

  var thumbnailSlider = new Swiper(".thumbnail-slider", {
    slidesPerView: 3, // サムネイルの数（調整可）
    spaceBetween: 5,
    loop: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideToClickedSlide: true,
  });

  mainSlider.thumbs.swiper = thumbnailSlider;
}); */

/*document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const target = this.dataset.tab;

      // すべてのボタンから `active` クラスを削除
      buttons.forEach(btn => btn.classList.remove("active"));

      // すべてのタブコンテンツを非表示にする
      contents.forEach(content => content.classList.remove("active"));

      // クリックされたタブに `active` クラスを追加
      this.classList.add("active");

      // 対応するタブコンテンツを表示
      document.getElementById(target).classList.add("active");
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const centerSlider = new Swiper(".centerSlider", {

    // ループ（繰り返し）させたい場合
    loop: true,

    // 「真ん中を基準」にスライドを配置
    centeredSlides: true,

    // スライド同士の間隔
    spaceBetween: 50,

    slidesPerView: "auto",

    // ページネーションやナビゲーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    // 画面サイズによる可変表示をする場合
    breakpoints: {
      768: {
        // 768px以上では「ちょっとだけ3枚目が見えるぐらい」にする例
        spaceBetween: 100
      },
    },
  });
}); */


document.addEventListener('DOMContentLoaded', () => {

  // Swiper初期化
  const centerSlider = new Swiper('.swiper-container.centerSlider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 64,
    loop: false,  // ← ループさせる場合は true に
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      // スライド切り替え時 → タブのactive状態を同期させる
      slideChange: function () {
        const currentIndex = this.realIndex; // 0-based (0,1,2,3,...)

        // すべてのタブのactiveを外す
        document.querySelectorAll('.tab-button').forEach(btn => {
          btn.classList.remove('active');
        });

        // 対応するタブID = "tab" + (currentIndex + 1)
        const targetTabId = `tab${currentIndex + 1}`;
        const targetTab = document.getElementById(targetTabId);
        if (targetTab) {
          targetTab.classList.add('active');
        }
      },
    },
  });

  // タブ（.tab-button）をクリックしたら → Swiperを切り替え
  document.querySelectorAll('.tab-button').forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      // タブのID: "tab1", "tab2", ... から数字の部分を取り出し
      const tabNumber = parseInt(tabBtn.id.replace('tab', ''), 10); // "1" → 1
      // Swiperのスライドは0-basedなので (tabNumber - 1) に移動
      centerSlider.slideTo(tabNumber - 1); 
      
      // ここでタブの見た目（activeクラス）を付け替えるかどうかはお好み
      // ただし slideChange で同期するので、こちらは省略可
      // document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      // tabBtn.classList.add('active');
    });
  });

});



document.addEventListener('DOMContentLoaded', () => {
  const columnSection = document.querySelector('.column');
  const tabListItems = columnSection.querySelectorAll('.tab-list li');
  const tabContents = columnSection.querySelectorAll('.tab-content');

  tabListItems.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // すべてのタブから active を外す
      tabListItems.forEach(item => item.classList.remove('is-active'));
      // クリックしたタブに active を付与
      tab.classList.add('is-active');

      // すべてのタブコンテンツを非表示にする
      tabContents.forEach(content => content.classList.remove('is-active'));
      // クリックしたタブに対応するコンテンツだけ表示
      tabContents[index].classList.add('is-active');
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-item').forEach(item => {
    const toggleButton = item.querySelector('.accordion-toggle-button');
    const content = item.querySelector('.accordion-content');

    toggleButton.addEventListener('click', () => {
      const isClosed = !content.style.maxHeight || content.style.maxHeight === '0px';

      if (isClosed) {
        // ▼ 「閉じている」→「開く」動作
        content.style.maxHeight = content.scrollHeight + 'px';
        toggleButton.textContent = '閉じる';
        // ここでクラス付与
        item.classList.add('is-open'); 
      } else {
        // ▼ 「開いている」→「閉じる」動作
        content.style.maxHeight = '0px';
        toggleButton.textContent = '開く';
        // 閉じたらクラス削除
        item.classList.remove('is-open');
      }
    });
  });
});


/*
document.querySelectorAll('.accordion-item').forEach(item => {
  const openButton = item.querySelector('.accordion-open-button');
  const content = item.querySelector('.accordion-content');
  const closeButton = item.querySelector('.accordion-close-button');


  openButton.addEventListener('click', () => {
    content.style.maxHeight = content.scrollHeight + 'px';
    openButton.style.display = 'none';
  });

  closeButton.addEventListener('click', () => {
    content.style.maxHeight = '0';
  });

  content.addEventListener('transitionend', () => {
    if (content.style.maxHeight === '0px') {
      openButton.style.display = 'block';
    }
  });
});
*/


/*const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');

// [1] 「モーダルを開く」ボタンをクリック
openModalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('show');
});

// [2] 「閉じる」ボタンをクリック
closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('show');
});

// [3] オーバーレイのどこかをクリックしても閉じる (必要なければ削除)
modalOverlay.addEventListener('click', (e) => {
  // .modal-content内をクリックした場合は何もしない
  if (e.target.closest('.modal-content')) return;
  // それ以外の背景部分をクリックした場合モーダルを閉じる
  modalOverlay.classList.remove('show');
});*/


document.addEventListener('DOMContentLoaded', () => {
  // [A] 「開く」ボタンを全て取得
  const openButtons = document.querySelectorAll('[data-modal-open]');

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal-open'); // modalIdを取得
      console.log("Clicked button with modal ID:", modalId); // デバッグ用
      const modalOverlay = document.getElementById(modalId);
      
      if (modalOverlay) {
        modalOverlay.classList.add('show');
        console.log("Modal opened:", modalOverlay); // デバッグ用
      } else {
        console.error("Modal not found:", modalId);
      }
    });
  });

  // [B] 「閉じる」ボタンを全て取得
  const closeButtons = document.querySelectorAll('[data-modal-close]');

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalOverlay = btn.closest('.modal-overlay');
      if (modalOverlay) {
        modalOverlay.classList.remove('show');
        console.log("Modal closed:", modalOverlay); // デバッグ用
      }
    });
  });

  // [C] オーバーレイ背景をクリックで閉じる
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target.closest('.modal-content')) return;
      overlay.classList.remove('show');
      console.log("Modal closed via overlay click:", overlay); // デバッグ用
    });
  });
});
