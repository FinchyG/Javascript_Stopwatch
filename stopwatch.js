var seconds = 55;
var minutes = 0;

function myCounter() {

    minutes = parseInt(minutes);
    minutes = seconds > 59 ? minutes + 1 : minutes;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    seconds = seconds > 59 ? "0" + 0 : seconds;

    document.getElementById("watch_display").innerHTML = minutes + ":" + seconds;
    seconds++;

}

function reset() {

    location.reload();

}

function split() {

    var split_time = document.getElementById("watch_display").textContent;
    var ul         = document.getElementById("splits");
    var li         = document.createElement("li");
    
    li.appendChild(document.createTextNode(split_time));
    ul.appendChild(li);
    
}