// constants for query selector
const myStudentId = document.getElementById("myStudentId"); // selector for the student id 
const customNumber = document.getElementById("customNumber"); // selector for the section to input a custom number
const custColor = document.querySelector(".custColor"); // selector for the custom color button
const randColor = document.querySelector(".randColor"); // selector for the random color button
const imageSelect = document.getElementById("imageSelect"); // selector for the imageSelect options
const images = document.getElementById("images"); // selector to display images

// function to change bg color from user input and add student id
function changeCustomColor(customNumberValue) {
    var displayId = "1261276"; //my student id
    myStudentId.textContent = displayId; //display student id


    if (customNumberValue < 0 || customNumberValue > 100) { //if the number entered by the user is smaller than 0 or bigger than 100
        document.body.style.backgroundColor = "red"; // change the background color to red 
    } else if (customNumberValue >= 0 && customNumberValue < 20) { //if the number entered is between 0 and smaller than 20
        document.body.style.backgroundColor = "green"; // change the background color to green
    } else if (customNumberValue >= 20 && customNumberValue < 40) { // if the number entered is between 20 and smaller than 40
        document.body.style.backgroundColor = "blue"; // change the background color to blue
    } else if (customNumberValue >= 40 && customNumberValue < 60) { // if the number is between 40 and smaller than 60
        document.body.style.backgroundColor = "orange"; // change the background color to orange
    } else if (customNumberValue >= 60 && customNumberValue < 80) { // if the number is between 60 and smaller than 80
        document.body.style.backgroundColor = "purple"; // change the background color to purple
    } else if (customNumberValue >= 80 && customNumberValue <= 100) { //if the number is between 80 and 100
        document.body.style.backgroundColor = "yellow"; // change the background color to yellow
    } 

}

// function to change bg color from random no.
function changeRandomColor() {

    function getRandomCustomNumber() {  //function to generate random numbers from 1 to 100
        return Math.floor(Math.random() * 101); 
    }

    var randomCustomNumber = getRandomCustomNumber(); // make a variable equal to a randomly generated number
    changeCustomColor(randomCustomNumber); // use the number in the change custom color function 
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    var imagesList = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; // create an array to store the images



    if (imageSelect.length <= 1){ // do the for loop only while the options list is smaller or equal to 1
        for (let i = 0; i < imagesList.length; i++){ // loop through all the elemenst in the list

            var option = document.createElement("option"); // create the option element 
            option.value = imagesList[i]; // add the value and text content from the element in the array to the option element
            option.textContent = imagesList[i];
            imageSelect.appendChild(option); // add the option to the select menu 

        }
    }

    



}

// function to change image
function changeImage() {

    imageValue = imageSelect.value; 
    images.src = "img/" + imageValue; // add the source of the image from the img folder

}

// event listeners for on click event of buttons and select
custColor.addEventListener("click", function(){ // use the custom color function
    changeCustomColor(customNumber.value);
}); 
randColor.addEventListener("click", changeRandomColor); // use the random color function

// event listeners for on change event of select
imageSelect.addEventListener("click", addList); // use the addlist and chnageimage function
imageSelect.addEventListener("click", changeImage);