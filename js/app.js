function over(element) {
    element.style.backgroundColor = "#FC4A1A";
    element.style.borderRadius = "8px";
}

function out(element) {
    element.style.backgroundColor = "#F7B733";
}

function show(item) {
    var show = document.getElementById(item);
    var hello = document.getElementById("hello");
    hello.style.display = "none";
    show.classList.toggle("hide");
    show.scrollIntoView(true);
}

// 文字動畫效果
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({
        loop: true
    })
    .add({
        targets: '.ml10 .letter',
        rotateY: [-90, 0],
        duration: 1500,
        delay: (el, i) => 45 * i
    }).add({
        targets: '.ml10',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 3500
    });