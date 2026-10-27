document.addEventListener("DOMContentLoaded", () => {
  const ageGate = document.getElementById("age-gate");
  const mainContent = document.getElementById("main-content");
  const btnEnter = document.getElementById("btn-enter");
  const btnExit = document.getElementById("btn-exit");
  const menuBtn = document.getElementById("menu-btn");
  const sideMenu = document.getElementById("side-menu");
  const menuOverlay = document.getElementById("menu-overlay");

  // Age Gate
  if (sessionStorage.getItem("ageVerified") === "true") {
    if (ageGate) ageGate.style.display = "none";
    if (mainContent) mainContent.style.display = "block";
  }

  if (btnEnter) {
    btnEnter.addEventListener("click", () => {
      ageGate.style.transition = "opacity 0.4s ease";
      ageGate.style.opacity = "0";
      setTimeout(() => {
        ageGate.style.display = "none";
        mainContent.style.display = "block";
        sessionStorage.setItem("ageVerified", "true");
      }, 400);
    });
  }

  if (btnExit) {
    btnExit.addEventListener("click", () => {
      window.location.href = "https://www.google.com";
    });
  }

  // Menu Toggle (Signature ↔ X)
  function openMenu() {
    sideMenu.classList.add("open");
    menuOverlay.classList.add("active");
    menuBtn.classList.add("active");
  }

  function closeMenu() {
    sideMenu.classList.remove("open");
    menuOverlay.classList.remove("active");
    menuBtn.classList.remove("active");
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      if (sideMenu.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenu);
  }

  // Auto scroll for Featured Networks
  const featuredScroll = document.getElementById("featured-scroll");
  if (featuredScroll) {
    let scrollPos = 0;
    setInterval(() => {
      scrollPos += 280;
      if (scrollPos >= featuredScroll.scrollWidth - featuredScroll.clientWidth) {
        scrollPos = 0;
      }
      featuredScroll.scrollTo({ left: scrollPos, behavior: "smooth" });
    }, 3500);
  }

  // Auto scroll for Velvet Vixens
  const vixensScroll = document.getElementById("vixens-scroll");
  if (vixensScroll) {
    let vPos = 0;
    setInterval(() => {
      vPos += 260;
      if (vPos >= vixensScroll.scrollWidth - vixensScroll.clientWidth) {
        vPos = 0;
      }
      vixensScroll.scrollTo({ left: vPos, behavior: "smooth" });
    }, 4000);
  }
});