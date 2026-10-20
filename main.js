(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var isDark = theme === "dark";
    button.textContent = isDark ? "Light mode" : "Dark mode";
    button.setAttribute("aria-pressed", String(isDark));
    localStorage.setItem("theme", theme);
  }

  apply(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

  button.addEventListener("click", function () {
    apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
})();
