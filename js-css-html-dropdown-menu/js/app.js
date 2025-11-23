const dropdownButton = document.querySelector("nav button")
const dropdownList = document.querySelector("nav .nav-links-container")

const toggle = function(){
    dropdownList.classList.toggle('hidden')
}
dropdownButton.addEventListener('click',toggle)