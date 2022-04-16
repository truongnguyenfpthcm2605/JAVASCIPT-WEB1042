var arrimg =[];
var img ="";
for(var i =1;i<= 20;i++){
    img = `image/${i}.png`;
    arrimg.push(img);
}
arrimg.forEach(function(o){
    console.log(o);
});
var index =0;
function next(){
    index++;
    if(index >=  arrimg.length) index=0;
    var next = document.querySelector("img");
    next.src = arrimg[index];
    
    
}
function reverse(){
    index--;
    if(index <0) index= arrimg.length-1;
    var next = document.querySelector("img");
    next.src = arrimg[index];
    
    
}
function nextend(){
    var next = document.querySelector("img");
    next.src = arrimg[arrimg.length-1];
}
function reversestar(){
    var next = document.querySelector("img");
    next.src = arrimg[0];
}
