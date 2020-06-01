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