
// cara saya =======

const xTombol = document.getElementsByClassName('close')[0];

xTombol.addEventListener('click', function(){
    const card = document.getElementsByClassName('card')[0];
    card.classList.remove('card');
    card.innerHTML= '';
});


// cara sumber materi ====
const close1 = document.querySelector('.close');
const card = document.querySelector('.card');


close1.addEventListener('click', function(){
    card.style.display = 'none';
})


/**
 * 
 * =================== DOM TRAVERSAL ==================
 */



// cara pertama
const close = document.querySelectorAll('.close');

for(let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    })
}

// cara kedua
close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
        
    });
});




/**
 * DOM Traversal method selain parentElement
 * 
 * 1. parentNode                -> node
 * 2. parentElement             -> element
 * 3. nextSibling               -> node
 * 4. nextElementSibling        ->element
 * 5. previousSibling           -> node
 * 6. previousElementSibling    -> element
 * 
 */