// let leftButton = document.querySelector(".l-button");
// let rightButton = document.querySelector(".r-button");
// let element = document.getElementsByClassName("box");
// let edgeRight = "right-" + (element.length - 1);
// let edgeLeft = "right-0";
//
// for (let i = 0; i < element.length; i++) {
//     element[i].classList.add("right-" + i + "");
// }
// rightButton.addEventListener('click', function () {
//
//     for (let i = element.length - 1; i >= 0 ; i--) {
//
//         if (element[i].classList.contains(edgeRight)) {
//             element[i].classList.remove(edgeRight);
//             element[i].classList.add(edgeLeft);
//         } else {
//             let currentClass = element[i].classList[1];
//             element[i].classList.remove(currentClass);
//             element[i].classList.add("right-" + (parseInt(currentClass.slice(-1)) + 1));
//         }
//
//     }
// });
//
//
// leftButton.addEventListener('click', function () {
//
//     for (let i = element.length - 1; i >= 0 ; i--) {
//
//         if (element[i].classList.contains(edgeLeft)) {
//             element[i].classList.remove(edgeLeft);
//             element[i].classList.add(edgeRight);
//         } else {
//             let currentClass = element[i].classList[1];
//             element[i].classList.remove(currentClass);
//             element[i].classList.add("right-" + (parseInt(currentClass.slice(-1)) - 1));
//         }
//
//     }
// });
//





let leftButton = document.querySelector("#left");
let rightButton = document.querySelector("#right");
let element = document.getElementsByClassName("box");
let viewWindow = document.querySelector(".view-window");
let container = document.querySelector(".container");
let wrapper = document.querySelector(".wrapper");
let image = element[0].firstChild;
let clientWidth = image.clientWidth;
let clientHeight = image.clientHeight;
let viewWidth = (clientWidth + 10) * 3;
viewWindow.style.width = viewWidth + "px";
wrapper.style.width = viewWidth + 91 + "px";
container.style.height = clientHeight + "px";
container.style.width = (clientWidth + 10) * element.length + "px";
container.style.marginLeft = -(clientWidth + 10) * 2 + "px";


for (let i = 0; i < element.length; i++) {
    element[i].style.width = clientWidth + "px";

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
        let currentStyle = element[i].style;
        scaled(i, currentStyle, 2);
        if (currentStyle.transform === "translateX(" + (element.length - 1)*(clientWidth + 10) + "px)") {
            element[i].style.transform = "";
            element[i].style.display = "none";
            element[i].style.transform = "translateX(0px)";
        } else {
            let previous = parseInt(currentStyle.transform.match(/\d/g).join(""));
            element[i].style.transform = "translateX(" + (previous + clientWidth + 10) + "px)";
        }
    }
});


rightButton.addEventListener('click', function () {
    for (let i = 0; i < element.length; i++) {
        element[i].style.display = "";
    }
    for (let i = element.length - 1; i >= 0 ; i--) {
        let currentStyle = element[i].style;
        scaled(i, currentStyle, 4);
        if (currentStyle.transform === "translateX(0px)") {
            element[i].style.transform = "";
            element[i].style.display = "none";
            element[i].style.transform = "translateX(" + (element.length - 1)*(clientWidth + 10) + "px)";
        } else {
            let previous = parseInt(currentStyle.transform.match(/\d/g).join(""));
            element[i].style.transform = "translateX(" + (previous - clientWidth - 10) + "px)";
        }
    }
});

function scaled(i, currentStyle, n) {
    let image = element[i].firstChild;
    if (currentStyle.transform === "translateX(" + n*(clientWidth + 10) + "px)"){
        image.classList.remove("common-scaled");
        image.classList.add("centered-scaled");
    } else {
        image.classList.remove("centered-scaled");
        image.classList.add("common-scaled");
    }
}