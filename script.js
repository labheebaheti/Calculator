const inputBox = document.getElementById("input-box");
const buttons = document.querySelectorAll("button");

let input = "";

buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        const btnVal = button.textContent;
        if(btnVal === 'AC'){
            input = "";
        }
        else if(btnVal === 'DEL'){
            input = input.slice(0,-1);
        }
        else if(btnVal === '='){
            try{
                input = eval(input).toString();
            }
            catch(error){
                input = "ERROR";
            }
        }
        else{
            input = input + btnVal;
        }
        inputBox.value = input;
    })
})