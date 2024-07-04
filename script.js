let string = "";
let buttons =document.querySelectorAll('.button');
let  memory =0;
console.log(Array.from(buttons));
Array.from(buttons).forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.innerHTML == '='){
            try{
                string =eval(string);
                document.querySelector('input').value =string;
            }
            catch(e){
                document.querySelector('input').value = "Error";
                string = "";
            }
           
        }
        else if(e.target.innerHTML == 'C'){
            try{
            string ="";
            document.querySelector('input').value=string;
            }
            catch(e){
            document.querySelector('input').value = "Error";
                string = "";
            }
        }
        else if (e.target.innerHTML == 'M+') {
            try {
                memory += eval(string); // Add the current value to memory
                string = "";
                document.querySelector('input').value = "Memory: " + memory;
            } catch {
                document.querySelector('input').value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == 'M-') {
            try {
                memory -= eval(string); // Subtract the current value from memory
                string = "";
                document.querySelector('input').value = "Memory: " + memory;
            } catch {
                document.querySelector('input').value = "Error";
                string = "";
            }
        } 
        else{
            console.log(typeof(e.target.innerHTML));
            string =string + e.target.innerHTML;
            document.querySelector('input').value =string;
        }
    });
})