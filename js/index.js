// burger menu button
const menuButton = document.querySelector("#menu")

menuButton.addEventListener("click", function () {
    const navigation = document.querySelector("nav") 
    navigation.classList.toggle("open")
})
