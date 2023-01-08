(function () {
  var square = document.querySelector(".square");

  var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        typeof getCurrentAnimationPreference === "function" &&
        !getCurrentAnimationPreference()
      ) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add("square-animation");
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector(".squares");

  var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        typeof getCurrentAnimationPreference === "function" &&
        !getCurrentAnimationPreference()
      ) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add("square-animations");
      }
    });
  });

  observer.observe(square);
})();
