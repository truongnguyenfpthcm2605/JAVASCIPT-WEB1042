var flag= true;
var count = 0;
function mart(index) {
    var button = document.getElementsByTagName("button")[index];
    button.innerText = flag? "X":"O";
    
    button.style.backgroundColor = flag? "aqua":"yellow";
    button.disabled=true;
    
    flag =!flag;
    count++;
    if(count==8){
        alert("Game Over!");
        location.reload();
    }
}