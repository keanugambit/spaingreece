(function () {
  "use strict";
  var D = window.GREECE;
  if (!D) return;

  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  var $ = function (sel) { return document.querySelector(sel); };

  // ---- Itinerary timeline ----
  var tl = $("[data-timeline]");
  if (tl) {
    tl.innerHTML = D.itinerary.map(function (d) {
      var rows = d.items.map(function (it) {
        return '<div class="tl__row"><span class="tl__when">' + esc(it[0]) +
          '</span><span class="tl__what">' + esc(it[1]) + "</span></div>";
      }).join("");
      return '<li class="tl__item">' +
        '<div class="tl__marker"><span class="tl__num">' + d.day + "</span></div>" +
        '<div class="tl__body">' +
          '<div class="tl__head"><h4 class="tl__title">' + esc(d.title) + "</h4>" +
          '<span class="tl__tag">' + esc(d.tag) + "</span></div>" +
          rows +
        "</div></li>";
    }).join("");
  }

  // ---- Cities ----
  var cities = $("[data-cities]");
  if (cities) {
    cities.innerHTML = D.cities.map(function (c) {
      return '<article class="card">' +
        '<div class="card__emoji">' + c.emoji + "</div>" +
        '<div class="card__head"><h4>' + esc(c.name) + "</h4>" +
        '<span class="card__kind">' + esc(c.kind) + "</span></div>" +
        "<p>" + esc(c.text) + "</p></article>";
    }).join("");
  }

  // ---- Points of interest ----
  var poi = $("[data-poi]");
  if (poi) {
    poi.innerHTML = D.poi.map(function (p) {
      return '<div class="poi__item">' +
        '<div class="poi__top"><h4>' + esc(p.name) + "</h4>" +
        '<span class="poi__place">' + esc(p.place) + "</span></div>" +
        "<p>" + esc(p.text) + "</p></div>";
    }).join("");
  }

  // ---- Food ----
  var food = $("[data-food]");
  if (food) {
    food.innerHTML = D.food.map(function (f) {
      return '<div class="food__item"><h4>' + esc(f.name) + "</h4>" +
        "<p>" + esc(f.text) + "</p></div>";
    }).join("");
  }

  // ---- Restaurants ----
  var resto = $("[data-resto]");
  if (resto) {
    resto.innerHTML = D.restaurants.map(function (g) {
      var items = g.list.map(function (r) {
        return '<li class="resto__row"><span class="resto__name">' + esc(r.name) +
          '</span><span class="resto__text">' + esc(r.text) + "</span></li>";
      }).join("");
      return '<div class="resto__group"><h4 class="resto__city">' + esc(g.city) +
        '</h4><ul class="resto__list">' + items + "</ul></div>";
    }).join("");
  }

  // ---- Tips ----
  var tips = $("[data-tips]");
  if (tips) {
    tips.innerHTML = D.tips.map(function (t) {
      return '<div class="tip"><span class="tip__icon">' + t.icon + "</span>" +
        "<h4>" + esc(t.title) + "</h4><p>" + esc(t.text) + "</p></div>";
    }).join("");
  }

  // ---- Smooth scroll ----
  document.querySelectorAll("[data-scroll]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      var t = document.querySelector(a.getAttribute("href"));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth" }); }
    });
  });

  // ---- Nav shadow on scroll ----
  var nav = $("#nav");
  var onScroll = function () {
    if (nav) nav.classList.toggle("nav--solid", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Reveal on scroll ----
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".tl__item, .card, .poi__item, .food__item, .resto__group, .tip, .sec-title, .sec-sub, .trip__intro")
      .forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }
})();
