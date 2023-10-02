btnColors = ["red", "blue", "green", "yellow"];

let next = () => Math.floor(Math.random() * 4);

let seq = [];

//TODO: Flashing animation on click and sounds

$(".btn").on("click", function(event) {
    let id = event.target.id;
    $("#" + id).fadeOut(10).fadeIn(10);
    let audio = new Audio("sounds/" + id + ".mp3");
    audio.play();
})