
function cal() {
document.getElementById("demo").innerHTML =  myFunction();
}
function myFunction() {
  var x, text,y,z;

  // Get the value of the input field with id="numb"
  x = document.getElementById("pnumber").value;
   y= document.getElementById("2pnumber").value;
     z= document.getElementById("inputGroupSelect01").value;

  // If x is Not a Number or less than one or greater than 10
  
   x=parseInt(x)
   y=parseInt(y)
   z=parseInt(z)
  if(z==1)
{
  text=add(x,y)
}
if(z==2)
    {
    text = sub(x,y);
  }
 if(z==3)
    {
    text = mul(x,y);
  }
if(z==4)
    {
    text = div(x,y);
  }
if(z==5)
    {
    text =absu(x);
  }
if(z==6)
    { 
      
    text =per(x,y);
  }
if(z==7)
{
   text= root(x);
}
   
   
  
  return text ; 
  
}
 function add(x,y) 
    { 
    
    return x+y ;
  }
function sub(x,y) 
    { 
    
    return x-y ;
  }
function mul(x,y) 
    { 
    
    return x*y ;
  }
function div(x,y) 
    { 
    
    return x/y ;
  }
function absu(x) 
    { 
    
    return Math.abs(x) ;
  }
function per(x,y) 
    { var t ;
      t=x/100
    return y*t;
  }
function root(x) 
    { var text ;
    
    text = Math.sqrt(x);
    if(Number.isInteger(text)!= true)
    {
    text=text.toFixed(2);
    } 
     return text;
     
  }
 function checkPalindrome() {
var revStr = "";
var str = document.getElementById("str").value;
var i = str.length;
for(var j=i; j>=0; j--) {
revStr = revStr+str.charAt(j);
}
if(str == revStr) {
alert(str+" -is Palindrome");
} else {
alert(str+" -is not a Palindrome");
}
}
var button = document.getElementById('button-test');
button.addEventListener('click', checkAnagram);
var resultDiv = document.getElementById('result');

function checkAnagram() {
  var str1 = document.getElementById('string1').value;
  var str2 = document.getElementById('string2').value;
  if(str1 !== null && str2 !== null) {
    if(str1.length !== str2.length) {
      resultDiv.innerHTML = "Strings are not anagrams.";
      return false;
    }
    var hashTable = {};
    for(var i = 0; i < str1.length; i++) {
      if(hashTable.hasOwnProperty(str1[i])) {
        hashTable[str1[i]] = hashTable[str1[i]] + 1;
    } else {
     hashTable[str1[i]] = 1; 
    }
  }
   
  for(var i = 0; i < str2.length; i++) {
    if(hashTable.hasOwnProperty(str2[i])) {
      hashTable[str2[i]] = hashTable[str2[i]] - 1;
    } else {
      resultDiv.innerHTML = "Strings are not anagrams.";
      return false;
    }
  }
    
  for(var i in hashTable) {
    if(hashTable[i] !== 0) {
        alert(" not Anagrams");
    
    } else {
        alert(" are Anagrams");
    }
  }
}
}

function random() {
var j,i;
  var x = Math.floor((Math.random() * 1000) + 1);
  document.getElementById("demo").innerHTML = x;
var y = Math.floor((Math.random() * 1000) + 1);
  document.getElementById("demo1").innerHTML = y
j=x%3
i=y%3
if(j==0 && i==1)
{  
   document.getElementById("demo3").innerHTML = "human servive"
}
if(j==1 && i==0)
{  
   document.getElementById("demo3").innerHTML = "human servive"
}
if(j==0 && i==2)
{  
   document.getElementById("demo3").innerHTML = "HUman dies"
}
if(j==2 && i==0)
{  
   document.getElementById("demo3").innerHTML = "Human dies"
}
if(j==1 && i==2)
{  
   document.getElementById("demo3").innerHTML = "cockroach servive"
}
if(j==2 && i==1)
{  
   document.getElementById("demo3").innerHTML = "cockroach servive"
}
if(i==j)
{  
   document.getElementById("demo3").innerHTML = "TIE"
}
}

function val() {
var x,y,z,e=-1,f=-1,n1,n2=null,l,result=null,result7=null;
x = document.getElementById("name3").value;
   y= document.getElementById("email3").value;
     z= document.getElementById("pnumber3").value;
e = y.search("@");
f = y.search(".");
if(f==-1 || e==-1)
{ alert("email is not perfect");
}
l=z.length
var patt1 = /[a-z]/g;
result = z.match(patt1);
var patt7 = /[A-Z]/g;
result7 = z.match(patt7);
if(result!=null || l!=10 || result7!=null)
{
alert("ph number is not perfect");
}
n1=x[0]
var patt2 = /[0-9]/g;
n2 = n1.match(patt2);
if(n2!=null)
{
alert("name is not perfect");
}

}
function empty()
{
   var x,y,z;
   x = document.getElementById("name3").value;
   y= document.getElementById("email3").value;
     z= document.getElementById("pnumber3").value;
    if (x == "" ||y == ""||z == "")
    {
    alert("all fields must be filled out");
    
  }
}