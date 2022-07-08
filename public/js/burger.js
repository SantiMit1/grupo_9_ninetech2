const boton = document.querySelector("#toggle-burger")
const div = document.querySelector("#burger-menu")
const menu = document.querySelector("#burger-menu ul.burger")

boton.addEventListener("click", () => {
    div.classList.toggle("active");
    menu.classList.toggle("active");
})