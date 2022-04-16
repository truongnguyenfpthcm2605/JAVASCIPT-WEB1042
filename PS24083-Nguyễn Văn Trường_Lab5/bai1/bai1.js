function show(){
    var nameproduct = document.getElementById("nametext").innerHTML;
    var amountproduct = document.getElementById("sl").value;
    var priceproduct = document.getElementById("pro").getAttribute("data-price");
    var summonmey = priceproduct*amountproduct;

    document.getElementById("name").innerHTML = nameproduct;
    document.getElementById("amount").innerHTML = summonmey;
}
var image = [
    "ip13.jpg",
    "ip14.png",
    "iphone15.jpg"
];
var slide = document.querySelector("img");
var i =0;
function next() {
    i++;
    if(i>=image.length) i=0;
     slide.src=image[i];
    
   
    
}
function  back() {
    i--;
    if(i<0) i=image.length-1;
    slide.src=image[i];
   
}
//  setInterval("next()",2000);