const initApp = () => {
  const hamgurgerBtn = document.getElementById("hamburgerButton");
  const mobileMenu = document.getElementById("mobileMenu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  hamgurgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
