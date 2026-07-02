(function () {
  "use strict";
  var D = window.GREECE;
  if (!D) return;

  // ---- helpers (shared conventions with the Spain page) ----
  function img(file){ return 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(file) + '?width=1100'; }
  function maps(q){ return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q); }
  function gsearch(q){ return 'https://www.google.com/search?q=' + encodeURIComponent(q); }
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function $(sel){ return document.querySelector(sel); }

  var pinSVG = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6E7A83" stroke-width="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';
  var webSVG = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>';
  var mapSVG = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3 3 6v15l6-3 6 3 6-3V3l-6 3-6-3z"/><path d="M9 3v15M15 6v15"/></svg>';

  function photo(file, alt, badge, badgeGold){
    return '<div class="photo">' +
      '<img src="' + img(file) + '" alt="' + esc(alt) + '" onerror="this.classList.add(\'imgfail\')">' +
      (badge ? '<div class="badge' + (badgeGold ? ' gold' : '') + '">' + badge + '</div>' : '') +
      '</div>';
  }

  // ---- Cover image strip ----
  var strip = $("#coverstrip");
  if (strip) {
    var covers = ["Sunset_in_Oia,_Santorini.jpg", "The_Parthenon_in_Athens.jpg", "Windmills_of_Mykonos.jpg"];
    strip.innerHTML = covers.map(function (f) {
      return '<div class="ph" style="background-image:url(\'' + img(f) + '\')"></div>';
    }).join("");
  }

  // ---- Itinerary days ----
  var itin = $("#itinerary");
  if (itin) {
    itin.innerHTML = D.itinerary.map(function (d) {
      var rows = d.items.map(function (it) {
        return '<li><span class="when">' + esc(it[0]) + '</span><span class="what">' + esc(it[1]) + '</span></li>';
      }).join("");
      return '<section class="day">' +
        '<hr class="divider">' +
        '<div class="dayhead"><div class="daynum">' + d.num + '</div>' +
        '<div><div class="city">' + esc(d.city) + '</div>' +
        '<h3>Day ' + d.num + ' — ' + esc(d.title) + '</h3></div></div>' +
        '<p class="theme">' + esc(d.theme) + '</p>' +
        '<ul class="sched">' + rows + '</ul>' +
        '</section>';
    }).join("");
  }

  // ---- Cities & Islands (image cards) ----
  var cities = $("#cities");
  if (cities) {
    cities.innerHTML = D.cities.map(function (c) {
      return '<div class="card">' +
        photo(c.img, c.name, esc(c.kind), true) +
        '<div class="cbody"><h4>' + esc(c.name) + '</h4><p>' + esc(c.text) + '</p></div>' +
        '</div>';
    }).join("");
  }

  // ---- Points of interest (image cards) ----
  var poi = $("#poi");
  if (poi) {
    poi.innerHTML = D.poi.map(function (p) {
      return '<div class="card">' +
        photo(p.img, p.name, esc(p.place)) +
        '<div class="cbody"><h4>' + esc(p.name) + '</h4><p>' + esc(p.text) + '</p></div>' +
        '</div>';
    }).join("");
  }

  // ---- Food (image cards) ----
  var food = $("#food");
  if (food) {
    food.innerHTML = D.food.map(function (f) {
      return '<div class="card">' +
        photo(f.img, f.name, null) +
        '<div class="cbody"><h4>' + esc(f.name) + '</h4><p>' + esc(f.text) + '</p></div>' +
        '</div>';
    }).join("");
  }

  // ---- Restaurants (photo cards with Website + Map, grouped by island) ----
  var resto = $("#restaurants");
  if (resto) {
    resto.innerHTML = D.restaurants.map(function (g) {
      var cards = g.list.map(function (r, i) {
        return '<div class="card">' +
          '<div class="photo">' +
            '<img src="' + img(r.img) + '" alt="' + esc(r.name) + '" onerror="this.classList.add(\'imgfail\')">' +
            '<div class="badge">🍽 ' + esc(r.meal) + '</div>' +
            '<div class="num">' + (i + 1) + '</div>' +
          '</div>' +
          '<div class="cbody">' +
            '<h4>' + esc(r.name) + '</h4>' +
            '<p><b style="color:#0C4E86">' + esc(r.tag) + '.</b> ' + esc(r.desc) + '</p>' +
            '<div class="addr">' + pinSVG + '<span>' + esc(r.addr) + '</span></div>' +
            '<div class="links">' +
              '<a class="lk web" href="' + gsearch(r.name + ' ' + r.addr) + '" target="_blank" rel="noopener">' + webSVG + ' Website</a>' +
              '<a class="lk map" href="' + maps(r.name + ', ' + r.addr) + '" target="_blank" rel="noopener">' + mapSVG + ' Map</a>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join("");
      var extras = (g.extras || []).map(function (e) {
        return '<span class="chip"><b>' + esc(e[0]) + '</b> · ' + esc(e[1]) + '</span>';
      }).join("");
      return '<section class="day">' +
        '<hr class="divider">' +
        '<div class="dayhead"><div class="daynum" style="font-size:22px">' + esc(g.city.slice(0, 3)) + '</div>' +
        '<div><div class="city">Where to eat</div><h3>' + esc(g.city) + ' — ' + esc(g.area) + '</h3></div></div>' +
        '<div class="cards tri">' + cards + '</div>' +
        (extras ? '<div class="extra"><h4>More good tables nearby</h4><div class="chips">' + extras + '</div></div>' : '') +
        '</section>';
    }).join("");
  }

  // ---- Tips (chips) ----
  var tips = $("#tips");
  if (tips) {
    tips.innerHTML = D.tips.map(function (t) {
      return '<span class="chip"><span class="ico">' + t.icon + '</span><b>' + esc(t.title) + '</b> · ' + esc(t.text) + '</span>';
    }).join("");
  }
})();
