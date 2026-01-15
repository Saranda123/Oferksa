document.addEventListener('DOMContentLoaded', function(){
    navegacionFija();
})

function navegacionFija(){
    const navegacion = document.querySelector('.navegacion');
    const questionario = document.querySelector('.questionario');


    window.addEventListener('scroll', function(){
        if(questionario.getBoundingClientRect().bottom < 1){
            navegacion.classList.add('fijo');
        }
        else{
            navegacion.classList.remove('fijo');
        }
    })
}