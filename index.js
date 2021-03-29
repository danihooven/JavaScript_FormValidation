var form = document.getElementById("form");
var username = document.getElementById("username");
var password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    // get value, remove white space
    var usernameValue = username.value.trim();
    var passwordValue = password.value.trim();

    if(usernameValue === '' || password.value === '') {
        setErrorFor(username);
        setErrorFor(password);
        alert("Fields cannot be blank")
    } else if (usernameValue === "Starman" && passwordValue === "Bowie") {
        setSuccessFor(username);
        setSuccessFor(password);
        var playTheMusic = true;           
    } else {
        setErrorFor(username);
        setErrorFor(password);
        alert("Username is Starman \nPassword is Bowie");
    }
    
    if(playTheMusic){
        playMusic();
    }
}

function setErrorFor(input) {
    input.classList.add("error");
}

function setSuccessFor(input) {
    input.classList.remove("error");
    input.classList.add("success");
}

function playMusic() {
    var audio = new Audio("sounds/04Starman.mp3");
    audio.play();
    var submitButton = document.querySelector("button");
    submitButton.setAttribute("type", "button");
    submitButton.innerHTML="<i class='fas fa-pause fa-sm'></i>";
    submitButton.addEventListener("click", function(){
        if (audio.paused){
            audio.play();
            submitButton.innerHTML="<i class='fas fa-pause fa-sm'></i>";
        } else {
            audio.pause();
            submitButton.innerHTML="<i class='fas fa-play fa-sm'></i>";

        }
    })
    
}