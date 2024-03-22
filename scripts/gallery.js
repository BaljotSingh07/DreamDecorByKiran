window.addEventListener('load', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var currentGallery = urlParams.get('list')
    if(currentGallery == null){
        currentGallery = "haldi";
    }
    const currentGalleryButton = document.querySelector(`[data-gallery-list='${currentGallery}']`);
    currentGalleryButton.classList.toggle("active-button")

    //add click handler on gallery buttons
    const galleryButtons = this.document.getElementById('gallery-buttons');
    galleryButtons.childNodes.forEach(button => {
        button.addEventListener('click', (b) => {
            const buttonDataset = b.target.dataset.galleryList
            window.location.href = `gallery.html?list=${buttonDataset}`
        })
    });

    const myGallery= cloudinary.galleryWidget({
        container: "#gallery-div",
        cloudName: "dngcd7taz",
        mediaAssets: [
          {tag: currentGallery}, // by default mediaType: "image"
        ],
        aspectRatio: "1:1",
        displayProps: {
            "mode": "expanded",
            "columns": 3,
            "spacing": 15
        },
        
        transformation: {
            "crop": "fill",
        },
        zoomProps: {
            "type": "popup",
            "steps": 3
        },
        
      });
      
      myGallery.render();
});