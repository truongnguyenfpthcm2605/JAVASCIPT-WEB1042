var names = document.getElementById("nameproduct");
var product = document.getElementById("choice");
var price = document.getElementById("price");
var checkedone = document.getElementById("hereone");
var checkedtwo = document.getElementById("heretwo");
var error = "";
var result = document.getElementById("result");
var transport = document.getElementById("transportfee");
function check() {
   if(names.value =="") {
       error += "Không được bỏ trống tên sản phẩm <br>";
       names.className ="errors";
   }else if(names.value.length > 30){
       error += "Tên sản phẩm không được nhập quá 30 kí tự <br> ";
       names.className= "errors";
   }
   else{
    names.className= "edit"; 
   }
   if(product.value == 0){
       error += "Hãy chọn loại sản phẩm </br>";
       product.className="errors";
   }
   else{
       product.className="edit";
   }
   if( price.value ==""){
       error += "Không được để trống đơn giá </br>";
       price.className="errors"
   }else if(isNaN(price.value)==true || Number(price.value) < 0 ){
        error += "Phải nhập đơn giá là số dương  </br>";
        price.className ="errors";
   }else{
       price.className="edit";
   }
   if(!checkedone.checked && !checkedtwo.checked){
       error += "Vui lòng chọn nơi nhận hàng </br>";
   }
   


   if(error != ""){
   
    result.innerHTML=error;
    }else{
       
        result.innerHTML="Nhập dữ liệu thành công";
        result.style.color="green";
    }
    setTimeout("result.innerHTML= ''",10000);
    
    
   
}
function show(v){
    if(v==true){
        transport.className="show";
    }else{
        transport.className="none";
    }
}


