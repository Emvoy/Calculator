let operator;
let firstnum;
let firstnumber;
let secondnumber;
let thirdnumber;


let display1=document.getElementById('upscreen')
let display2=document.getElementById('downscreen')


function numbers(check) {
 display2.innerHTML+=check

}
function del(params) {
    display1.innerHTML=('')
    let delet = display2.innerHTML
    display2.innerHTML= delet.substr(0,delet.length -1)
}
function operators(signs) {

     firstnum = display2.innerHTML
      display1.innerHTML = `${firstnum} ${signs}`
       display2.innerHTML = ('')
     operator = signs

}
function see(params) {
  if (operator =='+') {
    answer();
    collect();
    display1.innerHTML += display2.innerHTML
     display2.innerHTML = Number(firstnumber)   + Number(secondnumber)
    
  }
  
}

function collect() {
    firstnumber = firstnum;
    secondnumber = Number(display2.innerHTML);
}
function answer() {
  collect();
    if (operator =='+') {
       
  
    display1.innerHTML += display2.innerHTML
     display2.innerHTML = Number(firstnumber)   + Number(secondnumber)    }
   
   else if (operator =="-") {
     
    display1.innerHTML += display2.innerHTML
     document.getElementById("downscreen").innerHTML= Number(firstnumber)   - Number(secondnumber)    }

    else if (operator =="*") {
      display1.innerHTML += display2.innerHTML
      document.getElementById("downscreen").innerHTML= Number(firstnumber)   * Number(secondnumber)    }

   else if (operator =="/") {
    display1.innerHTML += display2.innerHTML
    document.getElementById("downscreen").innerHTML= Number(firstnumber)   / Number(secondnumber)    }

   }