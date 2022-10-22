const BTNS_RESPONSE = document.querySelectorAll('button[data-is-correct]');
const BTN_NEXT_QUESTION = document.getElementById('btn-siguiente-pregunta');
const DIALOG_AVATAR = document.getElementById('dialog-avatar');
const USER_ID = document.querySelector('a[data-user-id]');
const NUMERO_PREGUNTA = document.querySelector('h2[data-user-numero-pregunta]');
const NIVEL = document.querySelector('p[data-user-nivel]');

BTNS_RESPONSE.forEach(btn => {
let siguiente_e = btn.nextSibling;

btn.addEventListener("click", ()=>{
    let is_correct = btn.dataset.isCorrect;
    
    if(is_correct == 1){
        siguiente_e.classList.add("fas");
        siguiente_e.classList.add("fa-check");
        siguiente_e.classList.add("pregunta-ok");
    
        if(btn.attributes[1].value == "false"){            
            //sendDetailPoint(USER_ID.dataset.userId,NUMERO_PREGUNTA.dataset.userNumeroPregunta,NIVEL.dataset.userNivel,1,5);
            btn.attributes[1].value="true";
        }

        DIALOG_AVATAR.classList.add('avatar-active');        
        DIALOG_AVATAR.children[0].classList.add('avatar-active');
            setTimeout(() => {
                DIALOG_AVATAR.classList.remove('avatar-active');        
                DIALOG_AVATAR.children[0].classList.remove('avatar-active');
              }, "2000")
                  
        BTN_NEXT_QUESTION.disabled=false;

    }else if (is_correct == 0){
        siguiente_e.classList.add("fas");
        siguiente_e.classList.add("fa-times");
        siguiente_e.classList.add("pregunta-error");
        
        if(btn.attributes[1].value == "false"){            
            //sendDetailPoint(USER_ID.dataset.userId,NUMERO_PREGUNTA.dataset.userNumeroPregunta,NIVEL.dataset.userNivel,1,0);
            btn.attributes[1].value="true";
        }

        DIALOG_AVATAR.classList.add('avatar-active');        
        DIALOG_AVATAR.children[1].classList.add('avatar-active');
            setTimeout(() => {
                DIALOG_AVATAR.classList.remove('avatar-active');        
                DIALOG_AVATAR.children[1].classList.remove('avatar-active');
              }, "2000")
        
    }else{
        siguiente_e.classList.remove("fas");
        siguiente_e.classList.remove("fa-check"); 
        siguiente_e.classList.remove("fa-times");
    }

});
});

//Envio fetch data al servidor

async function sendDetailPoint(user_id,numero_pregunta,nivel="",intento="",punto=0){
 
 let punteo = {  
    user_id:user_id,  
    numero_pregunta: numero_pregunta,
    nivel: nivel,
    intento: intento,
    punto: punto
  };

await fetch('/preguntas', {
    headers: {
        'X-CSRF-TOKEN': window.CSRF_TOKEN,
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
    },
   method: 'put',   
   body: JSON.stringify(punteo)
})
.then(function (response) {
    return response.json();
}).then(function (data) {
    console.log('Async Fetch', data);
});
}