# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

A,mobile view of my solution
![](./screenshot%20of%20my%20solution/mobile-view-interactive-rating-comment-challenge.png)

A,desktop view of my solution
![](./screenshot%20of%20my%20solution/desktop-view-interactive-rating-comment-challenge.png)

### Links

- Solution URL: [solution URL](https://www.frontendmentor.io/solutions/interactive-rating-comment-using-flexbox-2tIRvU3tJR)
- Live Site URL: [live site URL](https://aemrobe.github.io/interactive-rating-component/?#)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

in this challenge I have learned that how to add a background on the button which is clicked while keeping the background color of other buttons not displayed.

inorder to make this the code which plays a huge role was this one.

```js
//select elements
const rating = document.querySelectorAll(".rating");
//first I have assigned a variable which is called rating for the buttons so when I want to use any javascript code on the buttons I will use the variable
//but this variable is like an array since the buttons have the same class which is called .rating inorder to select each buttons
// we have to specify the index after the name of the variable like an array.
// forinstance if we want to  select the first button we have to write like this rating[0] 
//(since all array contains an index  which starts with 0 up to the "array lenghth - 1")

//function : this function will add the click class on the rating button 
//which is called for at the same time while removing the click class from the rest of the buttons.
const addRating = function (ratingValue) {
  //when we use toggle method on the rating button it will remove the class
// which is specified as an argument ("click" -> argument) if the rating button include the class at the begining or it will add
// the class which is specified as an argument if rating button doesn't contain it at first place in each function call.
  rating[ratingValue].classList.toggle("click");

  for (let i = 0; i < rating.length; i++) {
    //this will remove the click class from all the buttons which this function arenot called for. 
//forinstance if this fucntion is called with an argument "0" it will remove the click class from the rating buttons (rating[1],rating[2]...rating[rating.length - 1])
    if (i !== ratingValue) {
      rating[i].classList.remove("click");
    }
  }
};

//function: this functin  calls the addRating function when each button is clicked
const callingAddRatingFunction = function (ratingValue) {
  rating[ratingValue].addEventListener("click", function () {
    addRating(ratingValue);
  });
};

//exceuting the callingAddRatingFunction with an argument 0 upto the length of the rating array minus one.
//this will make the callingAddRatingFunction to call the addRating 
when all the rating button clicked which have an index 0 upto the "rating.length - 1"
for (let i = 0; i < rating.length; i++) {
  callingAddRatingFunction(i);
}
```

### Continued development

starting from this challenge I will mainly focus on the challenges which make me to understand how javascript works because now I am studying javascript and I will keep work mainly on the challenge which involve javascript but together with that I will keep reinforcing my css skills too.

### Useful resources

-[the complete javascript course from zero to expert course](https://www.udemy.com/course/the-complete-javascript-course/) -
I recommend you to see the complete javascript course from zero to expert course by jonas schmedtmann. without his course I couldn't accomplish this challenge because I learned the fundamental of javascript and few lesson of how dom works then by these only two of them I could accomplish it and I will keep learning js from that course now.

## Author

-Frontend Mentor - [@aemrobe](https://www.frontendmentor.io/profile/aemrobe)
-Twitter - [@Aemro112](https://www.twitter.com/Aemro112)

## Acknowledgments

I really want to give acknowlege for my teammates who always give me advice when I am stuck on something during the challenge and also for the member of the frontendmentor community.
