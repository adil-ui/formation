var burger = document.querySelector(".burger");
var header = document.querySelector(".header");

var click=0;

burger.onclick = function()
        {
            if (click == 0) {
                header.style.height="calc((1.8em + 10px *2) * 5)";
                click++;
            } else {
                 click=0;
                header.style.height="33px";
            }
            
        }

burger.onclick();