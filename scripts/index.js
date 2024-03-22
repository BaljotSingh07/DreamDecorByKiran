var googleReviews = [
    {
        review : `Kiran was amazing! She decorated for our wedding and reception. 
                She and her staff were efficient and organized. She was easy to work with and helpful with suggestions, 
                super sweet and friendly too. I would recommend her to anyone looking for a reliable and creative decorator!`,
        name: "Kalyani Sonarikar"
    },
    {
        review: `Kiran is just sooooo amazing to work with! She is creative and she works very hard to make sure your vision comes to life! 
                Dream decor did all of our events and each event 
                was unique and beautiful because of this amazing crew! Just an amazing experience with dream decor team! Dream Team ♥️`,
        name: "Sukhu R"
    },
    {
        review: `Kiran decorated the reception hall for our wedding. She was wonderful to work with throughout the entire planning process, and she is so good at what she does! Everything was absolutely gorgeous 
                and turned out even better than we could have wished for. We're so grateful for the experience and would most definitely recommend Kiran for any event you need decorating for!
                 She'll truly make the event elegant, memorable, and beautiful!`,
        name: "Loren Arnold"
    },
    {
        review: `Kiran was such a pleasure to work with. She was very clear about all aspects of her work, provided useful decor advice, and was familiar with the venues we used. 
                She went above and beyond to help out and worked around our schedule. I would highly recommend her to any future bride!`,
        name: "Navkiran Gill"
    }
]

window.addEventListener('load', function () {
    var currentReview = 0;
    var reviewText = this.document.getElementById("google-review");

    //populate the pagination
    var paginationDiv = this.document.getElementById("review-pagination");
    googleReviews.forEach(review => {
        paginationDiv.appendChild(this.document.createElement("div"))
    });
    
    this.setInterval(() => {
        reviewText.innerHTML = googleReviews[currentReview].review + `<span style="font-weight: bold;">- ${googleReviews[currentReview].name}</span>`;
        paginationDiv.children[currentReview].classList.toggle('current-review');
        var previousReivew = currentReview - 1;
        if(previousReivew < 0){
            previousReivew = googleReviews.length - 1;
        }
        paginationDiv.children[previousReivew].classList.remove('current-review');
        currentReview = currentReview + 1;
        if(currentReview >= googleReviews.length){
            currentReview = 0;
        }
      }, 8000);
      
      
})

