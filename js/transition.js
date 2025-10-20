// Fade-in + slide effect when page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    // Smooth exit + page change
    document.querySelectorAll("a").forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const target = this.href;
                document.body.classList.remove("fade-in");
                setTimeout(() => {
                    window.location.href = target;
                }, 600); // match with CSS transition duration
            });
        }
    });
});
