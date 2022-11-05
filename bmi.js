let age= document.getElementById("age");
let gender = document.getElementsByName("gender");
let height = document.getElementById("height");
let weight = document.getElementById("weight");


function bmi (){
    let h1=height.value;
    let w1=weight.value;
    let h = h1/100
    h=h.toFixed(2)
    let result = w1/(h*h)
     result= result.toFixed(2)
if(result){let resultdiv = document.getElementById("para");
   
resultdiv.innerHTML=" BMI="+result} 

     
    
}
