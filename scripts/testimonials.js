window.addEventListener("load", async function () {
  //renderGallery("testimonial");
  const vidoes = this.document.querySelectorAll("video")
  vidoes.forEach(video => {
    video.addEventListener("click", (v) => {
      pauseAllVidos(vidoes);
      const isVideoPlaying = v => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
      if(isVideoPlaying ){
        v.currentTarget.pause();
      }else{
        v.currentTarget.play();
      }
    })
  });
});

function pauseAllVidos(vidoes){
  vidoes.forEach(video => {
      video.pause();
  });
}

function renderGallery(tag) {
  const gallery = cloudinary.galleryWidget({
    container: "#gallery-div",
    cloudName: "dngcd7taz",
    mediaAssets: [
      { tag: tag, mediaType: "video" }, // by default mediaType: "image"
    ],
    aspectRatio: "9:16",
    displayProps: {
      mode: "expanded",
      columns: 3,
      spacing: 15,
    },
    
  });

  gallery.render();
  return gallery;
}
