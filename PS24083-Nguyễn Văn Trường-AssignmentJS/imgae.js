

var index = 1;
function back() {
    index--;
    if (index < 1) index = 20;
    var link = document.getElementById("image");
    link.src = "image/" + index + ".png";
    document.getElementById("count").innerHTML = index + "/20";
}
function next() {
    index++;
    if (index > 20) index = 1;
    var link = document.getElementById("image");
    link.src = "image/" + index + ".png";
    document.getElementById("count").innerHTML = index + "/20";

    //  document.getElementById("image").src ="imgageArray[index];";

}
function dark(manipulation) {
    if (manipulation == "black") {
        document.getElementById("body").style.backgroundColor = "white";
    } else {

        document.getElementById("body").style.backgroundColor = "black";

    }
}
setInterval("next()", 1000);
