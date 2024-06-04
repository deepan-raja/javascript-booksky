var button=document.getElementById("add-popup-button")
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
button.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancelpopup = document.getElementById("popup-cancel")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
      
})
//selecting
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var titleinput=document.getElementById("book-title-input")
var authorinput=document.getElementById("book-author-input")
var descriptioninput=document.getElementById("description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${titleinput.value}</h2>
    <h5>${authorinput.value}</h5>
    <p>${descriptioninput.value}</p>
    <button onclick="deletebook(event)">delete</button>`

    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}


