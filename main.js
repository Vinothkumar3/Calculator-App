import '/style.css'

const equal=document.getElementById("equal")
const result=document.querySelector("#result")
const clear=document.getElementById("clear")
const deleteNum=document.getElementById("deleteNum")
const operand=document.querySelector("#operand") // click num,operation show operand div i.e 1+2 
const numbers=document.querySelectorAll("[data-operand]")
const splNumber=document.querySelector("[data-splOperand]")
const operation=document.querySelectorAll("[data-operation]")

 
const appendText=(numbers)=>{ //every number click to show #operand div
   operand.textContent+= numbers 
}

const addNumberList=(numEls)=>{ //ever number click appendText fn
    numEls.addEventListener("click",()=>{
      appendText(parseInt(numEls.innerText))
      
    })
  }

  numbers.forEach((num)=>{  //numbers buttons one by one pass arg addNumberList fn. 
    addNumberList(num)
    })

splNumber.addEventListener("click",(e)=>{ // dot num
  appendText(e.target.innerText) 
 }) 

 operation.forEach((opeEl)=>{ //operations buttons one by one pass arg addNumberList fn. 
  addNumberList(num)
   opeEl.addEventListener("click",()=>{
      appendText(opeEl.innerText)
   })
 })

equal.addEventListener("click",()=>{ //equal button click event
  try { 
    let evalExp= eval(operand.innerText)
     result.innerText= evalExp
  } catch (error) {
    result.innerText="expression error!"
    
  }
})


 clear.addEventListener("click",()=>{  //clear btn click event
   operand.innerText=''
   result.innerText=''
 })

deleteNum.addEventListener("click",()=>{ //delete each operand value btn click event
   let operTxt=operand.innerText
   let operArr=[... operTxt]
     operArr.pop()
   let deleteOpr= operArr.join("")
   operand.innerText=deleteOpr
 })