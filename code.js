function fun(){
var a=parseInt(document.getElementById('bookOne').value);
var b=parseInt(document.getElementById('bookTwo').value);
var c=parseInt(document.getElementById('bookThree').value);
var d=parseInt(document.getElementById('bookFour').value);
var e=parseFloat(document.getElementById('bookFive').value);
if(d<700 )
{alert("Minimum 700mm clearance is required around the cooling tower for service and maintenance")}
else{
    var output1=((a*e)/(b*c))/(3600/(1000000));
    output1= output1.toFixed(2)
    document.getElementById("output1").innerHTML=output1 ;
    var output2= ((a*e)/(b*d+c*d)/(3600/1000000));
    output2 = output2.toFixed(2)
    document.getElementById("output2").innerHTML=output2 ;
    if (output1>(output2) )
    {document.getElementById("summary").innerHTML="<span style='color:#292'><b>Air inlet clearance is okay (Distance must be well ventilated and obstacle free)</b></span>"}
    else
    {document.getElementById("summary").innerHTML="<span style='color:red'><u><b>Please increase air inlet clearance</b></u)</span>"} 
    // if(per>=80)
//     {document.getElementById("grade").textContent="A";}
//     else if(per>=70)
//     {document.getElementById("grade").textContent="B";}
//     else if(per>=60)
//     {document.getElementById("grade").textContent="C";}
//     else if(per>=50)
//     {document.getElementById("grade").textContent="D";}
}
}