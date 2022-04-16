function them(button) {
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnxoa = row.getElementsByTagName("button")[0];
    btnxoa.innerText = "Xóa";
    btnxoa.setAttribute('onclick','xoa(this)');
    document.getElementById("card").appendChild(row);
    tinhtong();
    document.getElementById("hien").style.display="";
  
}
function xoa(button) {
    var row = button.parentElement.parentElement;
    document.getElementById("card").removeChild(row);
    tinhtong();

}
function tinhtong() {
    var card = document.getElementById("card");
    var rows = card.getElementsByTagName("tr");
    var sum =0;
    for(var i  = 0;i< rows.length;i++){
        var price = rows[i].children[2].innerText;
        price = parseInt(price);
        sum+= price;
    }
    document.getElementById("money").innerHTML = sum;
  

}
function chechked(button) {
    var row = button.parentElement.parentElement;
    var bntxoa = row.getElementsByTagName("button")[0];
    bntxoa.disabled = !bntxoa.disabled;
}
document.getElementById("hien").style.display="none";

