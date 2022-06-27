const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn"); //by id only
const color = document.querySelector(".color"); //based on CSS selectors (class, id...)

btn.addEventListener("click", function() {
    //get random number between 0-3 color index
    const randomNumber = getRandomNumber();
   // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber]; // change background
    color.textContent = colors [randomNumber]; // change text 
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}



