import '/style.css'

const equal=document.getElementById("equal")
const result=document.querySelector("#result")
const operand=document.querySelector("#operand")

const num1=document.getElementById("num1")
const num2=document.getElementById("num2")
 
num1.addEventListener("click",()=>{
    operand.textContent= num1.textContent
})
num2.addEventListener("click",()=>{
    operand.textContent+="+"+ num2.textContent
})


equal.addEventListener("click",()=>{
 const finalResult= parseInt(num1.innerText)+parseInt(num2.innerText);
 result.textContent=finalResult
})
