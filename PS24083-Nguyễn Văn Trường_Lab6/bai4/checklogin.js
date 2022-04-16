function checklogin(){
    if(document.flogin.u.value==''){
    alert("B n ch a nh p username");
    document.flogin.u.focus(); //Ch n đ i t ng u
    return false; // Ch n form không cho submit
    }
    if(document.flogin.p.value=='') {
    alert("B n ch a nh p password");
    document.flogin.p.focus(); //Ch n đ i t ng p
    return false;
    }
}