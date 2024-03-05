// Function to open YouTube video modal
function openYouTubeModal() {
  document.getElementById("youtubeModal").style.display = "block";
}

// Function to close YouTube video modal
function closeYouTubeModal() {
  player.stopVideo(); // Stop the video
  document.getElementById("youtubeModal").style.display = "none";
}

// Delay opening the YouTube video after 4 seconds
setTimeout(openYouTubeModal, 2000); // 4000 milliseconds = 4 seconds

// Load the YouTube Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "315",

    videoId: "ANeBrncHAJE",
    playerVars: {
      autoplay: 1, // Autoplay the video
      controls: 1, // Show video controls
      loop: 0, // Do not loop the video
      rel: 0, // Do not show related videos
      fs: 1, // Show fullscreen button
      modestbranding: 1, // Hide YouTube logo
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  // You can do any additional customization here
}
