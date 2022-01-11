
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

function github() {
    window.open("https://github.com/dusyoo","_blank");
}
function linkedin() {
    window.open("https://www.linkedin.com/in/dustin-yoo-618a0a14b/","_blank");
}
function email() {
    window.open("mailto:dustinyoo1@gmail.com");
}



// app();