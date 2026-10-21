
document.addEventListener("DOMContentLoaded", () => {
    const ageGate = document.getElementById("age-gate");
    const mainContent = document.getElementById("main-content");
    const btnEnter = document.getElementById("btn-enter");
    const btnExit = document.getElementById("btn-exit");

    // Enter button click
    btnEnter.addEventListener("click", () => {
        // Fade out animation
        ageGate.style.transition = "opacity 0.5s ease";
        ageGate.style.opacity = "0";
        
        setTimeout(() => {
            ageGate.style.display = "none";
            mainContent.style.display = "block";
            // Small fade in for main content
            mainContent.style.animation = "fadeIn 1s ease";
        }, 500);
    });

    // Exit button click
    btnExit.addEventListener("click", () => {
        window.location.href = "https://www.google.com"; // Redirects away
    });

    // Auto-scroll logic for Featured Networks (Changes every 3-4 seconds)
    const scrollContainer = document.getElementById("featured-scroll");
    let scrollAmount = 0;
    
    if(scrollContainer) {
        setInterval(() => {
            scrollAmount += 300; // Scroll by one card width roughly
            if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                scrollAmount = 0; // Reset to start
            }
            scrollContainer.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        }, 4000); // 4 seconds
    }
});
