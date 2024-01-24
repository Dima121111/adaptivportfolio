const button = document.querySelector(".button--active")

button.addEventListener("click" , function(){
    console.log("click")
    button.classList.toggle("button--active")
    if(button.classList.contains("button--active")){
        
    }
})