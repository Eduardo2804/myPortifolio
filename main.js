/*----MENU SHOWING AND HIDDEN */

const navMenu = document.getElementById("nav-menu");
toggleMenu = document.getElementById("nav-toggle");
closeMenu = document.getElementById("nav-close");


/*----SHOW----*/
toggleMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show")
})

/*----HIDDEN----*/
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("show")
})

/*----REMOVE MENU---- */

const navLink = document.querySelectorAll(".nav-link")

function linkAction() {
    navMenu.classList.remove("show")
}

navLink.forEach(n => n.addEventListener("click", linkAction))


/*----SCROOL SELECT FUNCTIONS---- */

const selections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", scrollActive)

function scrollActive(){

    const scrolly = window.pageXOffset

    selections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute("id")

        if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight){
            document.querySelector(".nav_menu a[href*=" + selectId + "]" ).classList.add("active")

        }else {
            document.querySelector(".nav_menu a[href*=" + selectId + "]" ).classList.remove("active")
        }
    })
}
