// Function to open the video modal
function playVideo() {
  var modal = document.getElementById("video-modal");
  var video = document.getElementById("demo-video");
  modal.style.display = "block";
  video.play();
}

// Function to close the video modal
function closeVideoModal() {
  var modal = document.getElementById("video-modal");
  var video = document.getElementById("demo-video");
  modal.style.display = "none";
  video.pause();
}
window.addEventListener('scroll', function() {
  var footer = document.querySelector('footer');
  var windowHeight = window.innerHeight;
  var bodyHeight = document.body.offsetHeight;
  var scrollY = window.scrollY || window.pageYOffset;

  if ((windowHeight + scrollY) >= bodyHeight) {
      footer.style.position = 'absolute';
      footer.style.bottom = '0';
  } else {
      footer.style.position = 'fixed';
      footer.style.bottom = '0';
  }
});