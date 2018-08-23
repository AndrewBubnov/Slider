
// let leftButton = document.querySelector("#left");
// let rightButton = document.querySelector("#right");
// let element = document.getElementsByClassName("box");
// let viewWindow = document.querySelector(".view-window");
// let container = document.querySelector(".container");
// let wrapper = document.querySelector(".wrapper");
// let bigPhoto = document.querySelector(".big-photo");
// let image = element[0].firstChild;
// let clientWidth = image.clientWidth;
// let clientHeight = image.clientHeight;
// let viewWidth = (clientWidth + 10) * 3;
// viewWindow.style.width = viewWidth + "px";
// wrapper.style.width = viewWidth + 91 + "px";
// container.style.height = clientHeight + "px";
// container.style.width = (clientWidth + 10) * element.length + "px";
// container.style.marginLeft = -(clientWidth + 10) * 2 + "px";
//
//
// for (let i = 0; i < element.length; i++) {
//     element[i].style.width = clientWidth + "px";
//
//     element[i].style.transform = "translateX(" + i*(clientWidth + 10) + "px)";
//     let image = element[i].firstChild;
//     if (i !== 3){
//         image.classList.add("common-scaled");
//     } else image.classList.add("centered-scaled");
// }
//
// leftButton.addEventListener('click', function () {
//     for (let i = 0; i < element.length; i++) {
//         element[i].style.display = "";
//     }
//     for (let i = element.length - 1; i >= 0 ; i--) {
//         let currentStyle = element[i].style;
//         scaled(i, currentStyle, 2);
//         if (currentStyle.transform === "translateX(" + (element.length - 1)*(clientWidth + 10) + "px)") {
//             element[i].style.transform = "";
//             element[i].style.display = "none";
//             element[i].style.transform = "translateX(0px)";
//         } else {
//             let previous = parseInt(currentStyle.transform.match(/\d/g).join(""));
//             element[i].style.transform = "translateX(" + (previous + clientWidth + 10) + "px)";
//         }
//     }
// });
//
//
// rightButton.addEventListener('click', function () {
//     for (let i = 0; i < element.length; i++) {
//         element[i].style.display = "";
//     }
//     for (let i = element.length - 1; i >= 0 ; i--) {
//         let currentStyle = element[i].style;
//         scaled(i, currentStyle, 4);
//         if (currentStyle.transform === "translateX(0px)") {
//             element[i].style.transform = "";
//             element[i].style.display = "none";
//             element[i].style.transform = "translateX(" + (element.length - 1)*(clientWidth + 10) + "px)";
//         } else {
//             let previous = parseInt(currentStyle.transform.match(/\d/g).join(""));
//             element[i].style.transform = "translateX(" + (previous - clientWidth - 10) + "px)";
//         }
//     }
// });
//
// function scaled(i, currentStyle, n) {
//     let image = element[i].firstChild;
//     if (currentStyle.transform === "translateX(" + n*(clientWidth + 10) + "px)"){
//         image.classList.remove("common-scaled");
//         image.classList.add("centered-scaled");
//     } else {
//         image.classList.remove("centered-scaled");
//         image.classList.add("common-scaled");
//     }
// }
//
//
// for (let i = 0; i < element.length; i++) {
//     element[i].addEventListener("click", function(e) {
//         let target = e.target.parentNode;
//         target.parentNode.classList.toggle('active');
//         for (let j = 0; j < element.length; j++) {
//             if (element[j] !== target.parentNode && element[j].classList.contains('active')){
//                 element[j].classList.remove('active');
//             }
//         }
//         if (!target.parentNode.classList.contains('active')){
//             bigPhoto.innerHTML = "<div class='green-circle minify'><img class='clip-circle ' src = 'img/photo-" + (i + 1) + ".jpg'></div>";
//         }
//         else bigPhoto.innerHTML = "<div class='green-circle enlarge'><img class='clip-circle ' src = 'img/photo-" + (i + 1) + ".jpg'></div>";
//     });
// }





let leftButton = document.querySelector("#left");
let rightButton = document.querySelector("#right");
let element = document.getElementsByClassName("box");
let viewWindow = document.querySelector(".view-window");
let container = document.querySelector(".container");
let wrapper = document.querySelector(".wrapper");
let bigPhoto = document.querySelector(".big-photo");
let innerWrapper = document.querySelector(".inner-wrapper");
let image = element[0].firstChild;
let clientWidth = image.clientWidth;
let clientHeight = image.clientHeight;
let viewWidth = (clientWidth + 10) * 3;
let array = [];
viewWindow.style.width = viewWidth + "px";
wrapper.style.width = viewWidth + 91 + "px";
innerWrapper.style.height = clientHeight + "px";
container.style.width = (clientWidth + 10) * element.length + "px";
container.style.marginLeft = -(clientWidth + 10) * 2 + "px";
bigPhoto.style.width = clientWidth + "px";
bigPhoto.style.height = clientHeight + "px";

for (let i = 0; i < element.length; i++) {
    element[i].style.width = clientWidth + "px";
    array[i] = i;
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
        if (array[i] === element.length - 1) {
            array[i] = 0;
            element[i].style.transform = "";
            element[i].style.display = "none";
            element[i].style.transform = "translateX(0px)";
        } else {
            array[i]++;
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
        if (array[i] === 0) {
            array[i] = element.length - 1;
            element[i].style.transform = "";
            element[i].style.display = "none";
            element[i].style.transform = "translateX(" + (element.length - 1)*(clientWidth + 10) + "px)";
        } else {
            array[i]--;
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

let shown = false;
for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function() {

        if (array[i] === 2){
            leftButton.click();
            shown = false;
        } else if (array[i] === 4) {
            rightButton.click();
            shown = false;
        }

        if (shown === true){
            bigPhoto.innerHTML = "<div class='green-circle minify'><img class='clip-circle ' src = 'img/photo-" + (i + 1) + ".jpg'></div>";
            shown = false;
        }
        else {
            bigPhoto.innerHTML = "<div class='green-circle enlarge'><img class='clip-circle ' src = 'img/photo-" + (i + 1) + ".jpg'></div>";
            shown = true;
        }
    });
}