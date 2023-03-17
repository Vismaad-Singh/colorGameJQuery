const buttonColours = ["red", "blue", "green", "yellow"]

var gamePattern = []

var userClickedPattern = [];


$(".btn").on("click",function (){
    const userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});



function nextSequence(){
    const randomNumber =  Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour)


$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(userChosenColour);

}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(){
    
}