let response = {
    r1:"",
    r2:""
}
let correctAnswer = {
    c1:" 28 de Julio",
    c2:" 8 de Octubre"
}
/* Primera Pregunta*/
document.querySelector('.first-question #first-rs').addEventListener('click', evt => {
    
    document.querySelector(".first-question #second-rs").checked = false;
    document.querySelector(".first-question #third-rs").checked = false;

})
document.querySelector('.first-question #second-rs').addEventListener('click', evt => {
    
    document.querySelector(".first-question #first-rs").checked = false;
    document.querySelector(".first-question #third-rs").checked = false;

})
document.querySelector('.first-question #third-rs').addEventListener('click', evt => {
    
    document.querySelector(".first-question #first-rs").checked = false;
    document.querySelector(".first-question #second-rs").checked = false;

})
/*Segunda Pregunta*/
document.querySelector('.second-question #first-rs-s').addEventListener('click', evt => {
    
    document.querySelector(".second-question #second-rs-s").checked = false;
    document.querySelector(".second-question #third-rs-s").checked = false;

})
document.querySelector('.second-question #second-rs-s').addEventListener('click', evt => {
    
    document.querySelector(".second-question #first-rs-s").checked = false;
    document.querySelector(".second-question #third-rs-s").checked = false;

})
document.querySelector('.second-question #third-rs-s').addEventListener('click', evt => {
    
    document.querySelector(".second-question #first-rs-s").checked = false;
    document.querySelector(".second-question #second-rs-s").checked = false;

})
let form = document.querySelector("#formulario").addEventListener("submit", evt => {
    evt.preventDefault();
    
    document.querySelector(".first-question #first-rs").checked ? response.r1 = document.querySelector(".first-question #first-rs").value: console.log("nada")
    document.querySelector(".first-question #second-rs").checked ? response.r1 = document.querySelector(".first-question #second-rs").value: console.log("nada")
    document.querySelector(".first-question #third-rs").checked ? response.r1 = document.querySelector(".first-question #third-rs").value: console.log("nada")
    
    document.querySelector(".second-question #first-rs-s").checked ? response.r2 = document.querySelector(".second-question #first-rs-s").value: console.log("nada")
    document.querySelector(".second-question #second-rs-s").checked ? response.r2 = document.querySelector(".second-question #second-rs-s").value: console.log("nada")
    document.querySelector(".second-question #third-rs-s").checked ? response.r2 = document.querySelector(".second-question #third-rs-s").value: console.log("nada")
    
    if(response.r1 !== correctAnswer.c1 && response.r2 !== correctAnswer.c2 ){
        mostrarAlert(1,response );
    }else if(response.r1 !== correctAnswer.c1 || response.r2 !== correctAnswer.c2){
        mostrarAlert(2,response );
    }else if(response.r1 === correctAnswer.c1 && response.r2 === correctAnswer.c2){
        mostrarAlert(3,response );
    }
    
})

function mostrarAlert(valor, respuesta){
    let alert = document.querySelector("div .alert");
    let divRespuesta = document.createElement("div");
    alert.appendChild(divRespuesta)
    let p = document.createElement("p");
    
    
    switch (valor) {
        case 1:
            
            divRespuesta.classList.add("response-bad");
            p.textContent = ` Respuestas Incorrectas, Intentalo de nuevo... :(` ;
            divRespuesta.appendChild(p);
            setTimeout(() => {
                limpiarHtml();
            }, 3000);
            break;
        case 2:
           
            divRespuesta.classList.add("response-middle");
            p.textContent = `Acertastes solo en uno de las Preguntas, intentalo de nuevo` ;
            divRespuesta.appendChild(p);
            setTimeout(() => {
                limpiarHtml();
            }, 3000);
            break;
        case 3:
            
            divRespuesta.classList.add("response-success");
            p.textContent = ` Felicitaciones !!! las respuestas fueran Correctas` ;
            divRespuesta.appendChild(p);
            setTimeout(() => {
                limpiarHtml();
            }, 3000);
            break;
    
        default:
            break;
    }
}
function limpiarHtml(){
    while(document.querySelector("div .alert").firstChild){
        document.querySelector("div .alert").removeChild(document.querySelector("div .alert").firstChild)
    }
}
