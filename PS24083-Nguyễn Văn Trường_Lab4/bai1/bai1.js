var pt = new Object();
pt.a = null;
pt.b = null;
pt.c = null;
pt.input = function(){
    do{
    this.a = prompt("Nhập vao a : ");
    this.b= prompt("Nhập vao b : ");
    this.c = prompt("Nhập vao c : ");
    }while(isNaN(this.a) || isNaN(this.b) || isNaN(this.c));
   
   if(this.a ==0 ){
    document.getElementById("pt1").innerHTML = null;
   }else{
    document.getElementById("pt1").innerHTML = this.a+"X<sup>2</sup> + ";
   }
   if(this.b ==0 ){
    document.getElementById("pt2").innerHTML = null;
   }else{
    document.getElementById("pt2").innerHTML = this.b+"X ";
   }
    
    if(this.c ==0){
        document.getElementById("pt3").innerHTML = " = 0";
    }else{
        document.getElementById("pt3").innerHTML = "+ "+this.c + " = 0";
    }
};

pt.giaipt = function() {
   
   

    if(this.a ==0) {
        var pt1 = -this.c/this.b;
        document.getElementById("result").innerHTML = "Phương trình bậc nhất  X = "+ pt1;
    }else{
        var delta = Math.pow(this.b, 2) - 4*this.a*this.c;
       

        if(delta < 0){
            document.getElementById("result").innerHTML = "Phương Trình vô nghiệm";
        }else if(delta == 0){
            document.getElementById("result").innerHTML = "Phương Trình có Nghiệm kép X = " + -this.b/(2*this.a);
        }else{
            var x1 = (-this.b+Math.sqrt(delta))/(2*this.a);
            var x2 = (-this.b-Math.sqrt(delta))/(2*this.a);
            document.getElementById("result").innerHTML = "Phương Trình có 2 nghiệm phân biệt : " + "<br>" + "X<sub>1</sub> = "+ x1 +"<br>" + "X<sub>2</sub> = "+ x2;
        }
        
    }
}



