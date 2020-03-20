"use strict"

//------------------scroll to begin (wtf)
function startScroll() {
    window.scrollTo(0, 0);
}

window.setTimeout(startScroll, 100);

//-----------------scroll to sections

const arrHeaderLinks = document.querySelectorAll('.header-navigation a');
window.setTimeout(()=>{arrHeaderLinks.forEach(element => element.classList.remove('header-navigation_onclick'));
    arrHeaderLinks[0].classList.add('header-navigation_onclick');
}, 100);


document.querySelector('.header-navigation ul').onclick = function (event) {
    document.onscroll=null;
    for (let i = 0; i < arrHeaderLinks.length; i++) {
        if (event.target == arrHeaderLinks[i]) {
            arrHeaderLinks.forEach(element => element.classList.remove('header-navigation_onclick'));
            arrHeaderLinks[i].classList.add('header-navigation_onclick');
            event.preventDefault();
            if (i == 0) {
                document.querySelector('.point1').scrollIntoView({
                    block: "end",
                    inline: "nearest",
                    behavior: "smooth"
                });
            }
            if (i == 1) {
                document.querySelector('.point2').scrollIntoView({
                    block: "start",
                    inline: "nearest",
                    behavior: "smooth"
                });
            }
            if (i == 2) {
                document.querySelector('.point3').scrollIntoView({
                    block: "start",
                    inline: "nearest",
                    behavior: "smooth"
                });
            }
            if (i == 3) {
                document.querySelector('.point4').scrollIntoView({
                    block: "start",
                    inline: "nearest",
                    behavior: "smooth"
                });
            }
            if (i == 4) {
                document.querySelector('.point5').scrollIntoView({
                    block: "start",
                    inline: "nearest",
                    behavior: "smooth"
                });
            }
        }
    }

    window.setTimeout(()=>{document.onscroll=onScroll}, 1000);
    //document.onscroll=null;
}
//----menu item light depends to scroll
document.onscroll=onScroll;
    function onScroll(){
    let rect1=document.querySelector('.point1').getBoundingClientRect().y;
    let rect2=document.querySelector('.point2').getBoundingClientRect().y;
    let rect3=document.querySelector('.point3').getBoundingClientRect().y;
    let rect4=document.querySelector('.point4').getBoundingClientRect().y;
    let rect5=document.querySelector('.point5').getBoundingClientRect().y;
    let rectArr=[rect1,rect2,rect3,rect4,rect5,10000];
    for (let i=0; i<5; i++){
        if((rectArr[i]-95)<0 && (rectArr[i+1]-95)>0 ){
            arrHeaderLinks.forEach(element => element.classList.remove('header-navigation_onclick'));
            arrHeaderLinks[i].classList.add('header-navigation_onclick');
        }

    }

}



//--------------change phone pictures

document.querySelector('.mobile_vertical-unvisible').onclick = function () {
    if (document.querySelector('.mobile_vertical').getAttribute('src') == 'assets/mobile-vertical.png') {
        document.querySelector('.mobile_vertical').setAttribute('src', 'assets/phone-vert-off.png');
    } else
        document.querySelector('.mobile_vertical').setAttribute('src', 'assets/mobile-vertical.png');

}

document.querySelector('.mobile_horizontal-unvisible').onclick = function () {
    if (document.querySelector('.mobile_horizontal').getAttribute('src') == 'assets/mobile-horizontal.png') {
        document.querySelector('.mobile_horizontal').setAttribute('src', 'assets/phone-hor-off.png');
    } else
        document.querySelector('.mobile_horizontal').setAttribute('src', 'assets/mobile-horizontal.png');

}

// document.querySelector('.mobile_3item').onclick = function () {
//     if (document.querySelector('.mobile_3item').getAttribute('src') == 'assets/Slide-2-on.png') {
//         document.querySelector('.mobile_3item').setAttribute('src', 'assets/Slide-2-off.png');
//     } else
//         document.querySelector('.mobile_3item').setAttribute('src', 'assets/Slide-2-on.png');
//
// }

//------------------------carousel
//---response
let sectionWidth;
sectionWidth=getComputedStyle(document.querySelector('.section')).width.split('px')[0];
document.querySelector('.section').style.height=`${+sectionWidth*0.588}px`;
window.onresize = function( event ) {
   // console.log(sectionWidth);
    sectionWidth=getComputedStyle(document.querySelector('.section')).width.split('px')[0];
    document.querySelector('.section').style.height=`${+sectionWidth*0.588}px`;
};
//-----end response

document.querySelector('.left-btn').onclick = animateFramesLeft;
document.querySelector('.right-btn').onclick = animateFramesRight;
let firstFrameLeft;
let secondFrameLeft;
let firstFrame = document.querySelector(".first__frame");
let secondFrame = document.querySelector(".second__frame");

function enableButton() {
    document.querySelector('.left-btn').style.pointerEvents = 'auto';
    document.querySelector('.right-btn').style.pointerEvents = 'auto';
}

function animateFramesLeft() {
    document.querySelector('.left-btn').style.pointerEvents = 'none';  //disable button while animate
    document.querySelector('.right-btn').style.pointerEvents = 'none';  //disable button while animate
    window.setTimeout(enableButton, 2000); //enable button after animate
    firstFrameLeft = (window.getComputedStyle(firstFrame).left.split('px'))[0];
    secondFrameLeft = (window.getComputedStyle(secondFrame).left.split('px'))[0];
//     console.log(sectionWidth+'----w');
// console.log(firstFrameLeft+' -----1');
// console.log(secondFrameLeft+'-----2');
    if (+firstFrameLeft < -10 ) firstFrameLeft = 100;  //--- -10 because
    // chrome dont want 0 )))
    if (+firstFrameLeft == 0 ) firstFrameLeft = 0;
    if (+firstFrameLeft > 10 ) firstFrameLeft = 100;
    if (+secondFrameLeft < -10) secondFrameLeft = 100;
    if (+secondFrameLeft == 0) secondFrameLeft = 0;
    if (+secondFrameLeft > 10) secondFrameLeft = 100;

    document.querySelector(".first__frame").animate([
        {left: `${+firstFrameLeft}%`},
        {left: `${+firstFrameLeft - 100}%`}
    ], {
        duration: 2000,
        easing: "cubic-bezier(.43,-0.29,.58,1.28)",
        fill: "forwards",
    });
    document.querySelector(".second__frame").animate([
        {left: `${+secondFrameLeft}%`},
        {left: `${+secondFrameLeft - 100}%`}
    ], {
        duration: 2000,
        easing: "cubic-bezier(.43,-0.29,.58,1.28)",
        fill: "forwards",
    });
}

function animateFramesRight() {
    document.querySelector('.right-btn').style.pointerEvents = 'none';  //disable button while animate
    document.querySelector('.left-btn').style.pointerEvents = 'none';  //disable button while animate
    window.setTimeout(enableButton, 2000);
    firstFrameLeft = (window.getComputedStyle(firstFrame).left.split('px'))[0];
    secondFrameLeft = (window.getComputedStyle(secondFrame).left.split('px'))[0];
    if (+firstFrameLeft < -10) firstFrameLeft = -100;
    if (+firstFrameLeft == 0) firstFrameLeft = 0;
    if (+firstFrameLeft > 10) firstFrameLeft = -100;

    if (+secondFrameLeft < -10) secondFrameLeft = -100;
    if (+secondFrameLeft == 0) secondFrameLeft = 0;
    if (+secondFrameLeft > 10) secondFrameLeft = -100;

    document.querySelector(".first__frame").animate([
        {left: `${+firstFrameLeft}%`},
        {left: `${+firstFrameLeft + 100}%`}
    ], {
        duration: 2000,
        easing: "cubic-bezier(.43,-0.29,.58,1.28)",
        fill: "forwards",
    });
    document.querySelector(".second__frame").animate([
        {left: `${+secondFrameLeft}%`},
        {left: `${+secondFrameLeft + 100}%`}
    ], {
        duration: 2000,
        easing: "cubic-bezier(.43,-0.29,.58,1.28)",
        fill: "forwards",
    });
}

//------------------------end carousel
//----------------change gallery
const arrGalleryPicturesLinks = document.querySelectorAll('.gallery img');
//const arrGalleryPicturesSrc = [];
//arrGalleryPicturesLinks.forEach(element =>
// arrGalleryPicturesSrc.push(element.getAttribute('src')));
//console.log(arrGalleryPicturesSrc);
// function makeRandomArr(a, b) {
//     return Math.random() - 0.5;
// }
//
// const randomArr1 = arrGalleryPicturesSrc.sort(makeRandomArr).slice(0); //slice(0) create a new copy of array with a new link
// const randomArr2 = arrGalleryPicturesSrc.sort(makeRandomArr).slice(0);
// const randomArr3 = arrGalleryPicturesSrc.sort(makeRandomArr).slice(0);
// const randomArr4 = arrGalleryPicturesSrc.sort(makeRandomArr).slice(0);

const arrGalleryLinks = document.querySelectorAll('.gallery-buttons button');

const randomArr1 = ["assets/s2-smile.jpg", "assets/s2-black.jpg",
    "assets/s2-robot.jpg", "assets/s2-animals.jpg", "assets/s2-sdk.jpg", "assets/s2-robots.jpg",
    "assets/s2-birds.jpg", "assets/s2-beast.jpg", "assets/s2-words.jpg", "assets/s2-beast2.jpg",
    "assets/s2-abstract.jpg", "assets/s2-ship.jpg"];
const randomArr2 = ["assets/s2-black.jpg",
    "assets/s2-robot.jpg", "assets/s2-animals.jpg", "assets/s2-sdk.jpg", "assets/s2-robots.jpg",
    "assets/s2-birds.jpg", "assets/s2-beast.jpg", "assets/s2-words.jpg", "assets/s2-beast2.jpg",
    "assets/s2-abstract.jpg", "assets/s2-ship.jpg", "assets/s2-smile.jpg"];
const randomArr3 = ["assets/s2-robot.jpg", "assets/s2-animals.jpg", "assets/s2-sdk.jpg", "assets/s2-robots.jpg",
    "assets/s2-birds.jpg", "assets/s2-beast.jpg", "assets/s2-words.jpg", "assets/s2-beast2.jpg",
    "assets/s2-abstract.jpg", "assets/s2-ship.jpg", "assets/s2-smile.jpg", "assets/s2-black.jpg"];
const randomArr4 = ["assets/s2-animals.jpg", "assets/s2-sdk.jpg", "assets/s2-robots.jpg",
    "assets/s2-birds.jpg", "assets/s2-beast.jpg", "assets/s2-words.jpg", "assets/s2-beast2.jpg",
    "assets/s2-abstract.jpg", "assets/s2-ship.jpg", "assets/s2-smile.jpg", "assets/s2-black.jpg",
    "assets/s2-robot.jpg"];

document.querySelector('.gallery-buttons').onclick = function (event) {
    event.preventDefault();
    for (let i = 0; i < arrGalleryLinks.length; i++) {
        if (event.target == arrGalleryLinks[i]) {
            arrGalleryPicturesLinks.forEach(element => element.classList.remove('gallery-img_onclick'));
            arrGalleryLinks.forEach(element => element.classList.remove('gallery-button_onclick'));
            arrGalleryLinks[i].classList.add('gallery-button_onclick');
            if (i == 0) {
                for (let j = 0; j < 12; j++) {
                    arrGalleryPicturesLinks[j].setAttribute('src', randomArr1[j]);
                }
            }
            if (i == 1) {
                for (let j = 0; j < 12; j++) {
                    arrGalleryPicturesLinks[j].setAttribute('src', randomArr2[j]);
                }
            }
            if (i == 2) {
                for (let j = 0; j < 12; j++) {
                    arrGalleryPicturesLinks[j].setAttribute('src', randomArr3[j]);
                }
            }
            if (i == 3) {
                for (let j = 0; j < 12; j++) {
                    arrGalleryPicturesLinks[j].setAttribute('src', randomArr4[j]);
                }
            }
        }
    }
}

document.querySelector('.gallery').onclick = function (event) {
    for (let i = 0; i < arrGalleryPicturesLinks.length; i++) {
        if (event.target == arrGalleryPicturesLinks[i]) {
            //console.log(event.target);
            arrGalleryPicturesLinks.forEach(element => element.classList.remove('gallery-img_onclick'));
            arrGalleryPicturesLinks[i].classList.add('gallery-img_onclick');
        }
    }
}


//---------------------form submit

document.querySelector('form').onsubmit = function (event) {
    event.preventDefault();
    const formA = document.forms[0];
    const subjectMessage = formA.elements.subject.value ? formA.elements.subject.value : '';
    const subjectMessageStrong = formA.elements.subject.value ? 'Subject: ' : 'Without' +
        ' subject';
    const descriptionMessage = formA.elements.detail.value ? formA.elements.detail.value : '';
    const descriptionMessageStrong = formA.elements.detail.value ? 'Description: ' : 'Without' +
        ' description';
if(!document.querySelector('.form-modal-wrapper')) {
    formA.insertAdjacentHTML("afterbegin", `<div class="form-modal-wrapper">
    <div class="form-modal">
    <p style="color: #d6564f"><strong>The letter was sent</strong></p>
    <p><strong>${subjectMessageStrong}</strong> ${subjectMessage}</p>
    <p><strong>${descriptionMessageStrong}</strong> ${descriptionMessage}</p>
    </div>
    <button class="modal-button">ok</button>
  </div>`);
    document.querySelector(".form-modal-wrapper").animate([
        {opacity: `0`},
        {opacity: `1`}
    ], {
        duration: 1000,
        easing: "linear",
        fill: "forwards",
    });
}
    document.querySelector(".modal-button").onclick = function (event) {
        document.querySelector(".form-modal-wrapper").remove();
        document.querySelector('form').reset()

    }
}

//--------------------hamburger
document.querySelector('.hamburger').onclick = function(event){
    //console.log(event.target);
    //this.rotate(90);
   this.classList.toggle('rotate');
   document.querySelector('.logo a').classList.toggle('move-left');
   //document.querySelector('.logo').classList.toggle('move-left-logo');
   document.querySelector('.nav-mobile').classList.toggle('nav-mobile__visible');
   document.querySelector('.mega-wrapper').classList.toggle('mega-wrapper__visible');
}
