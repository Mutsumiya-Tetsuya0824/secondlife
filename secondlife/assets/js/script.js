



$(function () {
  const wH = window.innerHeight;
  if (wH > 950) {
    $('.mv-scroll-wrap').hide();
  }
})


$(function () {
  var set = 60;
  var boxTop = new Array;
  var current = -1;

  changeBox(0);
	$(window).scroll(function () {
		$('.position-now').each(function (i) {
			boxTop[i] = $(this).offset().top;
		});
    scrollPosition = $(window).scrollTop();
    for (var i = boxTop.length - 1; i >= 0; i--) {
			if ($(window).scrollTop() > boxTop[i] - set) {
        changeBox(i);
        break;
      }
    };
  });
  function changeBox(secNum) {
    if (secNum != current) {
      current = secNum;
      $('.fixed-nav-item').removeClass('link-current');
      $('.fixed-nav').removeClass('fixed');
      if (current == 0) {
        $('.fixed-nav-item').removeClass('link-current');
        $('.fixed-nav').removeClass('fixed');
      }
      else if (current == 1) {
        $('#nav-every').addClass('link-current');
        $('.fixed-nav').addClass('fixed');
      } else if (current == 2) {
        $('#nav-mako').addClass('link-current');
        $('.fixed-nav').addClass('fixed');
      } else if (current == 3) {
        $('#nav-mako').addClass('link-current');
        $('.fixed-nav').addClass('fixed');
			} else if (current == 4) {
        $('#nav-ichijo').addClass('link-current');
        $('.fixed-nav').addClass('fixed');
			} else if (current == 5) {
        $('#nav-qa').addClass('link-current');
        $('.fixed-nav').addClass('fixed');
			}  else {
        $('.fixed-nav-item').removeClass('link-current');
        $('.fixed-nav').removeClass('fixed');
			}
    }
  };
});

const mvListImage = document.querySelectorAll(".mv-list");
document.addEventListener("scroll", ()=>{
	for (let i = 0; i < mvListImage.length; i++) {
		const element = mvListImage[i];
		const distance = element.getBoundingClientRect().top;
		if(distance < window.innerHeight * .8){
			element.classList.add("is-active");
		}
	}
})











const targetModalTrigger = document.querySelectorAll(".ichijo-item");
const targetModalElement = document.querySelector(".modal");
const targetModalBackground = document.querySelector(".modal-background");
const targetModalClose = document.querySelector(".modal-close");
const targetModalHeading = document.querySelector(".modal-heading");
const targetModalCategory = document.querySelector(".modal-category");
const targetModalImages = document.querySelector(".modal-images");

targetModalTrigger.forEach((element) => {
  element.addEventListener("click", (event) => {
    const nowClickedElement = event.currentTarget;
    const nowClickedKey = event.currentTarget.dataset.key;

    function getModalContent(clicked) {
      return clicked.id == nowClickedKey;
    }

    const resultModalContent = targetModalArray.find(getModalContent);
    const category = [];
    targetModalHeading.innerHTML = resultModalContent.title;
    for (let i = 0; i < resultModalContent.category.length; i++) {
      category.push('<li>'+  resultModalContent.category[i] + '</li>');
    }
    targetModalCategory.innerHTML = category.join('');

    const images = [];
    for (let i = 0; i < resultModalContent.imagesPC.length; i++) {
      images.push('<div class="modal-slide swiper-slide"><source srcset="'+  resultModalContent.imagesSP[i] +'" media="(max-width:768px)" /><img src="'+  resultModalContent.imagesPC[i] +'" alt=""></div>');
    }
    targetModalImages.innerHTML = images.join('');

    nowClickedElement.querySelector("picture").dataset.thumb;
    var initialSlide = nowClickedElement.querySelector(".is-active").dataset.thumb - 1;
    createSwiper(initialSlide);
    targetModalElement.classList.add("is-active");
  });
});




const qaBlockSlider = new Swiper('.qa-block-slider', {
  effect: 'fade', 
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".qa-block-slider-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
          '<div class="' + className + '"><span class="swiper-pagination-inner"></span></div>'
      )
    },
  },
});

$('.qa-block-slider-pagination .swiper-pagination-bullet').on('click', function () {
  $(this).addClass('off')
})




$('.fixed-dialog-close, .fixed-dialog-bg').on('click', function () {
  $('.fixed-dialog').hide();
})

//　スムーズスクロール
document.addEventListener("DOMContentLoaded", function () {
  // すべての内部リンクを取得
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // デフォルトの動作を無効化

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth" // スムーズスクロール
        });
      }
    });
  });
});





function setOnClickHandler() {
  var links = d.links;
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var splitLinkHref = link.href.split("#");
    if (splitLinkHref[1]) {
      if (
        currentHref_WOHash == splitLinkHref[0] &&
        d.getElementById(splitLinkHref[1])
      ) {
        if (
          !splitLinkHref[1].match(/^tab/) &&
          link.className != "noScroll" &&
          link.parentNode.className != "icj-pagetop"
        ) {
          addEvent(link, "click", startScroll);
        }
      }
    }
  }
}






//PC右固定追従バナー　MV通過後表示
$(function () {
  var $fixedCta = $('.fixed-cta'); // 追従バナー
  var $txtLinkArea = $('.txt_link_area'); // 目標のエリア
  var isVisible = false; // 表示状態のフラグ

  // 初期状態で完全に非表示にする（CSSでdisplay: none; を設定済み）
  $fixedCta.css({ opacity: 0, visibility: "hidden", display: "none" });

  function checkScroll() {
      var scrollTop = $(window).scrollTop();
      var txtLinkOffset = $txtLinkArea.offset().top; // .txt_link_area の位置
      var windowHeight = $(window).height();

      if (scrollTop + windowHeight > txtLinkOffset) {
          if (!isVisible) {
              isVisible = true;
              $fixedCta.css({ display: "block", visibility: "visible" }) // 表示を準備
                  .stop().animate({ opacity: 1 }, 500) // フェードイン
                  .addClass("visible");
          }
      } else {
          if (isVisible) {
              isVisible = false;
              $fixedCta.stop().animate({ opacity: 0 }, 500, function () {
                  $(this).css({ visibility: "hidden", display: "none" }).removeClass("visible");
              });
          }
      }
  }

  // スクロールイベント
  $(window).on("scroll", checkScroll);

  // ページ読み込み時にもチェック（リロード時に最初から適切な状態にする）
  checkScroll();

  // 閉じるボタンの処理
  $(".fixed-cta__quo-img .close_btn").on("click", function () {
      $(".fixed-cta__quo, .fixed-cta-button").addClass("hidden"); // 両方を非表示にする
      $fixedCta.stop().animate({ opacity: 0 }, 500, function () {
          $(this).css({ display: "none", visibility: "hidden" }).removeClass("visible");
      });
  });
});







//スマホフッター固定バナー　フッター近辺で非表示

document.addEventListener("DOMContentLoaded", function () {
  const fixedFooter = document.querySelector(".fixed-cv");
  const campaignBox = document.querySelector(".campaign_box");
  const commonFooter = document.querySelector(".cmn-footer"); // フッターも対象に追加

  if (!fixedFooter || !campaignBox || !commonFooter) return;

  let isHidden = false; // `.fixed-cv` の非表示状態フラグ
  let lastScrollY = window.scrollY; // 最後のスクロール位置

  function checkVisibility() {
      if (window.innerWidth > 768) {
          // PCならフッターを常に表示
          fixedFooter.classList.remove("hidden");
          isHidden = false;
          return;
      }

      const campaignBoxRect = campaignBox.getBoundingClientRect();
      const footerRect = commonFooter.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const currentScrollY = window.scrollY;

      if (
          (campaignBoxRect.top < windowHeight && campaignBoxRect.bottom > 0) ||
          (footerRect.top < windowHeight && footerRect.bottom > 0)
      ) {
          // `campaign_box` または `cmn-footer` が画面内にあるとき → `.fixed-cv` を非表示
          fixedFooter.classList.add("hidden");
          isHidden = true;
      } else if (currentScrollY < lastScrollY && isHidden && footerRect.top > windowHeight) {
          // **上にスクロール** したとき & フッターが画面外なら `.fixed-cv` を再表示
          fixedFooter.classList.remove("hidden");
          isHidden = false;
      } else if (currentScrollY > lastScrollY && (campaignBoxRect.bottom < 0 || footerRect.top < windowHeight)) {
          // **下にスクロール** して `campaign_box` または `cmn-footer` に入ったら `.fixed-cv` を非表示のまま
          fixedFooter.classList.add("hidden");
          isHidden = true;
      }

      lastScrollY = currentScrollY; // スクロール位置を更新
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);

  // 初回チェック
  checkVisibility();
});
