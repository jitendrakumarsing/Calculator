
let string = "";
let input = document.getElementById("input");
let buttons = document.getElementsByClassName("button");


Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (Event) => {
        try {
           
            if(input.value.type == Number);
            if (Event.target.innerHTML == '=' || Event.target.innerHTML == 'OK') {
                string = eval(input.value);
                input.value = string;    
            }
            else if (Event.target.innerHTML == "C") {
                string = "";
                input.value = string;
            }
            else if (Event.target.innerHTML == "%") { 
             string=eval(input.value)/100
              input.value= string;
            }
            else if (Event.target.innerHTML == "Del") { 
             string= input.value.slice(0,-1 );
              input.value= string;
            }
            else {
                string = string + Event.target.innerHTML;
                input.value = string;
            }
        
        } catch (error) {
            console.error("invalid value");
            string="syntax error"
            input.value= string;

        }
    })
})



