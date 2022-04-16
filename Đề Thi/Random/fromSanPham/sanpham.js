var tenSp = document.getElementById('tensp');
var giaSp = document.getElementById("giasp");
var xt = document.getElementById("xachtay");
var ch = document.getElementById("chinhhang");
var loaiSp = document.getElementById("loaisp");
var nsx = document.getElementsByName("loai"); // Array of all the input fields
var error = document.getElementsByName("loi"); // Array print error;
var check = true;

function checkform(){
    function nameSp(tenSp){
        if(tenSp.value.length ==" " ){
            error[0].innerHTML ="Tên sản phẩm không được để trống";
            tenSp.classname = "error";
            return false;
        }else if(tenSp.value.length <5 || tenSp.value.length >=20 ){
            error[0].innerHTML ="chỉ nhập tên sản phẩm từ 5- 20 kí tự!";
            return false;
        }else{
            error[0].innerHTML = "Thành Công!";
            tenSp.classname = "edit";
            tenSp.style.color = "green";
            return true;
        }
       
    
    }
    function priceSp(giaSp){
        if(giaSp.value.length == ""){
            error[1].innerHTML ="giá sản phẩm không được để trống";
            giaSp.classname = "error";
            return false;
        }else if(giaSp.value < 0){
            error[1].innerHTML ="giá sản phẩm phải lớn hơn 0!";
            giaSp.classname = "error";
            return false;
        }else{
            error[1].innerHTML = "Thành Công!";
            giaSp.classname = "edit";
            return true;

        }
    }
    function phanloai(xt,ch){
        if(xt.checked || ch.checked){
            error[2].innerHTML = "Thành Công!";
            return true;
        }else{
            error[2].innerHTML = "Bạn chưa chọn loại sản phẩm!";
            return false;
        }
    }
    function checkloai(loaiSp){
        if(loaiSp.value == -3){
            error[3].innerHTML ="Bạn chưa chọn loai sản phẩm!";
            loaiSp.classname = "error";
            return false;
        }else{
            error[3].innerHTML = "Thanh Công!";
            loaiSp.classname="edit";
            return true;
        }
    }
    function checknsx(nsx){
        for(var i of nsx){
            if(i.checked){
                error[4].innerHTML="Thành Công!";
                return true;
            }else{
                error[4].innerHTML="Bạn chưa chọn nhà sản xuất!";
                return false;
            }
        }
    }
    function loopError(){
        for(var i of error){
            i.innerHTML ="";
        }
    }
    nameSp(tenSp);
    priceSp(giaSp);
    phanloai(xt,ch);
    checkloai(loaiSp);
    checknsx(nsx);
    var a = nameSp(tenSp);
    var b = priceSp(giaSp);
    var c = phanloai(xt,ch);
    var d = checkloai(loaiSp);
    var e = checknsx(nsx);
    if(a == true && b ==true && c== true && d==true && e==true){
        window.location.assign("successfull.html");
    }else{
        setInterval("loopError()",3000);
    }

}
