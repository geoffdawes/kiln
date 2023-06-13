//ALL DISPLAY MENU TIMELINES
//FADE OUT NAV
let hideNav = gsap.timeline({
  paused: true
});

hideNav.to(".fluid-nav_menu", {
  opacity: 0,
  duration: 0.2
});

//MAIN NAV
let showMainMenu = gsap.timeline({
  paused: true,
  preventOverlaps: "main",
  onComplete: () => {
    $("[nav-main]").addClass("m-visible");
  }
});

showMainMenu.set("[nav-main]", {
  display: "flex",
  delay: 0.8
});

showMainMenu.fromTo(
  $("[nav-main]").find(".nav-item"),
  {
    opacity: 0,
    xPercent: 20
  },
  {
    opacity: 1,
    xPercent: 0,
    stagger: {
      amount: 0.4
    },
    duration: 0.6,
    ease: "back.out(1.7)"
  }
);

let showIndividualMenu = gsap.timeline({
  paused: true,
  preventOverlaps: "main",
  onComplete: () => {
    $("[nav-single]").addClass("m-visible");
  }
});

showIndividualMenu.set("[nav-single]", {
  display: "flex",
  delay: 0.8
});

showIndividualMenu.fromTo(
  $("[nav-single]").find(".nav-item"),
  {
    opacity: 0,
    xPercent: 20
  },
  {
    opacity: 1,
    xPercent: 0,
    stagger: {
      amount: 0.4
    },
    duration: 0.6,
    ease: "back.out(1.7)"
  }
);

//END MAIN NAV

//PROJECTS NAV
let showProjectsMenu = gsap.timeline({
  paused: true,
  preventOverlaps: "main"
});

showProjectsMenu.set("[nav-projects]", {
  display: "flex",
  delay: 0.8
});

showProjectsMenu.fromTo(
  $("[nav-projects]").find(".nav-item"),
  {
    opacity: 0,
    xPercent: 20
  },
  {
    opacity: 1,
    xPercent: 0,
    stagger: {
      amount: 0.3
    },
    duration: 0.6,
    ease: "back.out(1.7)"
  }
);

//NEWS NAV
let showNewsMenu = gsap.timeline({
  paused: true,
  preventOverlaps: "main"
});

showNewsMenu.set("[nav-newsfeed]", {
  display: "flex",
  delay: 0.8
});

showNewsMenu.fromTo(
  $("[nav-newsfeed]").find(".nav-item"),
  {
    opacity: 0,
    xPercent: 20
  },
  {
    opacity: 1,
    xPercent: 0,
    stagger: {
      amount: 0.3
    },
    duration: 0.6,
    ease: "back.out(1.7)"
  }
);

//STUDIO NAV
let showStudioMenu = gsap.timeline({
  paused: true,
  preventOverlaps: "main"
});

showStudioMenu.set("[nav-studio]", {
  display: "flex",
  delay: 0.8
});

showStudioMenu.fromTo(
  $("[nav-studio]").find(".nav-item"),
  {
    opacity: 0,
    xPercent: 20
  },
  {
    opacity: 1,
    xPercent: 0,
    stagger: {
      amount: 0.4
    },
    duration: 0.6,
    ease: "back.out(1.7)"
  }
);

//END PROJECT NAV

//ALL HIDE MENU TIMELINES
//Clear main menu for other secondary menus
let clearMainMenu = gsap.timeline({
  paused: true,
  preventOverlaps: "main",
  onComplete: () => {
    $("[nav-main]").hide();
    $("[nav-main]").removeClass("m-visible");
  }
});

clearMainMenu.to($("[nav-main]").find(".nav-item"), {
  opacity: 0,
  xPercent: -20,
  stagger: {
    amount: 0.4
  },
  duration: 0.4,
  ease: "power1.inOut"
});

clearMainMenu.set($("[nav-main]").find(".nav-item"), {
  xPercent: 20
});
//END MAIN MENU

//PROJECT PAGE TOGGLE MENU
let showProjectToggleMenu = gsap.timeline({
  paused: true,
  delay: 0.8
});

showProjectToggleMenu.set(".projects-nav_menu-component", {
  display: "flex"
});

showProjectToggleMenu.fromTo(
  $(".projects-nav_menu-component").find(".project-nav_item"),
  {
    opacity: 0,
    xPercent: 20
  },
  {
    opacity: 1,
    xPercent: 0,
    stagger: {
      amount: 0.4
    },
    duration: 0.6,
    ease: "back.out(1.7)"
  }
);

let hideProjectToggleMenu = gsap.timeline({
  paused: true,
  onComplete: () => {
    $(".projects-nav_menu-component").hide();
    $(".projects-nav_menu-component").removeClass("m-visible");
  }
});

hideProjectToggleMenu.to(
  $(".projects-nav_menu-component").find(".project-nav_item"),
  {
    opacity: 0,
    xPercent: -20,
    stagger: {
      amount: 0.2
    },
    duration: 0.4,
    ease: "power2.out"
  }
);
hideProjectToggleMenu.to(".fluid-nav_menu", {
  opacity: 1,
  duration: 0.6
});

//END PROJECT TOGGLE MENU

//CLEAR PROJECTS MENU
let clearProjectsMenu = gsap.timeline({
  paused: true,
  preventOverlaps: "main",
  onComplete: () => {
    $("[nav-projects]").hide();
    $("[nav-projects]").removeClass("m-visible");
  }
});

clearProjectsMenu.to($("[nav-projects]").find(".nav-item"), {
  opacity: 0,
  xPercent: -20,
  stagger: {
    amount: 0.4
  },
  duration: 0.4,
  ease: "power1.inOut"
});

//CLEAR NEWS MENU
let clearNewsMenu = gsap.timeline({
  paused: true,
  preventOverlaps: "main",
  onComplete: () => {
    $("[nav-newsfeed]").hide();
    $("[nav-newsfeed]").removeClass("m-visible");
  }
});

clearNewsMenu.to($("[nav-newsfeed]").find(".nav-item"), {
  opacity: 0,
  xPercent: -20,
  stagger: {
    amount: 0.4
  },
  duration: 0.4,
  ease: "power1.inOut"
});

//CLEAR STUDIO MENU
let clearStudioMenu = gsap.timeline({
  paused: true,
  preventOverlaps: "main",
  onComplete: () => {
    $("[nav-studio]").hide();
    $("[nav-studio]").removeClass("m-visible");
  }
});

clearStudioMenu.to($("[nav-studio]").find(".nav-item"), {
  opacity: 0,
  xPercent: -20,
  stagger: {
    amount: 0.4
  },
  duration: 0.4,
  ease: "power1.inOut"
});

//CLEAR SINGLE MENU
let clearSingleMenu = gsap.timeline({
  paused: true,
  preventOverlaps: "main",
  onComplete: () => {
    $("[nav-single]").hide();
    $("[nav-single]").removeClass("m-visible");
  }
});

clearSingleMenu.to($("[nav-single]").find(".nav-item"), {
  opacity: 0,
  xPercent: -20,
  stagger: {
    amount: 0.4
  },
  duration: 0.4,
  ease: "power1.inOut"
});

function showProjectMenu() {
  //Project Navigation
  $(".project-wrapper").each(function (index) {
    let projectMenuTl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom",
        end: "bottom center",
        onEnter: () => {
          clearMainMenu.restart();
          showProjectsMenu.restart();
          $(".fluid-nav_menu")
            .find(".fluid-nav_menu-component")
            .removeClass("m-visible");
          $(".fluid-nav_menu").find("[nav-projects]").addClass("m-visible");
        },
        onLeaveBack: () => {
          clearProjectsMenu.restart();
          $(".fluid-nav_menu").find("[nav-projects]").removeClass("m-visible");
          $(".fluid-nav_menu").find("[nav-main]").addClass("m-visible");
          showMainMenu.restart();
        },
        onLeave: () => {
          clearProjectsMenu.restart();
          $(".fluid-nav_menu").find("[nav-projects]").removeClass("m-visible");
        },
        onEnterBack: () => {
          clearMainMenu.restart();
          showProjectsMenu.restart();
          $(".fluid-nav_menu")
            .find(".fluid-nav_menu-component")
            .removeClass("m-visible");
          $(".fluid-nav_menu").find("[nav-projects]").addClass("m-visible");
        }
      }
    });
  });
}

function newsNavigation() {
  //News Navigation
  $("[news-trigger]").each(function (index) {
    let newsMenuTl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top top",
        end: "bottom top",
        onEnter: () => {
          clearMainMenu.restart();
          showNewsMenu.restart();
          $(".fluid-nav_menu")
            .find(".fluid-nav_menu-component")
            .removeClass("m-visible");
          $(".fluid-nav_menu").find("[nav-newsfeed]").addClass("m-visible");
        },
        onLeaveBack: () => {
          clearNewsMenu.restart();
        }
      }
    });
  });
}

function mainNav() {
  //News Navigation
  $("[show-main]").each(function (index) {
    let mainNavTl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top top",
        end: "bottom 80%",
        onEnterBack: () => {
          showMainMenu.restart();
        }
      }
    });
  });
}

function projToggle() {
  //News Navigation
  $("[grid-list_toggle]").each(function (index) {
    let projToggle = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top top",
        end: "bottom bottom",
        // markers: true,

        onEnterBack: () => {
          clearNewsMenu.restart();
          hideNav.restart();
          showProjectToggleMenu.restart();

          // setTimeout(function () {
          //   showProjectToggleMenu.restart();
          // }, 800);
        },
        onLeave: () => {
          clearMainMenu.restart();
          hideProjectToggleMenu.restart();
          setTimeout(function () {
            showNewsMenu.restart();
          }, 400);
        }
      }
    });
  });
}

function showSingleMenu() {
  //Single Project Navigation
  $(".single-project_content").each(function (index) {
    var currentProjectName = $(this).find(".item-name").text();
    function showCurrentProject() {
      $("[nav-single]").removeClass("is-next");

      $(".single-menu_name").text(currentProjectName);
    }
    // showCurrentProject();
    let singleProjectTl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this).find(".hero-content"),
        start: "top 50%",
        scrub: true,
        // markers: true,
        endTrigger: ".single-project_content",
        end: "bottom bottom",
        onEnter: () => {
          clearMainMenu.restart();
          showIndividualMenu.restart();
          showCurrentProject();
          $(".fluid-nav_menu").find("[nav-main]").removeClass("m-visible");
          $(".fluid-nav_menu").find("[nav-single]").addClass("m-visible");
        },
        onLeaveBack: () => {
          clearSingleMenu.restart();
          showMainMenu.restart();
          $(".fluid-nav_menu").find("[nav-single]").removeClass("m-visible");
          $(".fluid-nav_menu").find("[nav-main]").addClass("m-visible");
        },
        onEnterBack: () => {
          showCurrentProject();
        }
      }
    });

    singleProjectTl.to(".nav-progress", {
      width: "100%",
      ease: "none"
    });
  });

  //Next Project Scrolltrigger
  $("[next-trigger]").each(function (index) {
    var nextProjectName = $(".next-project_title").text();
    function showNextProject() {
      $(".single-menu_name").text(nextProjectName);
      $("[nav-single]").addClass("is-next");
    }
    let nextTl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "bottom center",
        onEnter: () => {
          showNextProject();
          nextTl.to(".nav-progress", {
            clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            ease: "power2.inOut",
            duration: 0.8
          });
        },
        onLeaveBack: () => {
          nextTl.to(".nav-progress", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power2.inOut",
            duration: 0.8
          });
        }
      }
    });
  });
}

$(".secondary-nav").each(function (index) {
  let navItems = $(this).find(".nav-item");
  let tl = gsap.timeline({
    paused: true,
    onComplete: () => {
      // $(".secondary-nav").hide();
      $(".fluid-nav_menu")
        .find(".fluid-nav_menu-component")
        .removeClass("m-visible");
    }
  });
  tl.to(navItems, {
    opacity: 0,
    xPercent: -20,
    stagger: {
      amount: 0.4
    },
    duration: 0.4,
    ease: "power1.inOut"
  });

  // set(tl, {clearProps: true}
  //Menu Toggle
  $("[menu-toggle]").on("click", function () {
    tl.restart();
    showMainMenu.restart();
  });
});

$("[project-menu-toggle]").on("click", function () {
  $(".fluid-nav_menu")
    .find(".fluid-nav_menu-component")
    .removeClass("m-visible");
  hideProjectToggleMenu.restart();
  setTimeout(function () {
    showMainMenu.restart();
  }, 400);
});

function studioScrollTriggers() {
  $(".studio-holder").each(function (index) {
    //Studio Links Scrolltrigger Loop
    $(".studio-highlight").each(function (index) {
      var keyword = $(this).attr("studio-keyword");
      var highlightCopy = $(this).attr("studio-highlight");
      var keywordBtn = $(this).attr("studio-btn_text");
      function showHighlight() {
        $(".studio-text").addClass("highlight");
        $(".studio-keyword").text(keyword);
        $(".studio-btn").text(keywordBtn);
      }

      function hideHighlight() {
        $(".studio-text").removeClass("highlight");
      }

      //Studio Text Popup
      let showPopup = gsap.timeline({
        paused: true
      });

      showPopup.set("[nav-studio]", {
        opacity: 0
      });

      showPopup.to(
        ".studio-popup_content",
        {
          height: "auto",
          width: "30rem",
          ease: CustomEase.create("custom", "M0,0 C0.77,0 0.193,1.223 1,1 "),
          duration: 1
        },
        0
      );

      showPopup.to(".studio-popup_fade", {
        opacity: 1,
        duration: 0.4,
        ease: "power1.inOut"
      });
      //End show text popup

      //Hide Text Popup
      let hidePopup = gsap.timeline({
        paused: true,
        onComplete: function () {
          $(".fluid-nav_menu").removeClass("hide");
          $(".studio-popup_content").removeClass("show");
        }
      });

      hidePopup.to(".studio-popup_fade", {
        opacity: 0,
        duration: 0.4,
        ease: "power1.inOut"
      });

      hidePopup.to(
        ".studio-popup_content",
        {
          height: "3rem",
          width: "18.7rem",
          ease: CustomEase.create("custom", "M0,0 C0.77,0 0.193,1.223 1,1 "),
          duration: 1
        },
        0
      );
      hidePopup.set("[nav-studio]", {
        opacity: 1
      });
      //End Hide Text Popup

      //Studio Video Popup
      let showVideo = gsap.timeline({
        paused: true
      });
      showVideo.set("[nav-studio]", {
        opacity: 0
      });
      showVideo.to(".studio-vid_popup", {
        height: "auto",
        width: "30rem",
        borderRadius: "0.5rem",
        ease: CustomEase.create("custom", "M0,0 C0.77,0 0.193,1.223 1,1 "),
        duration: 1
      });
      showVideo.to(".studio-vid_inner", {
        opacity: 1,
        duration: 0.4,
        ease: "power1.inOut"
      });

      //END SHOW VIDEO
      //Hide Video Popup
      let hideVideoPopup = gsap.timeline({
        paused: true,
        onComplete: function () {
          $(".fluid-nav_menu").removeClass("hide");
          $(".studio-vid_popup").removeClass("show");
        }
      });

      hideVideoPopup.to(".studio-vid_inner", {
        opacity: 0,
        duration: 0.4,
        ease: "power1.inOut"
      });

      hideVideoPopup.to(
        ".studio-vid_popup",
        {
          height: "3rem",
          borderRadius: "0rem",
          width: "18.7rem",
          ease: CustomEase.create("custom", "M0,0 C0.77,0 0.193,1.223 1,1 "),
          duration: 1
        },
        0
      );
      hideVideoPopup.set("[nav-studio]", {
        opacity: 1
      });
      //End Hide Video Popup

      $(".studio-btn").on("click", function () {
        if ($(this).text() === "Read") {
          $(".fluid-nav_menu").addClass("hide");
          $(".studio-popup_content").addClass("show");
          $(".studio-content_text").text(highlightCopy);
          showPopup.restart();
        }
        if ($(this).text() === "View") {
          $(".fluid-nav_menu").addClass("hide");
          $(".studio-vid_popup").addClass("show");
          showVideo.restart();
        }
      });
      $(".studio-content_close").on("click", function () {
        hidePopup.restart();
      });
      $(".video-close").on("click", function () {
        hideVideoPopup.restart();
      });

      $("[studio-close]").on("click", function () {
        if ($(".studio-popup_content").hasClass("show")) {
          hidePopup.restart();
        }
        if ($(".studio-vid_popup").hasClass("show")) {
          hideVideoPopup.restart();
        }
        clearStudioMenu.restart();
        clearMainMenu.restart();
        // showMainMenu.restart();
        setTimeout(function () {
          showMainMenu.restart();
        }, 800);

        $(".fluid-nav_menu")
          .find(".fluid-nav_menu-component")
          .removeClass("m-visible");
        $(".fluid-nav_menu").find("[nav-main]").addClass("m-visible");
        $(".studio-text").removeClass("highlight");
        $(".studio-holder").removeClass("show");
      });

      $("[studio-link]").on("click", function () {
        $(".studio-holder").scrollTop(0);
        $(".studio-holder").addClass("show");
        $(".secondary-nav").hide();
      });

      let studioTl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          // markers: true,
          start: "top 70%",
          end: "bottom 30%",
          onEnter: () => {
            showHighlight();
            $(this).addClass("active");
            $(".fluid-nav_menu")
              .find(".fluid-nav_menu-component")
              .removeClass("m-visible");
            $(".fluid-nav_menu").find("[nav-studio]").addClass("m-visible");
            clearMainMenu.restart();
            showStudioMenu.restart();
          },
          onLeave: () => {
            hideHighlight();
            $(this).removeClass("active");
            $(".fluid-nav_menu").find("[nav-studio]").removeClass("m-visible");
            $(".fluid-nav_menu").find("[nav-main]").addClass("m-visible");
            clearStudioMenu.restart();
            showMainMenu.restart();
          },
          onLeaveBack: () => {
            hideHighlight();
            $(this).removeClass("active");
            $(".fluid-nav_menu").find("[nav-studio]").removeClass("m-visible");
            $(".fluid-nav_menu").find("[nav-main]").addClass("m-visible");
            clearStudioMenu.restart();
            showMainMenu.restart();
          },
          onEnterBack: () => {
            showHighlight();
            $(this).addClass("active");
            $(".fluid-nav_menu")
              .find(".fluid-nav_menu-component")
              .removeClass("m-visible");
            $(".fluid-nav_menu").find("[nav-studio]").addClass("m-visible");
            clearMainMenu.restart();
            showStudioMenu.restart();
          },
          scroller: ".studio-holder"
        }
      });
    });
  });

  //News Navigation within Studio

  // $("[studio-news-trigger]").each(function (index) {
  //   let newsStudioMenuTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: $(this),
  //       start: "top bottom",
  //       // markers: true,
  //       end: "bottom 200px",
  //       endTrigger: ".footer-bottom",
  //       scroller: ".studio-holder",
  //       onEnter: () => {
  //         $(".fluid-nav_menu")
  //           .find(".fluid-nav_menu-component")
  //           .removeClass("m-visible");
  //         $(".fluid-nav_menu").find("[nav-newsfeed]").addClass("m-visible");
  //       },
  //       onLeaveBack: () => {
  //         $(".fluid-nav_menu").find("[nav-newsfeed]").removeClass("m-visible");
  //         $(".fluid-nav_menu").find("[nav-main]").addClass("m-visible");
  //       }
  //     }
  //   });
  // });
  //End News Trigger within Studio
}

//Footer Shrink
function footerShrink() {
  $(".page-main").each(function (index) {
    let footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "bottom 20%",
        onEnter: () => {
          $(this).addClass("slim");
        },
        onLeaveBack: () => {
          $(this).removeClass("slim");
        }
      }
    });
  });
}
