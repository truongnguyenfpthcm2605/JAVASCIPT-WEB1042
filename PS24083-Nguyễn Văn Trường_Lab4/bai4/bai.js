var w;
function opens() {
    w = window.open("information.html", "Infor","width : 100px ,height: 100px, right = 10px" );
    w.focus();
}
function next() {
    w.moveBy(5,10);
    w.focus();
 
}
function clickone(){
    do{
        var x = prompt("Nhập vào x :");
        var y = prompt("Nhập vào y : ");

    }while(isNaN(x)==true || isNaN(y)==true);
    w.moveBy(5,10);
    w.focus();
 
}
function exit(){
    w.close();
}
function numver(){
    w.print();
}


    
 
   
 
 
    

  
 
