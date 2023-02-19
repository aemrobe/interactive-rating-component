const rating = document.querySelectorAll(".rating");
const submitButton = document.querySelector(".submit-btn");
const ratingCard = document.querySelector(".card");
const thankyouCard = document.querySelector(".thankyou-card");
const ratingNumber = document.querySelector(".rate");
//function
//this will change the background of the rating buttons when they rating buttons are cliked
const addRating = function (ratingValue) {
  rating[ratingValue].classList.toggle("click");

  for (let i = 0; i < rating.length; i++) {
    if (i !== ratingValue) {
      rating[i].classList.remove("click");
    }
  }
};

//the rate buttons calling the addRating functions when they are clicked
const callingAddRatingFunction = function (ratingValue) {
  rating[ratingValue].addEventListener("click", function () {
    addRating(ratingValue);
  });
};

//adding the CallingAddRatingfunctions for all of the buttons available
for (let i = 0; i < rating.length; i++) {
  callingAddRatingFunction(i);
}

submitButton.addEventListener("click", function () {
  for (let i = 0; i < rating.length; i++) {
    if (rating[i].classList.contains("click")) {
      //removes the rating card
      ratingCard.classList.add("hidden");
      ratingNumber.textContent = i + 1;
      //display the thankyoucard
      thankyouCard.classList.remove("hidden");
    }
  }
});
