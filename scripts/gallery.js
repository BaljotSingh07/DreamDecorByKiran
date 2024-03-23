const tagToImageMap = {
    jaggo : 'https://res.cloudinary.com/dngcd7taz/image/upload/v1711137645/samples/Pinder_Priya/ipkk3nai2qaximufplwu.jpg',
    haldi : 'https://res.cloudinary.com/dngcd7taz/image/upload/v1711137644/samples/Pinder_Priya/boga0paxcwlqkfuolbax.jpg',
    mehndi : 'https://res.cloudinary.com/dngcd7taz/image/upload/v1711137644/samples/Pinder_Priya/boga0paxcwlqkfuolbax.jpg',
    wedding : 'https://res.cloudinary.com/dngcd7taz/image/upload/v1711124041/samples/Sukhu_Kanu/okfmnnajeec41xa2ziua.jpg',
    reception : 'https://res.cloudinary.com/dngcd7taz/image/upload/v1711123476/samples/Sukhu_Kanu/axxsvcsn1xyaw05graiv.jpg', 
}


window.addEventListener('load', function () {
    var myGallery;
    var currentActiveButton = document.querySelector("[data-gallery-list='jaggo']");
    const heroImage = document.getElementById('hero-image')
    currentActiveButton.classList.toggle("active-button");
    myGallery = renderGallery("jaggo")

    //add click handler on gallery buttons
    const galleryButtons = this.document.getElementById('gallery-buttons');
    galleryButtons.childNodes.forEach(button => {
        button.addEventListener('click', (b) => {
            //clear previous active button and destory previous gallery
            // myGallery.destroy();
            currentActiveButton.classList.toggle("active-button")

            const buttonDataset = b.target.dataset.galleryList
            heroImage.setAttribute('src', tagToImageMap[buttonDataset])
            
            currentActiveButton = document.querySelector(`[data-gallery-list='${buttonDataset}']`);
            currentActiveButton.classList.toggle("active-button")
            myGallery.update({
                mediaAssets: [{ tag: buttonDataset }]
              });
        })
        
    });
});

function renderGallery(tag){
    const gallery= cloudinary.galleryWidget({
        container: "#gallery-div",
        cloudName: "dngcd7taz",
        mediaAssets: [
          {tag: tag}, // by default mediaType: "image"
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
            "steps": 3,
        },
      });
      
      gallery.render();
      return gallery;
}

