var fullname = document.getElementById("name");
var cmnd = document.getElementById("numbercmnd");
var province = document.getElementById("province");
var infor = document.getElementById("note");
var errors = "";
var result = document.getElementById("error");
 function checkform(){
     if(fullname.value == ""){
         errors += "Không được bỏ trống tên </br>";
         fullname.className="editerror";
     }else if(fullname.value.length <=3 && fullname.value.length >=30){
         errors += "Chỉ nhập tên trong khoảng 3 -30 kí tự </br>";
         fullname.className="editerror";
     }else{
         fullname.className="edit";
     }
     if(cmnd.value ==""){
         errors += "Không được bỏ trống CMND </br>";
         cmnd.className="editerror";
     }else if(cmnd.value.length != 9){
         errors += "CMMND chỉ đúng 9  số </br>";
         cmnd.className="editerror";
     }else if(isNaN(cmnd.value)==true){
        errors += "CMND phải là số </br>";
        cmnd.className="editerror";
     }else{
         cmnd.className="edit";
     }
     if(province.value ==0 ){
         errors += "Phải chọn tỉnh </br>";
         province.className = "editerror";
     }else{
         province.className="edit";
     }
     if(infor.value ==""){
         errors += "không được bỏ trống thông tin bổ sung </br>";
         infor.className ="editerror";
     }else if(infor.value.length <= 50 && infor.value.length >=1000){
         errors += "Phải nhập thông tin bổ sung trong khoảng 50 -1000 kí tự </br>";
     }


     

     if(errors != ""){
        result.innerHTML= errors;
        result.style.color="red";
        result.style.fontSize="10px";

     }else{
         result.innerHTML ="Nhập dữ liệu thành công";
         result.style.color="green";
         result.style.fontSize="10px";
     }
     setTimeout("result.innerHTML= ''",10000);
 }
