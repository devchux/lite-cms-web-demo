/**
 * Template Name: Mentor - v4.6.1
 * Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  on("click", ".back-to-top", function (e) {
    window.scrollTo(0, 0);
  });

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
      window.start.init({
        title: "Hi, there ✌️",
        message:
          "How may we help you? Select any communication platform of your choice from the icons provided above.",
        color: "#1C86FA",
        position: "left",
        placeholder: "Enter your message",
        withText: "Write with",
        viaWhatsapp: "Or write us directly via Whatsapp",
        gty: "Go to your",
        awu: "and write us",
        connect: "Connect now",
        button: "Write us",
        device: "everywhere",
        logo: "https://d2r80wdbkwti6l.cloudfront.net/vsgGNEmAuhPz7Jc1SqQBOXeBcvWWZSIX.jpg",
        person:
          "https://d2r80wdbkwti6l.cloudfront.net/EpqsRZpI6LnBO1eLHAbl2aMfHuB1UeYI.jpg",
        services: [
          { name: "whatsapp", content: "+2348035599525" },
          { name: "mail", content: "o.youthdei@gmail.com" },
          { name: "phone", content: "+2348035599525" },
          { name: "sms", content: "+2348035599525" },
        ],
      });
    });
  }

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    /**
     * Testimonials slider
     */
    new Swiper(".testimonials-slider", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        1200: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  });
})();
