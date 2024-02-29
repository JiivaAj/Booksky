//selecting popup box , popup overlay ,button
let popupoverlay = document.querySelector(".popup-overlay")
let popupbox = document.querySelector(".popup-box")
let addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


//Select Cancel button and Preventing the Default Submit button
let cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
   event.preventDefault()
   popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container ,add-book,book-title-input,"book-author-input,book-description-input

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")


addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${ booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>
      ${bookdescriptioninput.value}
    </p>
    <button onclick="deletebook(event)">Delete</button>`
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    
    container.append(div)
})


function deletebook(event)
{
   event.target.parentElement.remove()
}