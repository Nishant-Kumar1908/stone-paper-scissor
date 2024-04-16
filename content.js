var a=document.getElementById("lower1");
var b=document.getElementById("lower11")
var c=document.getElementById("cross")
var d=document.getElementById("rules")
var a1=document.getElementById("user-win")
var a2=document.getElementById("user-lose")
var a3=document.getElementById("user-tie")
var c1=document.getElementById("computer-win")
var c2=document.getElementById("computer-lose")
var c3=document.getElementById("computer-tie")
var pwu=document.getElementById("photo-user-win")
var pwc=document.getElementById("photo-computer-win")
var plu=document.getElementById("photo-user-lose")
var plc=document.getElementById("photo-computer-lose")
var ptu=document.getElementById("photo-user-tie")
var ptc=document.getElementById("photo-computer-tie")
var initial=document.getElementById("container2-left")
var winner=document.getElementById("container2-left-win")
var looser=document.getElementById("container2-left-lose")
var tier=document.getElementById("container2-left-tie")
var winner1=document.getElementById("lower2")
var winner2=document.getElementById("lower22")



function rulesclose(){
    a.style.display='none';
    c.style.display='none';
    b.style.display='block';
}
function rulesopen(){
    a.style.display='block';
    c.style.display='block';
    b.style.display='none';
}
var arr=["stone.svg","paper.svg","scissor.svg"]
    var myscore=0;
    var computerscore=0;
    var arr1=["16px solid #0074B6","16px solid #FFA943","16px solid #BD00FF"]
    function winning(set1,set2){
        initial.style.display="none";
        
        winner1.style.display="none";
        
        looser.style.display="none";
        tier.style.display="none";
        winner.style.display="block";
        winner2.style.display="block";
 
        a1.style.border=arr1[set1-1];
        pwu.src=arr[set1-1];
        c1.style.border=arr1[set2-1];
        pwc.src=arr[set2-1];
        myscore++;
        document.getElementById("your").value=myscore;
        
    
    }
    function loosing(set1,set2){
        initial.style.display="none";
        winner.style.display="none";
        winner2.style.display="none";
        tier.style.display="none";
        winner1.style.display="block";
        looser.style.display="block";
        a2.style.border=arr1[set1-1];
        plu.src=arr[set1-1];
        c2.style.border=arr1[set2-1];
        plc.src=arr[set2-1];
        computerscore++;
        document.getElementById("computer").value= computerscore;
    
    }
    function tieing(set1,set2){
        initial.style.display="none";
        winner.style.display="none";
         winner2.style.display="none";
        looser.style.display="none";
        tier.style.display="block";
        winner1.style.display="block";
        
            a3.style.border=arr1[set1-1];
            ptu.src=arr[set1-1];
            c3.style.border=arr1[set2-1];
            ptc.src=arr[set2-1];
        
    
    }
    function redirect(){
        initial.style.display="block";
        
        winner1.style.display="block";
        
        looser.style.display="none";
        tier.style.display="none";
        winner.style.display="none";
        winner2.style.display="none";
    }
function decision(value){
    
   
    var comp= Math.floor(Math.random() *3)+1;
    let set1=value;
    let set2=comp;
   
    if((value===1)&&(comp===2)||(value===2)&&(comp===3)||(value===3)&&(comp===1))
    {  
        loosing(value,comp);
    }
    else if((value===2)&&(comp===1)||(value===3)&&(comp===2)||(value===1)&&(comp===3))
    {  
        winning(value,comp);
    }
    else{
       
        tieing(value,comp)
    }
}
var cur= document.getElementById("congo")
var cur1=document.getElementById("non-congo")
function commingback1(){
    cur1.style.display="none";
    cur.style.display="block";
    initial.style.display="block";
        
    winner1.style.display="block";
    
    looser.style.display="none";
    tier.style.display="none";
    winner.style.display="none";
    winner2.style.display="none";
}

function commingback()
{
    cur.style.display="none";
    cur1.style.display="block";
  
}

