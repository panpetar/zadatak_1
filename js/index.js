// find button in DOM, attach click listener
// 

const menuButton = document.querySelector("#menu")

menuButton.addEventListener("click", function () {
    const navigation = document.querySelector("nav") 
    navigation.classList.toggle("open") // dodaj ili ukloni klasu open
})
