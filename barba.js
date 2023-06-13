function cmsActive() {
  let cmsPageName = $(".single-project").find(".item-name").text();
  $(".w-dyn-item").each(function (index) {
    if ($(this).find(".item-name").text() === cmsPageName) {
      $(this).addClass("active-flip-item");
    }
  });
}

function flip(outgoing, incoming) {
  let state = Flip.getState(outgoing.find(".project-vid"));
  incoming.find(".project-vid").remove();
  outgoing.find(".project-vid").prependTo(incoming);
  Flip.from(state, {
    duration: 0.8,
    // absolute: true,
    ease: "power3.inOut"
  });
}

barba.hooks.after((data) => {
  $(data.next.container).removeClass("fixed");
  $(window).scrollTop(0);
  studioScrollTriggers();
  $(".fluid-nav_menu")
    .find(".fluid-nav_menu-component")
    .removeClass("m-visible");
  $(".fluid-nav_menu").find("[nav-main]").addClass("m-visible");
});

barba.hooks.afterLeave(() => {
  let triggers = ScrollTrigger.getAll();
  triggers.forEach(function (trigger) {
    trigger.kill();
  });
});

barba.init({
  preventRunning: true,
  debug: true,
  views: [
    {
      namespace: "home-page",
      beforeLeave() {
        clearMainMenu.restart();
        clearProjectsMenu.restart();
      },
      afterEnter() {
        showMainMenu.restart();
        newsNavigation();
        footerShrink();
        logoExpand();
        heroTl();
        studioScrollTriggers();
        showProjectMenu();
        thumbHovers();
        splitType();
        footerSlider();
        ScrollTrigger.refresh(true);
      }
    },
    {
      namespace: "projects",
      beforeLeave() {
        hideProjectToggleMenu.restart();
      },
      afterEnter() {
        hideNav.restart();
        showProjectToggleMenu.restart();
        projToggle();
        gridListToggle();
        projectsSlider();
        footerShrink();
        studioScrollTriggers();
        thumbHovers();
        splitType();
        footerSlider();
        ScrollTrigger.refresh(true);
      }
    },
    {
      namespace: "individual",
      beforeLeave() {
        clearSingleMenu.restart();
        clearMainMenu.restart();
      },
      afterEnter() {
        showMainMenu.restart();
        heroTl();
        studioScrollTriggers();
        parallaxImg();
        customVideo();
        footerShrink();
        // showCurrentProject();
        showSingleMenu();
        thumbHovers();
        splitType();
        footerSlider();
        ScrollTrigger.refresh(true);
      }
    },
    {
      namespace: "news",
      beforeLeave() {
        clearMainMenu.restart();
      },
      afterEnter() {
        showMainMenu.restart();
        mainNav();
        thumbHovers();
        studioScrollTriggers();
        splitType();
        footerShrink();
        footerSlider();
        newsNavigation();
        ScrollTrigger.refresh(true);
      }
    }
  ],
  transitions: [
    {
      sync: true,
      enter(data) {
        $(data.next.container).addClass("fixed");
        // visibleMenu.restart();
        // clearMainMenu.restart();
        gsap.to($(data.current.container).find(".overlay"), {
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        });
        gsap.to(
          $(data.current.container),
          {
            y: "-10rem",
            duration: 0.8,
            ease: "power2.inOut"
          },
          "<"
        );

        return gsap.from(data.next.container, {
          y: "110vh",
          delay: 0.2,
          duration: 0.8,
          ease: "power2.out"
        });
      }
    },
    {
      sync: true,
      from: { namespace: ["home-page"] },
      to: { namespace: ["individual"] },

      enter(data) {
        cmsActive();
        $(data.next.container).addClass("fixed");

        flip($(".active-flip-item"), $(".home-hero_vid"));

        return gsap.to(data.current.container, {
          opacity: 0,
          // opacity: 0,
          duration: 0.3,
          ease: "power1.in"
        });
      }
    }
  ]
});
