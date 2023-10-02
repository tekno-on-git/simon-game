btnColors = ["red", "blue", "green", "yellow"];

let rand = () => Math.floor(Math.random() * 4);

let seq = [];
let userSeq = [];

let keypressed = false;

//create seq
function nextSeq() {
    let randomChoosenColor = btnColors[rand()];
    seq.push(randomChoosenColor);
    $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColor);
    $("h1").text("Level " + seq.length)

}

//key press for first seq
$(document).on("keypress", function() {
    if (!keypressed) {
        keypressed = !keypressed;
        nextSeq();
    }
})


$(".btn").on("click", function(event) {


    if (!keypressed) {
        return;
    }
    let randColor = event.target.id;
    userSeq.push(randColor);
    $("#" + randColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randColor);
    //logic to catch wrong :
    // us[us.l - 1] != seq[us.l - 1] -> wrongState()
    // us[us.l - 1] == seq[us.l - 1] -> right

    if (userSeq[userSeq.length - 1] != seq[userSeq.length - 1]) {
        wrongState();
        return;
    }

    //us.l == seq.l -> nextSeq()
    if (userSeq.length == seq.length) {
        userSeq.length = 0;
        setTimeout(nextSeq, 1000);
        return;
    }
})

function playSound(key) {
    let audio = new Audio("sounds/" + key + ".mp3");
    audio.play();
}

function wrongState() {
    seq.length = 0;
    userSeq.length = 0;
    playSound("wrong");
    keypressed = false;
    $("h1").text("Game over, Press any key to Restart.")
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 100);
}