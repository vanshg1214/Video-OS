document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("mainVideo");
    const unmuteOverlay = document.getElementById("unmuteOverlay");
    const unmuteBtn = document.getElementById("unmuteBtn");

    // Fade in video once it has loaded enough data to play
    video.addEventListener("canplay", () => {
        video.classList.add("loaded");
    });

    // Fallback if video is already loaded from cache
    if (video.readyState >= 3) {
        video.classList.add("loaded");
    }

    const handleUnmute = () => {
        // Unmute the video
        video.muted = false;
        
        // Optional: restart video from beginning to ensure they see everything with sound
        // video.currentTime = 0;

        // Hide the overlay
        unmuteOverlay.classList.add("hidden");

        // Attempt to play explicitly (though it should already be playing muted)
        video.play().catch(error => {
            console.log("Play interrupted by user or browser:", error);
        });
    };

    // Allow clicking anywhere on the dark overlay or the button itself to unmute
    unmuteOverlay.addEventListener("click", handleUnmute);
});
