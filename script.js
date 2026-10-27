/* ========================================
   THE VELVET CIRCLE - Main Script
   ======================================== */

document.addEventListener("DOMContentLoaded", function () {

  // ===== 1. AGE GATE =====
  // Agar user pehle se verify kar chuka hai (isi browser session mein)
  // to age gate mat dikhao
  const ageGate = document.getElementById("age-gate");
  const mainContent = document.getElementById("main-content");

  if (sessionStorage.getItem("ageVerified") === "true") {
    if (ageGate) ageGate.style.display = "none";
    if (mainContent) mainContent.style.display = "block";
  }

  // Enter button
  const btnEnter = document.getElementById("btn-enter");
  if (btnEnter) {
    btnEnter.addEventListener("click", function () {
      ageGate.style.transition = "opacity 0.4s ease";
      ageGate.style.opacity = "0";

      setTimeout(function () {
        ageGate.style.display = "none";
        mainContent.style.display = "block";
        // Is browser session ke liye yaad rakh lo
        sessionStorage.setItem("ageVerified", "true");
      }, 400);
    });
  }

  // Exit button → Google pe bhej do
  const btnExit = document.getElementById("btn-exit");
  if (btnExit) {
    btnExit.addEventListener("click", function () {
      window.location.href = "https://www.google.com";
    });
  }

  // ===== 2. MENU (Signature ↔ X) =====
  const menuBtn = document.getElementById("menu-btn");
  const sideMenu = document.getElementById("side-menu");
  const menuOverlay = document.getElementById("menu-overlay");

  function openMenu() {
    sideMenu.classList.add("open");
    menuOverlay.classList.add("active");
    menuBtn.classList.add("active"); // isse X dikhega
  }

  function closeMenu() {
    sideMenu.classList.remove("open");
    menuOverlay.classList.remove("active");
    menuBtn.classList.remove("active"); // isse signature pic wapas
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      // Agar menu pehle se khula hai to band karo, warna kholo
      if (sideMenu.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Overlay pe click karne se bhi menu band ho
  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenu);
  }
  const menuClose = document.getElementById("menu-close");

if (menuClose) {
  menuClose.addEventListener("click", closeMenu);
}
  // ===== 3. AUTO SCROLL =====
  // Featured Networks
  const featuredScroll = document.getElementById("featured-scroll");
  if (featuredScroll) {
    let pos = 0;
    setInterval(function () {
      pos += 280;
      if (pos >= featuredScroll.scrollWidth - featuredScroll.clientWidth) {
        pos = 0; // last tak pahunch gaya to shuru se
      }
      featuredScroll.scrollTo({ left: pos, behavior: "smooth" });
    }, 3500); // har 3.5 second
  }

  // Velvet Vixens
  const vixensScroll = document.getElementById("vixens-scroll");
  if (vixensScroll) {
    let vPos = 0;
    setInterval(function () {
      vPos += 260;
      if (vPos >= vixensScroll.scrollWidth - vixensScroll.clientWidth) {
        vPos = 0;
      }
      vixensScroll.scrollTo({ left: vPos, behavior: "smooth" });
    }, 4000);
  }

});