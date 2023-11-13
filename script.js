// 定義変数　document.querySelector　　　document.querySelectorでCSSを取る
let changeCarousel = document.querySelector("#carousel");
changeCarousel.innerHTML += changeCarousel.innerHTML;
let left = 0;
setInterval(function(){
    left -= 0.1;
    if (left === -(20)){
        left =0;
    }
    changeCarousel.style.left = left + "rem"
},10)
