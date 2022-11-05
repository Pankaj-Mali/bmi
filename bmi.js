let age= document.getElementById("age");
let gender = document.getElementsByName("gender");
let height = document.getElementById("height");
let weight = document.getElementById("weight");


function bmi (){
    let a1 = age.value
    let h1=height.value;
    let w1=weight.value;
    let h = h1/100
    h=h.toFixed(2)
    let result = w1/(h*h)
     result= result.toFixed(2)
if(a1<2 || a1>120){
    let resultdiv = document.getElementById("para");
    resultdiv.style= "color:red"
resultdiv.innerHTML= "Age should be between 2 to 120"
return
} 
let resNOte;
if (result < 16){
     resNOte="sever thinness"
}else if(result <16 && result>17){
    resNOte="moderate thinness"
 }else if(result <17 && result>18.5){
    resNOte="mid thinness"
 }else if(result <18.5 && result>25){
    resNOte="Normal"
 }else if(result <25 && result>30){
    resNOte="over weight"
 }else if(result <30 && result>35){
    resNOte="obese class 1"
 }else if(result <35 && result>40){
    resNOte="obese class II"
 }else{
    resNOte="obese class III"
 }


if(result){let resultdiv = document.getElementById("para");

resultdiv.innerHTML= " BMI="+result +"  "+ resNOte} 

     
    
}
