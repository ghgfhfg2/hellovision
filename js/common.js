function show(el, dp) {
  var target = document.querySelector(el);
  dp === undefined
    ? (target.style.display = "block")
    : (target.style.display = dp);
}
function hide(el) {
  var target = document.querySelector(el);
  target.style.display = "none";
}
function toggle(el, dp) {
  var target = document.querySelector(el);
  if (target.style.display === "none") {
    dp === undefined
      ? (target.style.display = "block")
      : (target.style.display = dp);
  } else {
    target.style.display = "none";
  }
}

/* tab */
function comTab(el, dp) {
  var target = document.querySelector(el);
  var tab = target.querySelectorAll(".tab-list button");
  var con = target.querySelectorAll(".tab-content");
  for (var i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function () {
      for (var j = 0; j < con.length; j++) {
        tab[j].classList.remove("on");
        con[j].style.display = "none";
      }
      var data = this.getAttribute("data-tab");
      var active = document.querySelector(data);
      this.classList.add("on");
      dp === undefined
        ? (active.style.display = "block")
        : (active.style.display = dp);
    });
  }
}
