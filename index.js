const pantalla = document.querySelector(".display");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click",() =>{
        const botonApretado = boton.textContent;
        
        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }
        if(boton.id === "ce"){
            if(pantalla.textContent.length ===1  || pantalla.textContent === "error"){//si ha un solo caracter en la pantalla sea 0
                pantalla.textContent = "0";
            }else{
            pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
            return;//para que no haga lo de abajo
        }

        if(boton.id === "igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = "error";
            }
            
            return;
        }

        if(pantalla.textContent === "0"){
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;
        }
    });
});
