//Time Snippet
function updateClock() {
  var currentTime = new Date();
  // Operating System Clock Hours for 12h clock
  var currentHoursAP = currentTime.getHours();
  // Operating System Clock Hours for 24h clock
  var currentHours = currentTime.getHours();
  // Operating System Clock Minutes
  var currentMinutes = currentTime.getMinutes();
  // Operating System Clock Seconds
  var currentSeconds = currentTime.getSeconds();
  // Adding 0 if Minutes & Seconds is More or Less than 10
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
  // Picking "AM" or "PM" 12h clock if time is more or less than 12
  var timeOfDay = currentHours < 12 ? "AM" : "PM";

  var currentTimeString = currentHours + ":" + currentMinutes + timeOfDay;
  // print clock js in div #clock.
  $(".time").html(currentTimeString);
}
$(document).ready(function () {
  setInterval(updateClock, 1000);
});
//End Time Snippet

//Split type
function splitType() {
  let splitType = new SplitType("[split-text]", {
    types: "words",
    tagName: "span"
  });
}
//End Split type

//Kiln Border Script
$("[border-kiln]").prepend('<div class="kiln-border is-top"></div>');
$("[border-kiln]").append('<div class="kiln-border is-bot"></div>');
//End Kiln Border Script

//Home Scrolltriggers
function logoExpand() {
  let logoTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".nav-component",
      start: "top top",
      endTrigger: ".hero-component",
      end: "top 110px",
      scrub: 0
    }
  });

  logoTl.to(".nav-logo.w--current", {
    scale: "1",
    ease: "none"
  });
}

function heroTl() {
  let heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-component",
      start: "top top",
      end: "bottom center",
      ease: "none",
      endTrigger: ".hero-content",
      scrub: true
    }
  });
  heroTl.to(".home-hero_overlay", {
    opacity: 1,
    duration: 1
  });
  //End Home Scrolltriggers
}

function thumbHovers() {
  //Thumb hovers
  $("[h-item]").on("mouseenter", function () {
    $("[h-item]").css("opacity", "0.5");
    $(this).css("opacity", "1");
  });

  $("[h-item]").on("mouseleave", function () {
    $("[h-item]").css("opacity", "1");
  });
  //End Thumb hovers
}

function gridListToggle() {
  //Projects Grid / List Toggle
  let gridListTl = gsap.timeline({
    paused: true
  });

  gridListTl.to(".project-grid_view", {
    opacity: 0,
    duration: 0.3,
    ease: "power1.inOut"
  });

  gridListTl.to(".project-grid_view", {
    display: "none"
  });

  gridListTl.to(".project-list_view", {
    display: "block",
    duration: 0
  });

  gridListTl.to(".project-list_view", {
    opacity: 1,
    duration: 0.3,
    ease: "power1.inOut"
  });

  $("[grid-toggle]").on("click", function () {
    gridListTl.restart();
    // $(window).scrollTop(0);
    ScrollTrigger.update();
  });

  $("[list-toggle]").on("click", function () {
    gridListTl.reverse();
    // $(window).scrollTop(0);
    ScrollTrigger.update();
    // gridListTl.reset();
  });
}

//Grid Item Scrolltriggers
$("[bg-clip]").each(function (index) {
  const bgTargets = $(this).find(".media-bg");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 80%"
    }
  });
  tl.from(bgTargets, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 0.8,
    ease: "power2.inOut"
  });
});

function footerSlider() {
  //Footer Slider
  $(".kiln-slider").each(function (index) {
    let loopMode = false;
    if ($(this).attr("loop-mode") === "true") {
      loopMode = true;
    }
    let sliderDuration = 300;
    if ($(this).attr("slider-duration") !== undefined) {
      sliderDuration = +$(this).attr("slider-duration");
    }
    const swiper = new Swiper($(this).find(".kiln-swiper")[0], {
      speed: sliderDuration,
      loop: loopMode,
      autoHeight: false,
      centeredSlides: false,
      followFinger: true,
      freeMode: false,
      slideToClickedSlide: false,
      slidesPerView: 1,
      spaceBetween: "4%",
      rewind: false,
      mousewheel: {
        forceToAxis: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 1,
          spaceBetween: "2.5%"
        },
        // tablet
        768: {
          slidesPerView: 2,
          spaceBetween: "3%"
        },
        // desktop
        992: {
          slidesPerView: 2.5,
          spaceBetween: "3.5%"
        }
      }
    });
  });
}

function projectsSlider() {
  $(".kiln-project_slider").each(function (index) {
    let loopMode = true;
    if ($(this).attr("loop-mode") === "true") {
      loopMode = true;
    }
    let sliderDuration = 300;
    if ($(this).attr("slider-duration") !== undefined) {
      sliderDuration = +$(this).attr("slider-duration");
    }
    const projSwiper = new Swiper($(this).find(".kiln-swiper")[0], {
      speed: sliderDuration,
      loop: loopMode,
      autoHeight: false,
      centeredSlides: false,
      followFinger: true,
      freeMode: false,
      slideToClickedSlide: false,
      slidesPerView: 1,
      spaceBetween: "4%",
      rewind: false,
      mousewheel: {
        forceToAxis: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 1.1,
          spaceBetween: "2.5%"
        },
        // tablet
        768: {
          slidesPerView: 2.2,
          spaceBetween: "3%"
        },
        // desktop
        992: {
          slidesPerView: 1.5,
          spaceBetween: "3.5%"
        }
      }
    });
  });
}
function customVideo() {
  //Custom Video Player
  $(".plyr_component").each(function (index) {
    let thisComponent = $(this);
    const controls = `
  <div class="progress-holder">
    <div class="plyr__progress">
          <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
          <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
          <span role="tooltip" class="plyr__tooltip">00:00</span>
    </div>
  </div>
  <div class="plyr__controls video-controls">
<div class="video-controls_col">

      <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
          <div class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use>Pause</div>
          <div class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use>Play</div>
          
      </button>
      </div>

      <div class="video-controls_col">
      <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
      <div class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use>Audio</div>
      <div class="icon--not-pressed audio-off" role="presentation"><use xlink:href="#plyr-volume"></use>Audio</div>
      </button>
      
 
      <button type="button" class="plyr__control is-fullscreen" data-plyr="fullscreen">
          <div class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use><img src="https://uploads-ssl.webflow.com/6450bd5a51a4509928f3d530/645a6106086caf2c5d638da4_fullscreen.svg"/></div>
          <div class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use><img src="https://uploads-ssl.webflow.com/6450bd5a51a4509928f3d530/645a6106086caf2c5d638da4_fullscreen.svg"/></div>
      </button>
      </div>
  </div>
  `;

    // create plyr settings
    let player = new Plyr(thisComponent.find(".plyr_video")[0], {
      controls,
      resetOnEnd: true
    });

    // pause other playing videos when this one starts playing
    player.on("play", (event) => {
      let prevPlayingComponent = $(".plyr--playing")
        .closest(".plyr_component")
        .not(thisComponent);
      if (prevPlayingComponent.length > 0) {
        prevPlayingComponent.find(".plyr_pause-trigger")[0].click();
      }
    });
    thisComponent.find(".plyr_pause-trigger").on("click", function () {
      player.pause();
    });

    // exit full screen when video ends
    player.on("ended", (event) => {
      if (player.fullscreen.active) {
        player.fullscreen.exit();
      }
    });
    // set video to contain instead of cover when in full screen mode
    player.on("enterfullscreen", (event) => {
      thisComponent.addClass("contain-video");
    });
    player.on("exitfullscreen", (event) => {
      thisComponent.removeClass("contain-video");
    });
  });
}
//Ukiyo Parallax
// CSS selector
function parallaxImg() {
  const parallax = document.querySelector(".parallax-img");

  new Ukiyo(parallax, {
    scale: 1.3, // 1~2 is recommended
    speed: 1.3, // 1~2 is recommended
    willChange: true, // This may not be valid in all cases
    wrapperClass: "ukiyo-wrapper",
    externalRAF: false
  });
}
