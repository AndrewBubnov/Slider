let leftButton = document.querySelector(".l-button");
let rightButton = document.querySelector(".r-button");
let element = document.getElementsByClassName("box");
let clientWidth = element[0].clientWidth;



for (let i = 0; i < element.length; i++) {
    element[i].style.transform = "translateX(" + i*(clientWidth + 10) + "px)";
    let image = element[i].firstChild;
    if (i !== 3){
        image.classList.add("common-scaled");
    } else image.classList.add("centered-scaled");
}

leftButton.addEventListener('click', function () {
    for (let i = 0; i < element.length; i++) {
        element[i].style.display = "";
    }
    for (let i = element.length - 1; i >= 0 ; i--) {
        let currentStyle = element[i].getAttribute("style");
        scaled(i, currentStyle, 2);
        if (currentStyle === "transform: translateX(" + (element.length - 1)*(clientWidth + 10) + "px);") {
            element[i].style.transform = "";
            element[i].style.display = "none";
            element[i].style.transform = "translateX(0px)";
        } else {
            let previous = parseInt(currentStyle.match(/\d/g).join(""));

            element[i].style.transform = "translateX(" + (previous + clientWidth + 10) + "px)";
        }

    }
});


rightButton.addEventListener('click', function () {
    for (let i = 0; i < element.length; i++) {
        element[i].style.display = "";
    }
    for (let i = element.length - 1; i >= 0 ; i--) {
        let currentStyle = element[i].getAttribute("style");
        scaled(i, currentStyle, 4);
        if (currentStyle === "transform: translateX(0px);") {
            element[i].style.transform = "";
            element[i].style.display = "none";
            element[i].style.transform = "translateX(" + (element.length - 1)*(clientWidth + 10) + "px)";
        } else {
            let previous = parseInt(currentStyle.match(/\d/g).join(""));
            element[i].style.transform = "translateX(" + (previous - clientWidth - 10) + "px)";
        }

    }
});

function scaled(i, currentStyle, n) {
    let image = element[i].firstChild;
    if (currentStyle === "transform: translateX(" + n*(clientWidth + 10) + "px);"){
        image.classList.remove("common-scaled");
        image.classList.add("centered-scaled");
    } else {
        image.classList.remove("centered-scaled");
        image.classList.add("common-scaled");
    }
}