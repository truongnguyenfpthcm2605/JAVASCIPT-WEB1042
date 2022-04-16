function checksearch (){
    if(document.formtim.tukhoa.value=='Tìm ki m') {
    alert("B n ch a nh p t khóa tìm ki m…");
    document.formtim.tukhoa.focus();
    return false; // Ch n form không cho submit
    }
     return true; // Cho submit form khi đã ki m tra xong
}