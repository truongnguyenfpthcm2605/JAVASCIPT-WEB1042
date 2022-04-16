function checkform(){

    var masv = document.getElementById("masv");
    var hoten = document.getElementById("namesv");
    var  nam = document.getElementById("boy");
    var  nu = document.getElementById("girl");
    var hobby = document.getElementsByName("hobbie");
    var tinh = document.getElementsByName("pro");
    
    if(masv.value == ""){
        document.getElementById("loi1").innerHTML= "Không được để trống mã sinh viên";
        masv.className="error";
    }else if(masv.value.length != 7){
        document.getElementById("loi1").innerHTML = "Mã sinh viên phải đúng 7 kí tự";
        masv.className="error";
    }else{
        document.getElementById("loi1").innerHTML ="Thành Công!";
        document.getElementById("loi1").style.color= "green";
        masv.className="edit";
    }
    setInterval("document.getElementById('loi1').innerHTML=''",4000);
    if(hoten.value == ""){
        document.getElementById("loi2").innerHTML = "Không được để trống họ tên sinh viên";
        hoten.className="error";
    }else if(hoten.value.length >= 6 && hoten.value.length >=30){
        document.getElementById("loi2").innerHTML = "Họ và tên sinh viên phải từ 6 đến 30 kí tự";
        hoten.className="error";
    }else{
        document.getElementById("loi2").innerHTML ="Thành Công!";
        document.getElementById("loi2").style.color= "green";
        hoten.className="edit";
    }
    setInterval("document.getElementById('loi2').innerHTML=''",4000);
    if(nam.checked || nu.checked){
        document.getElementById("loi3").innerHTML ="Thành Công!";
        document.getElementById("loi3").style.color="green";
    }else{
        document.getElementById("loi3").innerHTML="Bạn chưa chọn giới tính";
        
    }
    setInterval("document.getElementById('loi3').innerHTML=''",4000);
    for(var i = 0 ; i< hobby.length;i++){
        if(hobby[i].checked ==true){
            document.getElementById("loi4").innerHTML = "Thanh công!";
            document.getElementById("loi4").style.color='green';
           
        }else{
            document.getElementById("loi4").innerHTML = "Vui lòng chọn sở thích";
            setInterval("document.getElementById('loi4').innerHTML=''",4000);
        }
    }
    setInterval("document.getElementById('loi4').innerHTML=''",4000);
    
    if(tinh.value == -3){
        document.getElementById("loi5").innerHTML = "vui lòng chọn tỉnh thành";
    }else{
        document.getElementById("loi5").innerHTML = "Thành Công!";
        document.getElementById("loi5").style.color = 'green';
    }
    setInterval(" document.getElementById('loi5').innerHTML =''",4000);

}