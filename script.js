let inputbox = document.getElementById("inputBox");
let buttons = document.querySelectorAll(".row button");

let string = ""
 
buttons.forEach(element => {
  element.addEventListener("click" , (e) => {
    if(e.target.innerText == "="){
      string = String(eval(string))
      inputbox.value = string
    } else if(e.target.innerText == "AC"){
      string = ""
      inputbox.value = string
    } else if(e.target.innerText == "DEL"){
      string = string.substring(0 , string.length-1)
      inputbox.value = string
    }else if(e.target.id == "plusMinus"){
      string = String(-eval(string))
      inputbox.value = string
    } else {
      string += e.target.innerText;
      inputbox.value = string
    }
  })
})



