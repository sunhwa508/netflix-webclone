// function scrollAppear(){
//     var nav = document.querySelector('nav');
//     var introPosition = nav.getBoundingClientRect();
//     console.log(introPosition.top);

// if(introPosition.top > -20){
//     nav.style.backgroundColor ='black';
//     nav.style.position = 'sticky';
//     nav.style.transition =' all 1s ease';
// }else if(introPosition.top <-20){
//     nav.style.backgroundColor ='black';
//     nav.style.position = 'relative';
//     }
// }


const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `img/bg${imgNumber + 1}.jpg`;
    image.classList.add("bg");
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function bgChange(){
    const randomNumber= genRandom();
    paintImage(randomNumber);
}
bgChange();



function navChange(){
    var nav = document.querySelector('nav');
    if(this.scrollY > this.innerHeight / 10){
        nav.classList.add('nav-appear')
    }else{
        nav.classList.remove('nav-appear')
    }
}



window.addEventListener('scroll',navChange);

// window.addEventListener("click",prevent);

// function prevent(event){
//     event.preventDefault();
// }

const myinfo = document.querySelector('.myinfo');
