document.addEventListener("DOMContentLoaded", function () {
  ("use strict");
  new Splide(".splide", {
    // 'arrowPath': "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
  }).mount();
  new Splide("#success-story .splide", {
    // 'arrowPath': "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
  }).mount();
  // Global Functions
  const $ = (selector, areAll) => {
    const all = document.querySelectorAll(selector);
    const single = document.querySelector(selector);
    return areAll ? all : single;
  };
  function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
    while (element) {
      xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
      yPosition += element.offsetTop - element.scrollTop + element.clientTop;
      element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
  }

  // Header
  !(function () {
    const span = document.createElement("span");
    const ul = $("#header-section > div > nav > ul");
    ul.prepend(span);
    // Set bottom bar to first Menu Item
    const setBottomBar = () => {
      const firstLi = $("#header-section > div > nav > ul > li:nth-child(2)");
      const spanBar = $("#header-section > div > nav > ul > span");
      setTimeout(function () {
        const firstLiWidth = getComputedStyle(firstLi).width;
        spanBar.style.width = firstLiWidth;
        const firstLiFromLeft = getPosition(firstLi).x;
        spanBar.style.left = firstLiFromLeft + "px";
      }, 150);
    };
    setBottomBar();
    window.addEventListener("resize", setBottomBar);
    // Moving bar
    let LiItems = Array.from($("nav.navigation ul").children);
    LiItems.shift();
    LiItems.pop();
    for (let i = 0; i < LiItems.length; i++) {
      LiItems[i].addEventListener("mouseover", function (e) {
        const liWidth = getComputedStyle(this).width;
        const spanBar = $("#header-section > div > nav > ul > span");
        spanBar.style.width = liWidth;
        const liFromLeft = getPosition(this).x;
        spanBar.style.left = liFromLeft + "px";
        e.preventDefault();
      });
    }
    // Toggle Responsive Menu
    {
      const toggleIcon = $("#header-section i.fas.fa-bars");
      const nav = $("nav.navigation");
      const ul = nav.querySelector("ul");
      toggleIcon.addEventListener("click", function () {
        let navHeight = ul.offsetHeight + 52 + "px";
        if (!nav.offsetHeight) {
          nav.style.height = navHeight;
        } else {
          nav.style.height = 0;
        }
      });
      window.addEventListener("resize", function () {
        if (innerWidth > 1199) {
          nav.style.height = "auto";
        } else {
          nav.style.height = "0";
        }
      });
    }
  })();

  // Header Sticky
  !(function () {
    window.addEventListener("scroll", function () {
      const header = document.querySelector('#header-section');
      const banner = document.querySelector('#banner-slider');
      if (this.innerWidth > 575) {
          
      }
    });
  })();

  // Counter
  VanillaCounter();
});
